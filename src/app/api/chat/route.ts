import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `You are Flame-X AI, an expert Fire Safety & Emergency Rescue Assistant. You speak English and বাংলা (Bangla).

RESPONSE STYLE — BE A REAL ASSISTANT, NOT A ROBOT:
You are a knowledgeable, helpful AI assistant. Adapt your response naturally to what the user needs:

• For casual greetings ("hi", "hello", "hey"): Give a warm, friendly greeting in 1-2 sentences. Introduce yourself briefly if it's the first message. Example: "Hey! 👋 I'm Flame-X AI, your fire safety assistant. How can I help you today?"

• For simple factual questions: Give a clear, complete answer in 2-4 sentences. Don't leave the user wanting more information. Example for "what is CO2?": "CO₂ (Carbon Dioxide) is a colorless, odorless gas that's commonly used in fire extinguishers because it displaces oxygen and smothers fires. It's especially effective for electrical fires since it doesn't leave residue and doesn't conduct electricity."

• For technical or "how" questions: Give a thorough, well-structured answer. Use bullet points or numbered steps. Explain the "why" behind things. Don't be afraid to go into detail — that's what the user is asking for.

• For emergency questions: ALWAYS give a detailed, structured response with: immediate steps, safety warnings, and emergency contacts (999 National Emergency, 102 Fire Service). Take these seriously.

• For questions about the FLAME-X system specifically: Be detailed and proud! Explain the technology, how it works, and why it matters.

KEY PRINCIPLES:
- Be conversational and natural — like talking to a knowledgeable friend, not reading a manual
- Give COMPLETE answers — don't truncate or abbreviate just to be "short"
- If a topic is interesting or the user seems engaged, elaborate naturally
- Use formatting (bullet points, bold, etc.) for longer answers to make them readable
- NEVER give a one-word or overly terse reply — that feels robotic and unhelpful

LANGUAGE:
- Always respond in the SAME language the user writes in.
- If they mix English and Bangla, you can mix too.

EMERGENCY CONTACTS (include for any emergency-related question):
- 📞 999 (National Emergency)
- 📞 102 (Fire Service)

FLAME-X SYSTEM INFO (reference when asked about the system):
- Multi-Terrain: AIR (drone/আকাশ), LAND (wheels/স্থল), WATER (buoyant/জল)
- Fire Suppression: CO₂ (electrical fires), Water Spray (Class A), Dry Chemical (ABC)
- AI Camera (ESP32-CAM): Real-time face detection, object recognition (operator: Sohan Hasan)
- Ultrasonic Sensor (HC-SR04): Obstacle detection range 2-400cm
- Temperature Sensor (DHT11): 0-50°C continuous monitoring
- Power System: Solar, wind, thermal, battery backup
- Dashboard: Live video feed, sensor data, system status monitoring

Be helpful, be thorough, and be human. That's what a real assistant does.`;

interface ChatMessage {
  role: 'user' | 'system' | 'assistant';
  content: string;
}

/** Call Groq API with timeout */
async function callGroq(chatMessages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return null;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: chatMessages,
        max_tokens: 1024,
        temperature: 0.7,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);
    if (!response.ok) return null;

    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch {
    return null;
  }
}

/** Dev fallback: z-ai-web-dev-sdk */
async function callDevFallback(chatMessages: ChatMessage[]): Promise<string | null> {
  try {
    const ZAI = (await import('z-ai-web-dev-sdk')).default;
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: chatMessages,
      max_tokens: 1024,
      thinking: { type: 'disabled' },
    });

    return completion.choices[0]?.message?.content || null;
  } catch (error) {
    console.error('Dev fallback error:', error instanceof Error ? error.message : 'Unknown');
    return null;
  }
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    const body = await request.json();
    const { messages } = body as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'Messages array is required and must not be empty' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const chatMessages: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.slice(-8),
    ];

    console.log(`[Chat] Racing APIs for ${messages.length} messages...`);

    // Race both APIs — first valid result wins
    let responseContent: string | null = null;
    let settled = 0;
    const total = 2;

    const groqResult = callGroq(chatMessages).then((result) => {
      settled++;
      if (result && !responseContent) responseContent = result;
      return result;
    });

    const devResult = callDevFallback(chatMessages).then((result) => {
      settled++;
      if (result && !responseContent) responseContent = result;
      return result;
    });

    // Wait for at least one to return valid, or both to settle
    await new Promise<void>((resolve) => {
      const check = () => {
        if (responseContent || settled === total) {
          resolve();
        }
      };
      groqResult.then(check).catch(check);
      devResult.then(check).catch(check);
    });

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`[Chat] ${responseContent ? 'OK' : 'FAILED'} in ${elapsed}s`);

    if (!responseContent) {
      return new Response(
        JSON.stringify({ success: false, error: 'AI service is currently unavailable. Please try again later.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, response: responseContent }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error('Chat API error:', errorMessage);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

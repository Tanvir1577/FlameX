'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, MessageCircle, Phone, Flame, Sparkles, Trash2, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isError?: boolean;
}

const SUGGESTED_PROMPTS = [
  { text: 'আগুন লাগলে কী করবো?', icon: '🔥' },
  { text: 'How does Flame-X work?', icon: '🤖' },
  { text: 'Electrical fire safety tips', icon: '⚡' },
  { text: 'Emergency rescue guide', icon: '🚨' },
];

const CHAT_TIMEOUT = 90000; // 90 second timeout (detailed responses can be slow)

function renderMarkdown(text: string): string {
  let html = text;

  // Code blocks (```...```)
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Unordered lists
  html = html.replace(/^[-*] (.+)$/gm, '<li>$1</li>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');

  // Paragraphs - wrap remaining text blocks
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>(<h[123]>)/g, '$1');
  html = html.replace(/(<\/h[123]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul>)/g, '$1');
  html = html.replace(/(<\/ul>)<\/p>/g, '$1');
  html = html.replace(/<p>(<pre>)/g, '$1');
  html = html.replace(/(<\/pre>)<\/p>/g, '$1');
  html = html.replace(/<p>(<blockquote>)/g, '$1');
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1');
  html = html.replace(/<p>(<hr \/>)/g, '$1');
  html = html.replace(/(<hr \/>)<\/p>/g, '$1');

  // Line breaks within paragraphs
  html = html.replace(/\n/g, '<br />');

  return html;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Listen for external open-chatbot events (from HeroSection button, etc.)
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpenChat);
    return () => window.removeEventListener('open-chatbot', handleOpenChat);
  }, []);

  // Cleanup abort controller on unmount
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: content.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setErrorMsg('');

    // Only send last 6 messages to keep it fast
    const recentMessages = updatedMessages.slice(-6);

    // Retry logic: up to 2 attempts
    for (let attempt = 1; attempt <= 2; attempt++) {
      const controller = new AbortController();
      abortRef.current = controller;
      const timeoutId = setTimeout(() => controller.abort(), CHAT_TIMEOUT);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: recentMessages }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        const data = await response.json().catch(() => null);

        if (!response.ok || !data) {
          // If first attempt fails, try again; if second attempt, show error
          if (attempt === 1) continue;
          const serverError = data?.error || `Server error (${response.status})`;
          setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: `⚠️ ${serverError}`, isError: true },
          ]);
          setIsLoading(false);
          abortRef.current = null;
          return;
        }

        if (data.success && data.response) {
          setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: data.response },
          ]);
          setIsLoading(false);
          abortRef.current = null;
          return;
        } else {
          if (attempt === 1) continue;
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: data.error || 'I couldn\'t process that. Please try again.',
              isError: true,
            },
          ]);
          setIsLoading(false);
          abortRef.current = null;
          return;
        }
      } catch (err) {
        clearTimeout(timeoutId);

        if (attempt === 1) {
          // First attempt failed, retry after brief pause
          await new Promise((r) => setTimeout(r, 500));
          continue;
        }

        // Second attempt also failed — show error
        if (err instanceof DOMException && err.name === 'AbortError') {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: '⚠️ Response timed out. Please try again.',
              isError: true,
            },
          ]);
        } else {
          const errMsg = err instanceof Error ? err.message : 'Unknown error';
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: `⚠️ ${errMsg}`,
              isError: true,
            },
          ]);
        }
        setIsLoading(false);
        abortRef.current = null;
        return;
      }
    }

    // Should not reach here, but just in case
    setIsLoading(false);
    abortRef.current = null;
  }, [messages, isLoading]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      sendMessage(input);
    },
    [input, sendMessage]
  );

  const handleSuggestedPrompt = useCallback(
    (prompt: string) => {
      sendMessage(prompt);
    },
    [sendMessage]
  );

  const clearChat = useCallback(() => {
    setMessages([]);
    setErrorMsg('');
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (input.trim() && !isLoading) {
          sendMessage(input);
        }
      }
    },
    [input, isLoading, sendMessage]
  );

  return (
    <>
      {/* Floating AI Assistant Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full fire-gradient flex items-center justify-center shadow-lg shadow-red-500/20 cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open AI Assistant"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-Screen Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{
              background: `
                radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 60%),
                radial-gradient(ellipse 50% 30% at 80% 80%, rgba(6,182,212,0.03) 0%, transparent 50%),
                linear-gradient(180deg, #0d1117 0%, #0b1120 50%, #0d1117 100%)
              `,
            }}
          >
            {/* Chat Header */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex items-center justify-between px-3 sm:px-8 py-3 border-b border-white/5"
              style={{
                background: 'rgba(13, 17, 23, 0.9)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl fire-gradient flex items-center justify-center">
                  <Bot className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    FLAME-X AI
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-green-400 font-medium tracking-wider">
                      ONLINE
                    </span>
                    <span className="text-[10px] text-gray-600">•</span>
                    <span className="text-[10px] text-gray-500">English & বাংলা</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:999"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-500/20 text-red-400 text-[10px] font-semibold hover:bg-red-500/10 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  999
                </a>
                <a
                  href="tel:102"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500/20 text-orange-400 text-[10px] font-semibold hover:bg-orange-500/10 transition-colors"
                >
                  <Flame className="w-3 h-3" />
                  102
                </a>
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer"
                    aria-label="Clear chat"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-gray-500" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Close chat window"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </motion.div>

            {/* Messages Area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex-1 overflow-y-auto chat-scrollbar px-3 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-4 sm:py-6"
            >
              <div className="max-w-3xl mx-auto space-y-4">
                {/* Welcome message */}
                {messages.length === 0 && (
                  <div className="space-y-6">
                    <div className="text-center py-6">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="w-16 h-16 rounded-2xl fire-gradient flex items-center justify-center mx-auto mb-4"
                      >
                        <Sparkles className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.h4
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-xl font-bold text-white mb-2"
                      >
                        FLAME-X AI Assistant
                      </motion.h4>
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="text-gray-400 text-sm max-w-md mx-auto"
                      >
                        Ask about fire safety, emergency response, or rescue technology. Supports English and বাংলা.
                      </motion.p>
                    </div>

                    {/* Suggested Prompts */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="space-y-3"
                    >
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">
                        Try asking
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SUGGESTED_PROMPTS.map((prompt, i) => (
                          <motion.button
                            key={prompt.text}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                            onClick={() => handleSuggestedPrompt(prompt.text)}
                            className="text-left text-sm px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-500/20 transition-all text-gray-300 hover:text-white cursor-pointer flex items-center gap-3"
                          >
                            <span className="text-lg">{prompt.icon}</span>
                            {prompt.text}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Chat Messages */}
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-7 h-7 rounded-lg fire-gradient flex items-center justify-center flex-shrink-0 mt-1">
                        {message.isError ? (
                          <AlertCircle className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <Bot className="w-3.5 h-3.5 text-white" />
                        )}
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-red-500/80 to-orange-500/70 text-white rounded-br-lg'
                          : message.isError
                            ? 'bg-red-500/5 border border-red-500/15 text-red-300/90 rounded-bl-lg'
                            : 'bg-white/[0.03] border border-white/5 text-gray-200 rounded-bl-lg'
                      }`}
                    >
                      {message.role === 'assistant' ? (
                        <div
                          className="chat-markdown"
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
                        />
                      ) : (
                        message.content
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="w-7 h-7 rounded-lg fire-gradient flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 px-5 py-4 rounded-2xl rounded-bl-lg">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 rounded-full bg-orange-500/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 rounded-full bg-amber-500/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className="text-[10px] text-gray-600 ml-1">Thinking...</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </motion.div>

            {/* Suggested prompts inline */}
            {messages.length > 0 && messages.length <= 2 && !isLoading && (
              <div className="px-3 sm:px-8 md:px-12 lg:px-20 xl:px-32 pb-2">
                <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
                  {SUGGESTED_PROMPTS.slice(0, 2).map((prompt) => (
                    <button
                      key={prompt.text}
                      onClick={() => handleSuggestedPrompt(prompt.text)}
                      className="text-[11px] px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-500/20 transition-all text-gray-500 hover:text-white cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{prompt.icon}</span>
                      {prompt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="px-3 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-3"
              style={{
                background: 'rgba(13, 17, 23, 0.9)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(255,255,255,0.03)',
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto flex items-center gap-3"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about fire safety... (English বা বাংলা)"
                  disabled={isLoading}
                  className="flex-1 bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500/30 focus:ring-1 focus:ring-red-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-11 h-11 rounded-xl fire-gradient flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-500/15 transition-shadow cursor-pointer flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>
              <p className="max-w-3xl mx-auto text-[9px] text-gray-700 mt-1.5 text-center">
                FLAME-X AI • English & বাংলা • Emergencies: Call 999 or 102
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

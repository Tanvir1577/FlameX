---
Task ID: 7-a
Agent: Data Hub & Emergency Section Builder
Task: Build DataHubSection and EmergencySection components

Work Log:
- Created DataHubSection.tsx with section ID "data-hub"
- Built header "🌐 ডেডিকেটেড ওয়েবসাইট ও ডেটা হাব" with fire-text-gradient and glow-text, subtitle "Dedicated Website & Data Hub"
- Implemented 6 feature cards in responsive grid (1 col mobile, 2 col sm, 3 col lg):
  1. লাইভ ডেটা মনিটরিং / Live Data Monitoring - Activity icon - fire-red accent
  2. সেন্ট্রাল কন্ট্রোল প্যানেল / Central Control - Settings icon - fire-orange accent
  3. ডেটা লগিং / Data Logging - Database icon - fire-amber accent
  4. রিমোট অ্যাক্সেস / Remote Access - Globe icon - cyan-ai accent
  5. টিম কো-অর্ডিনেশন / Team Coordination - Users icon - fire-glow accent
  6. সতর্কতা ও রিপোর্ট / Alerts & Reports - FileText icon - fire-red accent
- Each card: glassmorphism background, fire-border, card-lift hover, lucide icon with accent color in circle
- Built Interactive Dashboard UI Simulation with glassmorphism container:
  - Top bar: "FLAME-X CONTROL CENTER" with MonitorDot icon, green blinking LIVE indicator with animate-ping, Wifi icon
  - Left panel: Simulated Tactical Map with grid lines, zone markers (ZONE-A green, ZONE-B orange, ZONE-C red), pulsing red robot position dot with radar rings, path trail SVG, map legend with color-coded markers, compass indicator
  - Right panel: Camera Feed simulation with Camera icon, REC indicator with animate-pulse, scanning line animation (cyan horizontal line moving vertically), crosshair with corner targeting brackets, LIVE FEED text, camera info overlay (CAM-01, IR:ON, ZOOM, FPS, STATUS), timestamp
  - Bottom: 3 metric cards:
    - Temperature: 45°C with Activity icon, fire-red accent, animated temperature bar (45% fill)
    - Battery: 78% with Battery icon, fire-amber accent, animated battery bar (78% fill)
    - Signal: STRONG with Signal icon, cyan-ai accent, signal strength bars
  - All panels in glassmorphism style with fire-red accents and dark backgrounds
- Added grid pattern overlay and radial gradient background effects
- Added section-divider at top
- Used framer-motion whileInView for scroll-triggered entrance animations with stagger

- Created EmergencySection.tsx with section ID "emergency"
- Built header "🚨 ইমারজেন্সি অ্যাসিস্ট্যান্স" with fire-text-gradient and glow-text, subtitle "Emergency Assistance"
- Implemented 3 emergency call buttons in responsive grid (1 col mobile, 3 col sm):
  - "CALL 999" Fire Service - Flame icon - fire-red accent, pulsing border glow, fire-red background glow
  - "CALL 199" Ambulance - Heart icon - fire-orange accent, orange border, orange background glow
  - "CALL 999" Police - Shield icon - cyan-ai accent, cyan border, cyan background glow
  - Each button: large, rounded-2xl, glassmorphism background, Phone icon, "TAP TO CALL" label, whileHover scale 1.03, whileTap scale 0.98, pulsing border animation (borderGlow keyframe), hover pulse effect (pulseFire keyframe)
- Built Fire Type Identification cards (4 in responsive grid):
  - Class A: Solid Materials (Wood, Paper, Cloth) - Flame icon - fire-red - use Water/Foam, don't use on electrical
  - Class B: Flammable Liquids (Oil, Gasoline, Paint) - Fuel icon - fire-orange - use Foam/CO₂/Dry Chemical, don't use water
  - Class C: Flammable Gases (Propane, Butane, Methane) - Cloud icon - fire-amber - use Dry Chemical/CO₂, shut off gas first
  - Electrical: Electrical Equipment (Wiring, Appliances) - Zap icon - cyan-ai - use CO₂/Dry Chemical, don't use water
  - Each card: glassmorphism, accent border, ShieldCheck icon for "use" instructions, AlertTriangle icon for "don't" warnings, card-lift hover
- Created Evacuation Steps timeline (8 steps):
  1. Stay calm, alert others
  2. Activate fire alarm
  3. Follow evacuation route
  4. Do NOT use elevators
  5. Cover nose with wet cloth
  6. Stay low — smoke rises
  7. Meet at assembly point
  8. Do NOT re-enter building
  - Timeline with vertical gradient line (fire-red → fire-orange → fire-amber)
  - Each step: numbered circle on timeline, glassmorphism card with fire-border, ChevronRight icon, group hover effects
  - Staggered entrance animations with increasing delay
- Built Quick Safety Guide card (glassmorphism):
  - ShieldCheck icon header with fire-red accent
  - 5 numbered tips with hover slide effect (whileHover x: 4)
  - Warning note at bottom with AlertTriangle icon and fire-amber text
- Layout: evacuation steps (3-col) and safety guide (2-col) side-by-side on lg, stacked on mobile
- Added section-divider at top
- All interactive elements with framer-motion hover effects

- page.tsx already updated by previous agent with DataHubSection and EmergencySection imports and render order
- Lint passes cleanly, dev server compiles successfully

Stage Summary:
- DataHubSection.tsx created at /home/z/my-project/src/components/flame-x/DataHubSection.tsx
- EmergencySection.tsx created at /home/z/my-project/src/components/flame-x/EmergencySection.tsx
- Key features: 6 data hub feature cards, interactive dashboard UI simulation with tactical map (grid lines, zone markers, robot position with radar rings), camera feed simulation (scanning line, crosshair, LIVE FEED overlay), 3 metric cards (Temperature/Battery/Signal); 3 emergency call buttons with pulsing animations, 4 fire type identification cards with use/don't-do instructions, 8-step evacuation timeline with gradient line, safety guide card with 5 tips and warning note
- CSS animations used: borderGlow, pulseFire, animate-ping, animate-pulse, glowText
- All components use existing utility classes (glassmorphism, fire-border, card-lift, fire-text-gradient, section-divider)
- Lint passes, dev server compiles successfully

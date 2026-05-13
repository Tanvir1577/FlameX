'use client'

import { motion } from 'framer-motion'
import { Phone, Flame, Fuel, Cloud, Zap, ShieldCheck, AlertTriangle, ChevronRight, Siren, ListChecks } from 'lucide-react'

const emergencyButtons = [
  {
    label: 'CALL 999',
    sublabel: 'Emergency',
    icon: Siren,
    accentColor: '#ff4422',
    accentBg: 'bg-fire-red/10',
    borderColor: 'border-fire-red',
    bgGlow: 'rgba(255,68,34,0.15)',
  },
  {
    label: 'CALL 102',
    sublabel: 'Fire Service',
    icon: Flame,
    accentColor: '#ff8800',
    accentBg: 'bg-fire-orange/10',
    borderColor: 'border-fire-orange',
    bgGlow: 'rgba(255,136,0,0.15)',
  },
]

const fireTypeCards = [
  {
    classLabel: 'Class A',
    title: 'Solid Materials',
    examples: 'Wood, Paper, Cloth',
    useWhat: 'Water, Foam Extinguisher',
    dontDo: 'Do NOT use on electrical fires',
    icon: Flame,
    accent: 'text-fire-red',
    accentBg: 'bg-fire-red/10',
    borderColor: 'border-fire-red/30',
    dotColor: 'bg-fire-red',
  },
  {
    classLabel: 'Class B',
    title: 'Flammable Liquids',
    examples: 'Oil, Gasoline, Paint',
    useWhat: 'Foam, CO₂, Dry Chemical',
    dontDo: 'Do NOT use water directly',
    icon: Fuel,
    accent: 'text-fire-orange',
    accentBg: 'bg-fire-orange/10',
    borderColor: 'border-fire-orange/30',
    dotColor: 'bg-fire-orange',
  },
  {
    classLabel: 'Class C',
    title: 'Flammable Gases',
    examples: 'Propane, Butane, Methane',
    useWhat: 'Dry Chemical, CO₂',
    dontDo: 'Do NOT use water — shut off gas supply first',
    icon: Cloud,
    accent: 'text-fire-amber',
    accentBg: 'bg-fire-amber/10',
    borderColor: 'border-fire-amber/30',
    dotColor: 'bg-fire-amber',
  },
  {
    classLabel: 'Electrical',
    title: 'Electrical Equipment',
    examples: 'Wiring, Appliances',
    useWhat: 'CO₂, Dry Chemical Extinguisher',
    dontDo: 'Do NOT use water — risk of electrocution',
    icon: Zap,
    accent: 'text-cyan-ai',
    accentBg: 'bg-cyan-ai/10',
    borderColor: 'border-cyan-ai/30',
    dotColor: 'bg-cyan-ai',
  },
]

const evacuationSteps = [
  { step: 1, text: 'Stay calm, alert others' },
  { step: 2, text: 'Activate fire alarm' },
  { step: 3, text: 'Follow evacuation route' },
  { step: 4, text: 'Do NOT use elevators' },
  { step: 5, text: 'Cover nose with wet cloth' },
  { step: 6, text: 'Stay low — smoke rises' },
  { step: 7, text: 'Meet at assembly point' },
  { step: 8, text: 'Do NOT re-enter building' },
]

const safetyTips = [
  'Keep fire extinguisher accessible',
  'Know your evacuation route',
  'Test smoke alarms monthly',
  'Never leave cooking unattended',
  'Keep emergency numbers saved',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
} as const

export default function EmergencySection() {
  return (
    <section id="emergency" className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 50% 30% at 80% 60%, rgba(6,182,212,0.03) 0%, transparent 50%),
          linear-gradient(180deg, #0d1117 0%, #0f1520 50%, #0d1117 100%)
        `,
      }}
    >
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 30% at 50% 20%, rgba(255,68,34,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-fire-red/10 text-fire-red border border-fire-red/20 mb-6 animate-pulse-glow"
          >
            Emergency
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 fire-text-gradient">
            ইমারজেন্সি অ্যাসিস্ট্যান্স
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light tracking-wide">
            Emergency Assistance
          </p>
        </motion.div>

        {/* Emergency Call Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-4 md:gap-6 mb-16"
        >
          {emergencyButtons.map((btn) => (
            <motion.div
              key={btn.sublabel}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: `0 0 40px ${btn.bgGlow}` }}
              whileTap={{ scale: 0.97 }}
              className={`relative glassmorphism rounded-2xl p-4 sm:p-6 border-2 ${btn.borderColor} cursor-pointer overflow-hidden group`}
              style={{ boxShadow: `0 0 30px ${btn.bgGlow}` }}
            >
              {/* Pulse ring animation */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  animation: 'pulseFire 2s ease-in-out infinite',
                  boxShadow: `0 0 40px ${btn.bgGlow}, inset 0 0 40px ${btn.bgGlow}`,
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className={`w-14 h-14 rounded-full ${btn.accentBg} border ${btn.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <btn.icon className="w-7 h-7" style={{ color: btn.accentColor }} />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black mb-1" style={{ color: btn.accentColor }}>
                    {btn.label}
                  </p>
                  <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">
                    {btn.sublabel}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="w-4 h-4" style={{ color: btn.accentColor }} />
                  <span className="text-xs font-mono tracking-wider" style={{ color: btn.accentColor }}>
                    TAP TO CALL
                  </span>
                </div>
              </div>

              {/* Pulsing border effect */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  animation: 'borderGlow 2s ease-in-out infinite',
                  border: `2px solid rgba(255,68,34,0.3)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Fire Type Identification Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-fire-orange" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Fire Type Identification
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {fireTypeCards.map((card, i) => (
              <motion.div
                key={card.classLabel}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(255,68,34,0.15)' }}
                className={`glassmorphism ${card.borderColor} card-lift rounded-xl p-5 border`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${card.accentBg} border ${card.borderColor} flex items-center justify-center`}>
                    <card.icon className={`w-5 h-5 ${card.accent}`} />
                  </div>
                  <div>
                    <p className={`text-xs font-mono tracking-wider ${card.accent}`}>{card.classLabel}</p>
                    <p className="text-white font-bold text-sm">{card.title}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-xs mb-3">
                  <span className="text-gray-500">Examples: </span>{card.examples}
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-green-400/80 text-xs">{card.useWhat}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-fire-red mt-0.5 flex-shrink-0" />
                    <p className="text-fire-red/80 text-xs">{card.dontDo}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Evacuation Steps & Safety Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {/* Evacuation Steps Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-8">
              <Siren className="w-6 h-6 text-fire-red" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Evacuation Steps
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-fire-red via-fire-orange to-fire-amber" />

              <div className="space-y-4">
                {evacuationSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-10 h-10 rounded-full bg-dark-bg border-2 border-fire-red/50 flex items-center justify-center group-hover:border-fire-red group-hover:bg-fire-red/10 transition-all duration-300">
                        <span className="text-fire-red font-black text-sm group-hover:text-fire-red transition-colors">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    <div className="glassmorphism fire-border card-lift rounded-lg px-4 py-3 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-sm font-medium">{step.text}</p>
                        <ChevronRight className="w-4 h-4 text-fire-red/50 group-hover:text-fire-red transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Safety Guide */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <ListChecks className="w-6 h-6 text-cyan-ai" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Quick Safety Guide
              </h3>
            </div>

            <div className="glassmorphism fire-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-border">
                <div className="w-12 h-12 rounded-xl bg-fire-red/10 border border-fire-red/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-fire-red" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Safety Tips</p>
                  <p className="text-gray-500 text-xs">Essential fire safety guidelines</p>
                </div>
              </div>

              <div className="space-y-3">
                {safetyTips.map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div className="w-6 h-6 rounded-full bg-fire-red/10 border border-fire-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-fire-red/20 transition-colors">
                      <span className="text-fire-red text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      {tip}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-dark-border">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-fire-amber mt-0.5 flex-shrink-0" />
                  <p className="text-fire-amber/80 text-xs leading-relaxed">
                    Always prioritize your safety. If trapped, signal for help from a window and stay near the floor.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

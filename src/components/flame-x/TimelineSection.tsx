'use client'

import { motion } from 'framer-motion'

const timelineSteps = [
  {
    number: 1,
    emoji: '🔥',
    title: 'Fire Detected',
    description: 'Sensors detect fire and alert system',
    colorHex: '#ff4422',
  },
  {
    number: 2,
    emoji: '🧠',
    title: 'AI Analysis',
    description: 'AI analyzes fire type, intensity, and risk level',
    colorHex: '#00e5ff',
  },
  {
    number: 3,
    emoji: '🗺',
    title: 'Route Optimization',
    description: 'Optimal path calculated avoiding obstacles',
    colorHex: '#ff8800',
  },
  {
    number: 4,
    emoji: '👤',
    title: 'Victim Detection',
    description: 'AI camera identifies and locates victims',
    colorHex: '#ffaa00',
  },
  {
    number: 5,
    emoji: '💨',
    title: 'Fire Suppression',
    description: 'CO₂ and chemical agents deployed strategically',
    colorHex: '#ff4422',
  },
  {
    number: 6,
    emoji: '🤝',
    title: 'Rescue Assistance',
    description: 'Voice communication and guidance provided',
    colorHex: '#00e5ff',
  },
  {
    number: 7,
    emoji: '📡',
    title: 'Situation Monitoring',
    description: 'Continuous monitoring of environment and victims',
    colorHex: '#ff8800',
  },
  {
    number: 8,
    emoji: '✅',
    title: 'Mission Complete',
    description: 'All clear given, data logged for analysis',
    colorHex: '#22c55e',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
} as const

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 30% 40%, rgba(249,115,22,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 50% 30% at 70% 70%, rgba(239,68,68,0.03) 0%, transparent 50%),
          linear-gradient(180deg, #0d1117 0%, #101828 50%, #0d1117 100%)
        `,
      }}
    >
      {/* Section Divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,68,34,0.05)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-fire-orange/10 text-fire-orange border border-fire-orange/20 mb-6"
          >
            Timeline
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 fire-text-gradient">
            রেসকিউ টাইমলাইন
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">Rescue Operation Timeline</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fire-red/60 via-fire-orange/40 to-green/60 sm:-translate-x-px" />

          {timelineSteps.map((step, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-row`}
              >
                {/* Content card */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    isLeft ? 'sm:pr-4 md:pr-8 sm:text-right' : 'sm:pl-4 md:pl-8 sm:text-left'
                  }`}
                >
                  <div
                    className="glassmorphism rounded-xl p-4 sm:p-5 md:p-6 card-lift"
                    style={{
                      borderColor: `${step.colorHex}20`,
                      boxShadow: `0 0 20px ${step.colorHex}08`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{step.emoji}</span>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: step.colorHex }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center circle */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2 bg-dark-bg ${
                      step.number === 1 ? 'pulse-timeline' : ''
                    }`}
                    style={{
                      borderColor: step.colorHex,
                      color: step.colorHex,
                      boxShadow: step.number === 1
                        ? `0 0 20px ${step.colorHex}50, 0 0 40px ${step.colorHex}25`
                        : `0 0 10px ${step.colorHex}20`,
                    }}
                  >
                    {step.number}
                  </div>
                  {step.number === 1 && (
                    <div
                      className="absolute inset-0 w-10 h-10 rounded-full animate-ping"
                      style={{
                        border: `2px solid ${step.colorHex}`,
                        opacity: 0.4,
                      }}
                    />
                  )}
                </div>

                {/* Spacer */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulseTimeline {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 68, 34, 0.5), 0 0 40px rgba(255, 68, 34, 0.25);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 68, 34, 0.7), 0 0 60px rgba(255, 68, 34, 0.35);
          }
        }
        .pulse-timeline {
          animation: pulseTimeline 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

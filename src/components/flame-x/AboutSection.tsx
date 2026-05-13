'use client'

import { motion } from 'framer-motion'
import { Brain, Shield, Activity, Navigation, Users, Cpu } from 'lucide-react'

const aboutCards = [
  {
    icon: Brain,
    title: 'AI Intelligence',
    titleBn: 'কৃত্রিম বুদ্ধিমত্তা',
    description:
      'Advanced artificial intelligence for real-time decision making and autonomous rescue operations',
  },
  {
    icon: Shield,
    title: 'Smart Fire Suppression',
    titleBn: 'স্মার্ট ফায়ার সাপ্রেশন',
    description:
      'CO₂ and dry chemical-based fire suppression with intelligent targeting',
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    titleBn: 'রিয়েল-টাইম মনিটরিং',
    description:
      'Continuous environmental monitoring with live temperature and hazard detection',
  },
  {
    icon: Navigation,
    title: 'Autonomous Navigation',
    titleBn: 'স্বয়ংক্রিয় নেভিগেশন',
    description:
      'Multi-terrain navigation across air, land, and water environments',
  },
  {
    icon: Users,
    title: 'Human Rescue Assistance',
    titleBn: 'মানব উদ্ধার সহায়তা',
    description:
      'Direct voice communication and guidance for victim rescue',
  },
  {
    icon: Cpu,
    title: 'Sensor-Based Analysis',
    titleBn: 'সেন্সর-ভিত্তিক বিশ্লেষণ',
    description:
      'Ultrasonic, thermal, and visual sensor fusion for complete situational awareness',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
} as const

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
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

      {/* Background fire-red radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,68,34,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-fire-red/10 text-fire-red border border-fire-red/20 mb-6"
          >
            About The System
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="fire-text-gradient">About Flame-X</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide">
            Advanced AI Fire Rescue Intelligence
          </p>
        </motion.div>

        {/* Main description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed"
        >
          Flame-X is an advanced AI-based smart fire rescue and emergency
          response system designed to operate across land, water, and air
          environments. It combines cutting-edge AI, smart sensors, and autonomous
          navigation to deliver life-saving assistance where humans cannot reach.
        </motion.p>

        {/* Info cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {aboutCards.map(({ icon: Icon, title, titleBn, description }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="glassmorphism fire-border card-shimmer rounded-xl p-6 relative group"
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(239,68,68,0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Card number */}
              <span className="absolute top-4 right-4 text-4xl font-black text-fire-red/[0.06] select-none leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon with background circle */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-fire-red/10 flex items-center justify-center border border-fire-red/20 group-hover:bg-fire-red/20 group-hover:border-fire-red/40 transition-all duration-300">
                  <Icon className="w-5 h-5 text-fire-red group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium tracking-wide">{titleBn}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-16 md:mt-20"
        >
          <div className="glassmorphism fire-border rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-400 italic leading-relaxed">
              &ldquo;Flame-X is designed to reduce response time, improve rescue accuracy,
              and minimize human firefighter risk — making every second count when lives are on the line.&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-fire-red/30" />
              <span className="text-xs text-fire-red/60 font-semibold tracking-wider uppercase">Our Purpose</span>
              <div className="w-8 h-px bg-fire-red/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

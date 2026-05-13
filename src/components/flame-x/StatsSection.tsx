'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Target, Compass, Activity, ShieldCheck } from 'lucide-react'

interface StatItem {
  label: string
  value: string
  numericValue: number
  suffix: string
  description: string
  icon: React.ElementType
  color: string
  colorClass: string
  bgColorClass: string
  borderColorClass: string
  glowClass: string
  isSpecial?: boolean
  decimal?: boolean
}

const stats: StatItem[] = [
  {
    label: 'Faster Response Time',
    value: '3x',
    numericValue: 3,
    suffix: 'x',
    description: 'Average response improvement',
    icon: Zap,
    color: '#ff4422',
    colorClass: 'text-fire-red',
    bgColorClass: 'bg-fire-red/10',
    borderColorClass: 'border-fire-red/30',
    glowClass: 'rgba(255,68,34,0.2)',
  },
  {
    label: 'AI Detection Accuracy',
    value: '98.7%',
    numericValue: 98.7,
    suffix: '%',
    description: 'Object & face recognition',
    icon: Target,
    color: '#00e5ff',
    colorClass: 'text-cyan-ai',
    bgColorClass: 'bg-cyan-ai/10',
    borderColorClass: 'border-cyan-ai/30',
    glowClass: 'rgba(0,229,255,0.2)',
    decimal: true,
  },
  {
    label: 'Multi-Terrain Capability',
    value: '3',
    numericValue: 3,
    suffix: '',
    description: 'Air, Land & Water',
    icon: Compass,
    color: '#ff8800',
    colorClass: 'text-fire-orange',
    bgColorClass: 'bg-fire-orange/10',
    borderColorClass: 'border-fire-orange/30',
    glowClass: 'rgba(255,136,0,0.2)',
  },
  {
    label: 'Real-Time Monitoring',
    value: '24/7',
    numericValue: 0,
    suffix: '',
    description: 'Continuous surveillance',
    icon: Activity,
    color: '#ffaa00',
    colorClass: 'text-fire-amber',
    bgColorClass: 'bg-fire-amber/10',
    borderColorClass: 'border-fire-amber/30',
    glowClass: 'rgba(255,170,0,0.2)',
    isSpecial: true,
  },
  {
    label: 'Rescue Efficiency',
    value: '85%',
    numericValue: 85,
    suffix: '%',
    description: 'Mission success rate',
    icon: ShieldCheck,
    color: '#22c55e',
    colorClass: 'text-green-500',
    bgColorClass: 'bg-green-500/10',
    borderColorClass: 'border-green-500/30',
    glowClass: 'rgba(34,197,94,0.2)',
  },
]

function AnimatedCounter({
  stat,
  isInView,
}: {
  stat: StatItem
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || stat.isSpecial) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = stat.numericValue / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment
      if (step >= steps) {
        setCount(stat.numericValue)
        clearInterval(timer)
      } else {
        setCount(
          stat.decimal ? parseFloat(current.toFixed(1)) : Math.floor(current)
        )
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, stat.numericValue, stat.isSpecial, stat.decimal])

  const displayValue = stat.isSpecial
    ? stat.value
    : stat.decimal
      ? `${count.toFixed(1)}${stat.suffix}`
      : `${Math.floor(count)}${stat.suffix}`

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
      {displayValue}
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
} as const

export default function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="stats"
      ref={sectionRef}
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

      {/* Background fire-red radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(255,68,34,0.08) 0%, transparent 70%)',
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-fire-amber/10 text-fire-amber border border-fire-amber/20 mb-6"
          >
            Statistics
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="fire-text-gradient">
              {'প্রভাব ও পরিসংখ্যান'}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide">
            Impact &amp; Statistics
          </p>
        </motion.div>

        {/* Stats cards row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 md:gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className="glassmorphism fire-border card-lift card-shimmer rounded-xl p-4 sm:p-6 text-center relative group"
                style={{
                  borderLeft: `3px solid ${stat.color}`,
                }}
                whileHover={{ scale: 1.04, y: -6, boxShadow: `0 12px 40px ${stat.glowClass}` }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.bgColorClass} border ${stat.borderColorClass} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.colorClass}`} />
                </div>

                {/* Animated number */}
                <div
                  className={`${stat.colorClass} mb-2`}
                  style={{ textShadow: `0 0 20px ${stat.glowClass}` }}
                >
                  <AnimatedCounter stat={stat} isInView={isInView} />
                </div>

                {/* Label */}
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

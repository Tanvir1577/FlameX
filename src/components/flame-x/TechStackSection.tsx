'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  CircuitBoard,
  Wifi,
  Thermometer,
  Radio,
  Navigation,
  Cloud,
  Video,
} from 'lucide-react'

interface TechItem {
  title: string
  icon: React.ElementType
  color: string
  colorClass: string
  bgColorClass: string
  description: string
}

const techItems: TechItem[] = [
  {
    title: 'AI Systems',
    icon: Brain,
    color: '#ff4422',
    colorClass: 'text-fire-red',
    bgColorClass: 'bg-fire-red/10',
    description: 'Advanced neural networks for autonomous decision-making',
  },
  {
    title: 'ESP32-CAM',
    icon: CircuitBoard,
    color: '#00e5ff',
    colorClass: 'text-cyan-ai',
    bgColorClass: 'bg-cyan-ai/10',
    description: 'Integrated camera module for real-time visual processing',
  },
  {
    title: 'IoT Sensors',
    icon: Wifi,
    color: '#ff8800',
    colorClass: 'text-fire-orange',
    bgColorClass: 'bg-fire-orange/10',
    description: 'Internet of Things sensor network for data collection',
  },
  {
    title: 'Thermal Sensors',
    icon: Thermometer,
    color: '#ffaa00',
    colorClass: 'text-fire-amber',
    bgColorClass: 'bg-fire-amber/10',
    description: 'Precision temperature sensing and hotspot detection',
  },
  {
    title: 'Ultrasonic Sensors',
    icon: Radio,
    color: '#00e5ff',
    colorClass: 'text-cyan-ai',
    bgColorClass: 'bg-cyan-ai/10',
    description: 'Sound wave-based obstacle detection and navigation',
  },
  {
    title: 'Autonomous Navigation',
    icon: Navigation,
    color: '#ff4422',
    colorClass: 'text-fire-red',
    bgColorClass: 'bg-fire-red/10',
    description: 'Self-driving path planning and obstacle avoidance',
  },
  {
    title: 'Cloud Monitoring',
    icon: Cloud,
    color: '#ff8800',
    colorClass: 'text-fire-orange',
    bgColorClass: 'bg-fire-orange/10',
    description: 'Remote data access and real-time monitoring dashboard',
  },
  {
    title: 'Live Streaming',
    icon: Video,
    color: '#ffaa00',
    colorClass: 'text-fire-amber',
    bgColorClass: 'bg-fire-amber/10',
    description: 'HD video streaming for real-time situational awareness',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function TechStackSection() {
  return (
    <section
      id="technology"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 30% 40%, rgba(249,115,22,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 50% 30% at 70% 70%, rgba(239,68,68,0.03) 0%, transparent 50%),
          linear-gradient(180deg, #0d1117 0%, #101828 50%, #0d1117 100%)
        `,
      }}
    >
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)',
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-cyan-ai/10 text-cyan-ai border border-cyan-ai/20 mb-6"
          >
            Tech Stack
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="fire-text-gradient">
              {'প্রযুক্তি স্ট্যাক'}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide">
            Technology Stack
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {techItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="glassmorphism fire-border card-lift card-shimmer rounded-xl p-4 sm:p-6 relative group"
                style={{
                  borderLeft: `3px solid ${item.color}`,
                }}
                whileHover={{ y: -6, boxShadow: `0 12px 40px ${item.color}15` }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Card number */}
                <span className="absolute top-4 right-4 text-2xl sm:text-3xl font-black select-none leading-none" style={{ color: `${item.color}10` }}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon with accent bg circle */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.bgColorClass} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                  style={{ border: `1px solid ${item.color}33` }}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.colorClass}`} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-fire-glow transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

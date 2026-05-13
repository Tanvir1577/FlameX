'use client'

import { motion } from 'framer-motion'
import {
  Mountain,
  Eye,
  Radar,
  Thermometer,
  Flame,
  Mic,
  MessageCircle,
  Zap,
  Monitor,
  Gamepad2,
  Database,
  Video,
} from 'lucide-react'

const features = [
  {
    icon: Mountain,
    title: 'Multi-Terrain Mobility',
    description: 'জল, স্থল ও আকাশপথে চলাচলে সক্ষম মাল্টি-টেরেন সিস্টেম',
    accent: 'text-fire-red',
    bgAccent: 'bg-fire-red/10',
    borderAccent: 'border-fire-red/20',
  },
  {
    icon: Eye,
    title: 'AI Camera Detection',
    description: 'এআই ক্যামেরা ভিত্তিক ফেস ও অবজেক্ট ডিটেকশন প্রযুক্তি',
    accent: 'text-cyan-ai',
    bgAccent: 'bg-cyan-ai/10',
    borderAccent: 'border-cyan-ai/20',
  },
  {
    icon: Radar,
    title: 'Ultrasonic Navigation',
    description: 'অন্ধকার বা অস্পষ্টতায় নেভিগেশনের জন্য আল্ট্রাসনিক সেন্সর',
    accent: 'text-fire-orange',
    bgAccent: 'bg-fire-orange/10',
    borderAccent: 'border-fire-orange/20',
  },
  {
    icon: Thermometer,
    title: 'Temperature Monitoring',
    description: 'রিয়েল-টাইম পরিবেশের তাপমাত্রা পরিমাপক সেন্সর',
    accent: 'text-fire-amber',
    bgAccent: 'bg-fire-amber/10',
    borderAccent: 'border-fire-amber/20',
  },
  {
    icon: Flame,
    title: 'Smart Fire Suppression',
    description: 'স্মার্ট ফায়ার সাপ্রেশন সিস্টেম',
    accent: 'text-fire-red',
    bgAccent: 'bg-fire-red/10',
    borderAccent: 'border-fire-red/20',
  },
  {
    icon: Mic,
    title: 'AI Voice Communication',
    description: 'ভিক্টিম ও রেসকিউয়ারের মধ্যে সরাসরি ভয়েস কমিউনিকেশন',
    accent: 'text-cyan-ai',
    bgAccent: 'bg-cyan-ai/10',
    borderAccent: 'border-cyan-ai/20',
  },
  {
    icon: MessageCircle,
    title: 'Rescue Chatbot',
    description: 'তাৎক্ষণিক সহায়তার জন্য ইন্টিগ্রেটেড পার্সোনাল চ্যাটবট',
    accent: 'text-fire-orange',
    bgAccent: 'bg-fire-orange/10',
    borderAccent: 'border-fire-orange/20',
  },
  {
    icon: Zap,
    title: 'Self-Powered Energy',
    description: 'স্বয়ংক্রিয় পদ্ধতিতে নিজস্ব বিদ্যুৎ উৎপাদন ব্যবস্থা',
    accent: 'text-fire-amber',
    bgAccent: 'bg-fire-amber/10',
    borderAccent: 'border-fire-amber/20',
  },
  {
    icon: Monitor,
    title: 'Live Dashboard',
    description: 'লাইভ মনিটরিং ড্যাশবোর্ড ও রিয়েল-টাইম ডেটা',
    accent: 'text-fire-red',
    bgAccent: 'bg-fire-red/10',
    borderAccent: 'border-fire-red/20',
  },
  {
    icon: Gamepad2,
    title: 'Remote Control',
    description: 'রিমোট কন্ট্রোল সিস্টেম',
    accent: 'text-cyan-ai',
    bgAccent: 'bg-cyan-ai/10',
    borderAccent: 'border-cyan-ai/20',
  },
  {
    icon: Database,
    title: 'Data Logging',
    description: 'সম্পূর্ণ ডেটা লগিং ও রিপোর্ট জেনারেশন',
    accent: 'text-fire-orange',
    bgAccent: 'bg-fire-orange/10',
    borderAccent: 'border-fire-orange/20',
  },
  {
    icon: Video,
    title: 'HD Streaming',
    description: 'HD ভিডিও স্ট্রিমিং ও লাইভ ফিড',
    accent: 'text-fire-amber',
    bgAccent: 'bg-fire-amber/10',
    borderAccent: 'border-fire-amber/20',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
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

export default function FeaturesSection() {
  return (
    <section
      id="features"
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

      {/* Background subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,68,34,0.04) 0%, transparent 70%)',
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-fire-orange/10 text-fire-orange border border-fire-orange/20 mb-6"
          >
            Core Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="fire-text-gradient">ফিচার সমূহ</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide">
            Comprehensive AI-Powered Rescue Technology
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {features.map(({ icon: Icon, title, description, accent, bgAccent, borderAccent }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(239,68,68,0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glassmorphism fire-border card-shimmer rounded-xl p-4 sm:p-5 relative group cursor-default"
            >
              {/* Card number in top-right */}
              <span className="absolute top-3 right-4 text-2xl sm:text-3xl font-black text-fire-red/[0.06] select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon with background */}
              <div className="mb-4">
                <div className={`w-11 h-11 rounded-xl ${bgAccent} flex items-center justify-center border ${borderAccent} group-hover:scale-110 transition-all duration-300`}>
                  <Icon className={`w-5 h-5 ${accent}`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-fire-glow transition-colors">
                {title}
              </h3>

              {/* Description (Bangla) */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

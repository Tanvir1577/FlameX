'use client'

import { motion } from 'framer-motion'
import { Activity, Settings, Database, Globe, Users, FileText, Wifi, Battery, Signal, MonitorDot, Camera, Radio } from 'lucide-react'

const featureCards = [
  {
    icon: Activity,
    titleBn: 'লাইভ ডেটা মনিটরিং',
    titleEn: 'Live Data Monitoring',
    description: 'সেন্সর থেকে আসা তাপমাত্রা এবং রোবটটির বর্তমান অবস্থান মানচিত্রের মাধ্যমে দেখা যায়।',
    accent: 'text-fire-red',
    borderColor: 'border-fire-red/20',
  },
  {
    icon: Settings,
    titleBn: 'সেন্ট্রাল কন্ট্রোল প্যানেল',
    titleEn: 'Central Control',
    description: 'ওয়েবসাইট থেকেই রোবটের মুভমেন্ট এবং ক্যামেরা নিয়ন্ত্রণ করার ইন্টারফেস।',
    accent: 'text-fire-orange',
    borderColor: 'border-fire-orange/20',
  },
  {
    icon: Database,
    titleBn: 'ডেটা লগিং',
    titleEn: 'Data Logging',
    description: 'অতীতের সকল উদ্ধার অভিযানের তথ্য এবং ভিডিও রেকর্ড সংরক্ষণ করা হয়।',
    accent: 'text-fire-amber',
    borderColor: 'border-fire-amber/20',
  },
  {
    icon: Globe,
    titleBn: 'রিমোট অ্যাক্সেস',
    titleEn: 'Remote Access',
    description: 'ইন্টারনেটের মাধ্যমে বিশ্বের যেকোনো প্রান্ত থেকে রোবটটিকে পর্যবেক্ষণ ও পরিচালনা করা সম্ভব।',
    accent: 'text-cyan-ai',
    borderColor: 'border-cyan-ai/20',
  },
  {
    icon: Users,
    titleBn: 'টিম কো-অর্ডিনেশন',
    titleEn: 'Team Coordination',
    description: 'একাধিক উদ্ধারকারী বা বিশেষজ্ঞ একই সময়ে তথ্য বিশ্লেষণ করতে পারেন।',
    accent: 'text-fire-glow',
    borderColor: 'border-fire-glow/20',
  },
  {
    icon: FileText,
    titleBn: 'সতর্কতা ও রিপোর্ট',
    titleEn: 'Alerts & Reports',
    description: 'বিপদের তথ্য ও পরিসংখ্যান ভবিষ্যতের গবেষণার জন্য সংরক্ষণ করা হয়।',
    accent: 'text-fire-red',
    borderColor: 'border-fire-red/20',
  },
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

export default function DataHubSection() {
  return (
    <section id="data-hub" className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 50% 40% at 60% 30%, rgba(6,182,212,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 60% 30% at 20% 80%, rgba(239,68,68,0.04) 0%, transparent 50%),
          linear-gradient(180deg, #0d1117 0%, #0b1120 50%, #0d1117 100%)
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
            'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(255,68,34,0.04) 0%, transparent 70%)',
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-cyan-ai/10 text-cyan-ai border border-cyan-ai/20 mb-6"
          >
            Data Hub
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 fire-text-gradient">
            ডেডিকেটেড ওয়েবসাইট ও ডেটা হাব
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light tracking-wide">
            Dedicated Website & Data Hub
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 sm:mb-16"
        >
          {featureCards.map((card) => (
            <motion.div
              key={card.titleEn}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(255,68,34,0.12)' }}
              className={`glassmorphism fire-border card-lift rounded-xl p-5 md:p-6 ${card.borderColor}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-lg bg-dark-bg border ${card.borderColor} flex items-center justify-center`}
                >
                  <card.icon className={`w-5 h-5 ${card.accent}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-base mb-0.5 ${card.accent}`}>
                    {card.titleBn}
                  </h3>
                  <p className="text-gray-500 text-xs font-medium mb-2 tracking-wide uppercase">
                    {card.titleEn}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Dashboard UI Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glassmorphism fire-border rounded-2xl overflow-hidden"
        >
          {/* Top Bar */}
          <div className="bg-dark-bg/80 border-b border-fire-red/20 px-3 sm:px-4 md:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <MonitorDot className="w-4 h-4 sm:w-5 sm:h-5 text-fire-red flex-shrink-0" />
              <span className="text-white font-black text-xs sm:text-sm md:text-base tracking-[0.1em] sm:tracking-[0.15em]">
                FLAME-X CONTROL CENTER
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-50" />
              </div>
              <span className="text-green-400 text-xs font-mono tracking-wider">LIVE</span>
              <Wifi className="w-4 h-4 text-green-400 ml-2" />
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="p-3 sm:p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 md:mb-6">
              {/* Left Panel - Simulated Mini Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative bg-dark-bg rounded-xl border border-dark-border overflow-hidden"
                style={{ minHeight: '280px' }}
              >
                <div className="absolute top-0 left-0 right-0 bg-dark-bg/80 border-b border-dark-border px-3 py-2 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-cyan-ai" />
                    <span className="text-gray-400 text-[10px] font-mono tracking-wider uppercase">Tactical Map</span>
                  </div>
                  <span className="text-fire-red text-[10px] font-mono tracking-wider">GRID: 7x9</span>
                </div>

                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,68,34,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,68,34,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '32px 32px',
                    top: '36px',
                  }}
                />

                <div className="absolute inset-0 pt-9 flex items-center justify-center">
                  <div className="absolute top-12 left-4 w-16 h-12 border border-dashed border-green-500/30 rounded-sm flex items-center justify-center">
                    <span className="text-[8px] text-green-500/60 font-mono">ZONE-A</span>
                  </div>
                  <div className="absolute top-8 right-8 w-20 h-16 border border-dashed border-fire-orange/30 rounded-sm flex items-center justify-center">
                    <span className="text-[8px] text-fire-orange/60 font-mono">ZONE-B</span>
                  </div>
                  <div className="absolute bottom-10 left-12 w-16 h-14 border border-dashed border-fire-red/30 rounded-sm flex items-center justify-center">
                    <span className="text-[8px] text-fire-red/60 font-mono">ZONE-C</span>
                  </div>

                  <div className="relative">
                    <div className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fire-red/20" />
                    <div className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fire-red/10" />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-4 h-4 rounded-full bg-fire-red shadow-[0_0_15px_rgba(255,68,34,0.8)]"
                    />
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-[9px] text-fire-red font-mono bg-dark-bg/80 px-1.5 py-0.5 rounded border border-fire-red/30">
                        FLAME-X
                      </span>
                    </div>
                  </div>

                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '36px' }}>
                    <path
                      d="M 80 180 Q 120 140 180 150 T 280 120"
                      stroke="rgba(255,68,34,0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-fire-red" />
                      <span className="text-[8px] text-gray-500 font-mono">Robot</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[8px] text-gray-500 font-mono">Safe</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-fire-orange" />
                      <span className="text-[8px] text-gray-500 font-mono">Warning</span>
                    </div>
                  </div>
                  <span className="text-[8px] text-gray-600 font-mono">N ↑</span>
                </div>
              </motion.div>

              {/* Right Panel - Camera Feed Simulation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative bg-dark-bg rounded-xl border border-dark-border overflow-hidden"
                style={{ minHeight: '280px' }}
              >
                <div className="absolute top-0 left-0 right-0 bg-dark-bg/80 border-b border-dark-border px-3 py-2 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-fire-red" />
                    <span className="text-gray-400 text-[10px] font-mono tracking-wider uppercase">Camera Feed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-fire-red animate-pulse" />
                    <span className="text-fire-red text-[10px] font-mono tracking-wider">REC</span>
                  </div>
                </div>

                <div className="absolute inset-0 pt-9 flex items-center justify-center">
                  <div className="absolute inset-0 top-9 bg-gradient-to-br from-gray-900/50 via-dark-bg to-gray-900/30" />

                  <motion.div
                    animate={{ y: ['-100%', '500%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-ai/60 to-transparent"
                  />

                  <div
                    className="absolute inset-0 top-9 opacity-[0.04]"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 30%, rgba(255,68,34,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 60%, rgba(0,229,255,0.05) 0%, transparent 50%)
                      `,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="w-24 h-24 border border-cyan-ai/30 rounded-sm relative">
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-ai/60" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-ai/60" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-ai/60" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-ai/60" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-ai/60" />
                    </div>
                  </div>

                  <div className="absolute top-14 left-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-fire-red animate-pulse" />
                    <span className="text-fire-red text-[10px] font-mono font-bold tracking-[0.2em]">
                      LIVE FEED
                    </span>
                  </div>

                  <div className="absolute bottom-10 left-3 right-3 flex items-end justify-between">
                    <div>
                      <p className="text-[8px] text-cyan-ai/70 font-mono">CAM-01 | 1080P</p>
                      <p className="text-[8px] text-gray-600 font-mono">IR: ON | ZOOM: 2.5x</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] text-gray-600 font-mono">FPS: 30</p>
                      <p className="text-[8px] text-green-500/70 font-mono">STATUS: OK</p>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] text-gray-500 font-mono">
                      2025-03-04 14:32:07
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="glassmorphism rounded-xl p-4 border border-fire-red/20 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-fire-red/10 border border-fire-red/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-fire-red" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-mono tracking-wider uppercase">Temperature</p>
                    <p className="text-white font-black text-lg">45°C</p>
                  </div>
                </div>
                <div className="w-16 h-2 rounded-full bg-dark-bg overflow-hidden">
                  <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-green-500 via-fire-orange to-fire-red" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="glassmorphism rounded-xl p-4 border border-fire-amber/20 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-fire-amber/10 border border-fire-amber/20 flex items-center justify-center">
                    <Battery className="w-4 h-4 text-fire-amber" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-mono tracking-wider uppercase">Battery</p>
                    <p className="text-white font-black text-lg">78%</p>
                  </div>
                </div>
                <div className="w-16 h-2 rounded-full bg-dark-bg overflow-hidden">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-fire-amber to-green-500" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="glassmorphism rounded-xl p-4 border border-cyan-ai/20 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-ai/10 border border-cyan-ai/20 flex items-center justify-center">
                    <Signal className="w-4 h-4 text-cyan-ai" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-mono tracking-wider uppercase">Signal</p>
                    <p className="text-white font-black text-lg">STRONG</p>
                  </div>
                </div>
                <div className="flex items-end gap-0.5 h-4">
                  {[4, 6, 8, 10, 12].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-sm bg-cyan-ai"
                      style={{ height: `${h}px`, opacity: i < 4 ? 1 : 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

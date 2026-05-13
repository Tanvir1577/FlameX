'use client'

import { motion } from 'framer-motion'
import { Sun, Wind, Flame, Battery, BatteryCharging, Zap } from 'lucide-react'

const powerSources = [
  {
    icon: Sun,
    titleBn: 'সোলার প্যানেল',
    titleEn: 'Solar Energy',
    description: 'সোলার প্যানেল ব্যবহারের মাধ্যমে সূর্যের আলো থেকে বিদ্যুৎ উৎপাদন',
    accent: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/20',
    arrowColor: '#fbbf24',
  },
  {
    icon: Wind,
    titleBn: 'উইন্ড এনার্জি',
    titleEn: 'Wind Energy',
    description: 'উইন্ড এনার্জি ব্যবহার করে ব্যাটারি চার্জ',
    accent: 'text-cyan-ai',
    bgColor: 'bg-cyan-ai/10',
    borderColor: 'border-cyan-ai/20',
    arrowColor: '#00e5ff',
  },
  {
    icon: Flame,
    titleBn: 'তাপীয় বিদ্যুৎ',
    titleEn: 'Thermal Energy',
    description: 'তাপীয় বিদ্যুৎ ব্যবহারের মাধ্যমে পরিবেশের তাপ থেকে শক্তি সংগ্রহ',
    accent: 'text-fire-red',
    bgColor: 'bg-fire-red/10',
    borderColor: 'border-fire-red/20',
    arrowColor: '#ff4422',
  },
]

const batteryInfo = [
  {
    icon: Battery,
    title: 'উন্নতমানের ব্যাটারি',
    description: 'উচ্চ ক্ষমতার লিথিয়াম-আয়ন ব্যাটারি দীর্ঘ সময় ব্যাকআপ দেয়।',
  },
  {
    icon: BatteryCharging,
    title: 'স্মার্ট ব্যাটারি ম্যানেজমেন্ট',
    description: 'স্বয়ংক্রিয় পাওয়ার ম্যানেজমেন্ট সিস্টেম',
  },
  {
    icon: Zap,
    title: 'নিরবিচ্ছিন্ন উদ্ধারকাজ',
    description: 'বিদ্যুৎ সংযোগহীন এলাকাতেও দীর্ঘ সময় কাজ করতে পারে।',
  },
  {
    icon: Sun,
    title: 'স্বনির্ভরতা',
    description: 'সোলার এবং থার্মাল এনার্জি ব্যবহারের ফলে বাইরে থেকে চার্জ দেওয়ার প্রয়োজনীয়তা কমে আসে।',
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

export default function PowerSystemSection() {
  return (
    <section id="power" className="relative py-24 md:py-32 overflow-hidden"
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
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,229,255,0.03) 0%, transparent 70%)',
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-6"
          >
            Power System
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 fire-text-gradient">
            সেলফ-সাসটেইনেবল পাওয়ার জেনারেশন
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light tracking-wide">
            Self-Sustainable Power Generation
          </p>
        </motion.div>

        {/* Power Source Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 sm:mb-16"
        >
          {powerSources.map((source) => (
            <motion.div
              key={source.titleEn}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(251,191,36,0.1)' }}
              className={`glassmorphism fire-border card-lift card-shimmer rounded-xl p-5 md:p-6 ${source.borderColor}`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-14 h-14 rounded-xl ${source.bgColor} border ${source.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <source.icon className={`w-7 h-7 ${source.accent}`} />
                </div>
                <h3 className={`font-bold text-lg mb-0.5 ${source.accent}`}>
                  {source.titleBn}
                </h3>
                <p className="text-gray-500 text-xs font-medium mb-3 tracking-wide uppercase">
                  {source.titleEn}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {source.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Battery Info Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 sm:mb-16"
        >
          {batteryInfo.map((info) => (
            <motion.div
              key={info.title}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(255,68,34,0.1)' }}
              className="glassmorphism fire-border card-lift rounded-xl p-5 md:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-fire-red/10 border border-fire-red/20 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-fire-red" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1.5">
                    {info.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {info.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Energy Flow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glassmorphism fire-border rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Animated circular energy flow diagram */}
            <div className="flex flex-col items-center">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">
                {/* Outer rotating ring */}
                <div
                  className="absolute inset-0 rounded-full border border-dashed border-fire-red/20"
                  style={{ animation: 'energyFlow 20s linear infinite' }}
                />

                {/* Inner rotating ring */}
                <div
                  className="absolute inset-6 rounded-full border border-dashed border-cyan-ai/20"
                  style={{ animation: 'energyFlow 15s linear infinite reverse' }}
                />

                {/* Rotating arrows ring */}
                <div
                  className="absolute inset-3"
                  style={{ animation: 'energyFlow 12s linear infinite' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 flex flex-col items-center">
                    <Sun className="w-6 h-6 text-amber-400 mb-1" />
                    <svg width="12" height="40" viewBox="0 0 12 40" className="opacity-60">
                      <path d="M6 0 L6 30 M2 26 L6 34 L10 26" stroke="#fbbf24" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                  <div className="absolute bottom-4 left-2 flex flex-col items-center">
                    <Wind className="w-6 h-6 text-cyan-ai mb-1" />
                    <svg width="12" height="40" viewBox="0 0 12 40" className="opacity-60 rotate-[120deg]">
                      <path d="M6 0 L6 30 M2 26 L6 34 L10 26" stroke="#00e5ff" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                  <div className="absolute bottom-4 right-2 flex flex-col items-center">
                    <Flame className="w-6 h-6 text-fire-red mb-1" />
                    <svg width="12" height="40" viewBox="0 0 12 40" className="opacity-60 rotate-[-120deg]">
                      <path d="M6 0 L6 30 M2 26 L6 34 L10 26" stroke="#ff4422" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Center: Battery with charging animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-dark-bg border-2 border-fire-red/40 flex items-center justify-center fire-glow">
                      <BatteryCharging className="w-10 h-10 text-fire-red animate-pulse" />
                    </div>
                    <div
                      className="absolute -inset-4 rounded-2xl border-2 border-fire-red/20"
                      style={{ animation: 'radarPulse 2s ease-out infinite' }}
                    />
                  </div>
                </div>

                {/* Static source labels outside the circle */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-amber-400/70 tracking-widest uppercase">
                  Solar
                </div>
                <div className="absolute bottom-0 left-0 text-[10px] font-bold text-cyan-ai/70 tracking-widest uppercase">
                  Wind
                </div>
                <div className="absolute bottom-0 right-0 text-[10px] font-bold text-fire-red/70 tracking-widest uppercase">
                  Thermal
                </div>
              </div>
            </div>

            {/* Right: Battery Level & Status */}
            <div className="flex flex-col gap-6">
              {/* Battery level indicator */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-medium">Battery Level</span>
                  <span className="text-white font-bold text-lg">78%</span>
                </div>
                <div className="relative h-6 bg-dark-bg rounded-full border border-dark-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '78%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1.5, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #22c55e, #fbbf24, #ff8800)',
                    }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
                    style={{ width: '78%' }}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 2s linear infinite',
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-gray-600 text-[10px]">0%</span>
                  <span className="text-gray-600 text-[10px]">50%</span>
                  <span className="text-gray-600 text-[10px]">100%</span>
                </div>
              </div>

              {/* Charging status */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div
                      className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping"
                      style={{ animationDuration: '1.5s' }}
                    />
                  </div>
                  <span className="text-green-400 font-black text-sm tracking-[0.2em]">
                    CHARGING
                  </span>
                </div>
                <Zap className="w-5 h-5 text-green-400 animate-pulse" />
              </div>

              {/* Power source breakdown */}
              <div className="space-y-3">
                <p className="text-gray-500 text-xs font-medium tracking-widest uppercase">
                  Power Source Contribution
                </p>
                {[
                  { source: 'Solar', percent: 42, color: '#fbbf24' },
                  { source: 'Wind', percent: 23, color: '#00e5ff' },
                  { source: 'Thermal', percent: 35, color: '#ff4422' },
                ].map((item) => (
                  <div key={item.source} className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs w-16">{item.source}</span>
                    <div className="flex-1 h-2 bg-dark-bg rounded-full overflow-hidden border border-dark-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                    <span
                      className="text-xs font-bold w-8 text-right"
                      style={{ color: item.color }}
                    >
                      {item.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

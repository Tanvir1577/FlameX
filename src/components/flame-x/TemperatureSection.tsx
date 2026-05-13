'use client'

import { motion } from 'framer-motion'
import { Cpu, Gauge, Monitor, Flame, AlertTriangle } from 'lucide-react'

const sensorCards = [
  {
    icon: Cpu,
    titleBn: 'সেন্সর মডেল',
    titleEn: 'Sensor Model',
    description: 'DHT11 বা নিখুঁত পরিমাপের জন্য ডিজিটাল থার্মোমিটার ব্যবহার।',
    accent: 'text-cyan-ai',
    borderColor: 'border-cyan-ai/20',
    glowColor: 'shadow-[0_0_20px_rgba(0,229,255,0.1)]',
  },
  {
    icon: Gauge,
    titleBn: 'পরিমাপের সীমা',
    titleEn: 'Range',
    description: '-১০°C থেকে ১০০°C পর্যন্ত তাপমাত্রা নির্ভুলভাবে মাপতে পারে।',
    accent: 'text-fire-amber',
    borderColor: 'border-fire-amber/20',
    glowColor: 'shadow-[0_0_20px_rgba(255,170,0,0.1)]',
  },
  {
    icon: Monitor,
    titleBn: 'ডেটা আউটপুট',
    titleEn: 'Data Output',
    description: 'এলসিডি ডিসপ্লে বা কন্ট্রোল প্যানেলে ডিজিটাল রিডিং প্রদর্শিত হয়।',
    accent: 'text-fire-orange',
    borderColor: 'border-fire-orange/20',
    glowColor: 'shadow-[0_0_20px_rgba(255,136,0,0.1)]',
  },
  {
    icon: Flame,
    titleBn: 'আগুনের উৎস শনাক্তকরণ',
    titleEn: 'Hotspot Detection',
    description: 'ধোঁয়ার আড়ালে লুকানো আগুনের তীব্রতা বা হটস্পট খুঁজে বের করা।',
    accent: 'text-fire-red',
    borderColor: 'border-fire-red/20',
    glowColor: 'shadow-[0_0_20px_rgba(255,68,34,0.1)]',
  },
  {
    icon: AlertTriangle,
    titleBn: 'পরিবেশের ঝুঁকি',
    titleEn: 'Risk Analysis',
    description: 'কোনো কক্ষ বা এলাকা মানুষের প্রবেশের জন্য নিরাপদ কি না, তা আগে থেকেই নিশ্চিত করে।',
    accent: 'text-fire-glow',
    borderColor: 'border-fire-glow/20',
    glowColor: 'shadow-[0_0_20px_rgba(255,102,51,0.1)]',
  },
]

const zoneData = [
  { zone: 'ZONE A', temp: 45, color: '#22c55e', label: 'green' },
  { zone: 'ZONE B', temp: 67, color: '#f97316', label: 'orange' },
  { zone: 'ZONE C', temp: 89, color: '#ff4422', label: 'red' },
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

export default function TemperatureSection() {
  return (
    <section id="temperature" className="relative py-24 md:py-32 overflow-hidden" style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 50% 30% at 80% 60%, rgba(6,182,212,0.03) 0%, transparent 50%),
          linear-gradient(180deg, #0d1117 0%, #0f1520 50%, #0d1117 100%)
        `,
      }}>
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background effects */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,68,34,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,68,34,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,68,34,0.04) 0%, transparent 70%)',
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-fire-red/10 text-fire-red border border-fire-red/20 mb-6"
          >
            Temperature
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 fire-text-gradient">
            রিয়েল-টাইম টেম্পারেচার সেন্সিং
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light tracking-wide">
            Real-Time Temperature Monitoring
          </p>
        </motion.div>

        {/* Sensor Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          {sensorCards.map((card) => (
            <motion.div
              key={card.titleEn}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(255,68,34,0.1)' }}
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

        {/* Temperature Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glassmorphism fire-border rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Thermometer & Temperature Display */}
            <div className="flex flex-col items-center">
              {/* Large temperature reading */}
              <div className="text-center mb-8">
                <p className="text-gray-500 text-xs font-medium tracking-[0.25em] uppercase mb-2">
                  Current Reading
                </p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative"
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-fire-red">
                    67.3°C
                  </span>
                </motion.div>
              </div>

              {/* Thermometer bar */}
              <div className="w-full max-w-xs">
                <div className="relative h-8 bg-dark-bg rounded-full border border-dark-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '67.3%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #22c55e, #f97316, #ff4422)',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-2">
                    {[0, 25, 50, 75, 100].map((val) => (
                      <span key={val} className="text-[9px] text-white/60 font-mono">
                        {val}°
                      </span>
                    ))}
                  </div>
                </div>

                {/* Vertical thermometer visual */}
                <div className="flex justify-center mt-6">
                  <div className="relative flex flex-col items-center">
                    <div className="relative w-8 h-48 bg-dark-bg rounded-t-full border border-dark-border overflow-hidden">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '67.3%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                        className="absolute bottom-0 left-0 right-0 rounded-t-sm"
                        style={{
                          background: 'linear-gradient(to top, #ff4422, #ff8800, #ffaa00)',
                        }}
                      />
                      {[20, 40, 60, 80].map((level) => (
                        <div
                          key={level}
                          className="absolute left-0 right-0 border-t border-dashed border-white/10"
                          style={{ bottom: `${level}%` }}
                        >
                          <span className="absolute -right-10 -top-2 text-[8px] text-white/40 font-mono">
                            {level}°
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="w-12 h-12 -mt-1 rounded-full bg-fire-red border-2 border-fire-red/50 fire-glow flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-fire-red/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Zone Cards & Status */}
            <div className="flex flex-col gap-4">
              {zoneData.map((zone, i) => (
                <motion.div
                  key={zone.zone}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className={`glassmorphism rounded-xl p-4 flex items-center justify-between ${
                    zone.label === 'red' ? 'fire-border' : 'border border-dark-border'
                  }`}
                  style={
                    zone.label === 'red'
                      ? { animation: 'tempPulse 2s ease-in-out infinite' }
                      : undefined
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: zone.color }}
                      />
                      <div
                        className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
                        style={{
                          backgroundColor: zone.color,
                          opacity: 0.5,
                          animationDuration: zone.label === 'red' ? '1s' : '2s',
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm tracking-wide">
                        {zone.zone}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {zone.label === 'green'
                          ? 'Normal Range'
                          : zone.label === 'orange'
                          ? 'Elevated'
                          : 'CRITICAL'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className="text-2xl font-black"
                      style={{ color: zone.color }}
                    >
                      {zone.temp}°C
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Hotspot Detected Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-2 bg-fire-red/10 border border-fire-red/30 rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-fire-red" />
                    <div
                      className="absolute inset-0 w-3 h-3 rounded-full bg-fire-red animate-ping"
                      style={{ animationDuration: '0.8s' }}
                    />
                  </div>
                  <span className="text-fire-red font-black text-sm tracking-[0.2em]">
                    HOTSPOT DETECTED
                  </span>
                </div>
                <Flame className="w-5 h-5 text-fire-red animate-pulse" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

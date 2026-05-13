'use client'

import { motion } from 'framer-motion'
import { Radio, EyeOff, CloudFog, Target } from 'lucide-react'

const features = [
  {
    Icon: Radio,
    titleBn: 'তরঙ্গ নির্গমন',
    titleEn: 'Wave Emission',
    description: 'উচ্চ কম্পাঙ্কের শব্দ তরঙ্গ পাঠিয়ে বস্তুর দূরত্ব মাপে।',
  },
  {
    Icon: EyeOff,
    titleBn: 'অন্ধকারে সক্ষমতা',
    titleEn: 'Dark Capability',
    description: 'আলোর উপর নির্ভরশীল নয়, ধোঁয়া, কুয়াশা বা অন্ধকারেও ক্যামেরা থেকে দ্রুত ও নির্ভুল কাজ করে।',
  },
  {
    Icon: CloudFog,
    titleBn: 'জিরো ভিজিবিলিটি',
    titleEn: 'Zero Visibility',
    description: 'শূন্য দৃশ্যমানতায় সংঘর্ষ (Collision) এড়ানো।',
  },
  {
    Icon: Target,
    titleBn: 'নির্ভুলতা',
    titleEn: 'Precision',
    description: 'উদ্ধার অভিযানে ধোঁয়ার ভেতর রোবট বা ড্রনের নিরাপদ যাতায়াত নিশ্চিত করা।',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
} as const

const radarBlips = [
  { angle: 35, distance: 28, size: 6, delay: 0.5 },
  { angle: 140, distance: 45, size: 5, delay: 1.8 },
  { angle: 220, distance: 20, size: 7, delay: 3.2 },
  { angle: 310, distance: 55, size: 4, delay: 4.5 },
  { angle: 80, distance: 38, size: 5, delay: 2.4 },
]

export default function UltrasonicSection() {
  return (
    <section id="ultrasonic" className="relative py-24 md:py-32 overflow-hidden" style={{
        background: `
          radial-gradient(ellipse 50% 40% at 60% 30%, rgba(6,182,212,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 60% 30% at 20% 80%, rgba(239,68,68,0.04) 0%, transparent 50%),
          linear-gradient(180deg, #0d1117 0%, #0b1120 50%, #0d1117 100%)
        `,
      }}>
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(0,229,255,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Ultrasonic
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="fire-text-gradient">আল্ট্রাসনিক নেভিগেশন সিস্টেম</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg tracking-wide">
            Ultrasonic Navigation System
          </p>
        </motion.div>

        {/* Content: Features + Radar side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {features.map(({ Icon, titleBn, titleEn, description }) => (
              <motion.div
                key={titleEn}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,229,255,0.1)' }}
                className="glassmorphism fire-border card-lift rounded-2xl p-5 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-cyan-ai/10 border border-cyan-ai/20 mb-3 group-hover:bg-cyan-ai/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan-ai group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-white font-bold text-base leading-tight mb-0.5">{titleBn}</h3>
                <p className="text-gray-500 text-[10px] tracking-wider uppercase mb-2">{titleEn}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Radar/Sonar Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">
              {/* Outer dark container */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-ai/15"
                style={{
                  background:
                    'radial-gradient(circle, rgba(0,229,255,0.02) 0%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.95) 100%)',
                  boxShadow:
                    '0 0 60px rgba(0,229,255,0.06), inset 0 0 40px rgba(0,229,255,0.03)',
                }}
              />

              {/* Concentric sonar rings */}
              {[0.33, 0.55, 0.78, 1].map((scale, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="rounded-full border border-cyan-ai/10"
                    style={{
                      width: `${scale * 100}%`,
                      height: `${scale * 100}%`,
                    }}
                  />
                </div>
              ))}

              {/* Radar sweep line (rotating) */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  animation: 'energyFlow 4s linear infinite',
                }}
              >
                <div
                  className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(0,229,255,0.8), rgba(0,229,255,0.1), transparent)',
                    transform: 'translateY(-50%)',
                  }}
                />
                {/* Sweep cone glow */}
                <div
                  className="absolute top-1/2 left-1/2 w-1/2 origin-left"
                  style={{
                    height: '80px',
                    transform: 'translateY(-50%)',
                    background:
                      'conic-gradient(from -15deg, transparent 0deg, rgba(0,229,255,0.06) 15deg, transparent 30deg)',
                  }}
                />
              </div>

              {/* Radar blips */}
              {radarBlips.map((blip, i) => {
                const rad = (blip.angle * Math.PI) / 180
                const x = 50 + blip.distance * Math.cos(rad)
                const y = 50 + blip.distance * Math.sin(rad)
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-cyan-ai"
                    style={{
                      width: `${blip.size}px`,
                      height: `${blip.size}px`,
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 8px rgba(0,229,255,0.6)',
                    }}
                    animate={{
                      opacity: [0, 0.9, 0.9, 0],
                      scale: [0.5, 1, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      delay: blip.delay,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                )
              })}

              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="w-3 h-3 rounded-full bg-cyan-ai"
                  style={{
                    boxShadow: '0 0 12px rgba(0,229,255,0.8), 0 0 24px rgba(0,229,255,0.3)',
                  }}
                />
              </div>

              {/* Cross hairs */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-cyan-ai/8 -translate-x-1/2" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-cyan-ai/8 -translate-y-1/2" />

              {/* SCANNING text */}
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span
                  className="text-cyan-ai/70 text-xs font-mono tracking-[0.3em] font-bold"
                  style={{
                    animation: 'radarScanBlink 1.5s ease-in-out infinite',
                  }}
                >
                  SCANNING...
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

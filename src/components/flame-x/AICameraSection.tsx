'use client'

import { motion } from 'framer-motion'
import { Search, ShieldCheck, Brain, ScanFace, Cpu, Video, CircuitBoard, Crosshair } from 'lucide-react'

const mainFeatures = [
  {
    Icon: Search,
    titleBn: 'উদ্ধার অভিযান',
    titleEn: 'Rescue Operations',
    description: 'ধ্বংসস্তূপ বা ভিড়ের মাঝে নিখোঁজ বা আটকে পড়া মানুষকে দ্রুত খুঁজে বের করে।',
  },
  {
    Icon: ShieldCheck,
    titleBn: 'নিরাপত্তা',
    titleEn: 'Security',
    description: 'অপরিচিত ব্যক্তি বা নির্দিষ্ট কোনো বস্তুর গতিবিধি স্বয়ংক্রিয়ভাবে ট্র্যাক করে।',
  },
  {
    Icon: Brain,
    titleBn: 'সঠিক সিদ্ধান্ত',
    titleEn: 'Smart Decisions',
    description: 'রোবটটি নিজে থেকে পরিস্থিতি বিশ্লেষণ করতে পারে, ফলে উদ্ধারকারীর কাজ সহজ হয়।',
  },
]

const additionalFeatures = [
  {
    Icon: ScanFace,
    titleBn: 'নিখুঁত ফেস ডিটেকশন',
    titleEn: 'Face Detection',
    detail: "যেমন 'Sohan Hasan' কে শনাক্ত করা",
  },
  {
    Icon: Cpu,
    titleBn: 'স্বয়ংক্রিয় শনাক্তকরণ',
    titleEn: 'Auto Detection',
    detail: 'ট্যাক্টিক্যাল বস্তু চিহ্নিতকরণ',
  },
  {
    Icon: Video,
    titleBn: 'ভিডিও স্ট্রিমিং',
    titleEn: 'HD Streaming',
    detail: 'হাই-ডেফিনিশন ভিডিও',
  },
  {
    Icon: CircuitBoard,
    titleBn: 'মডিউল',
    titleEn: 'ESP32-CAM Module',
    detail: 'হার্ডওয়্যার',
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

export default function AICameraSection() {
  return (
    <section id="ai-camera" className="relative py-24 md:py-32 overflow-hidden" style={{
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
            'radial-gradient(ellipse 50% 40% at 70% 30%, rgba(0,229,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16 md:mb-20 relative"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-cyan-ai/10 text-cyan-ai border border-cyan-ai/20 mb-6"
          >
            AI Vision
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="fire-text-gradient">এআই ক্যামেরা</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg tracking-wide">
            AI Camera Detection System
          </p>
          {/* ESP32-CAM badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute top-0 right-0 md:top-2 md:right-2 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider border border-cyan-ai/30 text-cyan-ai bg-cyan-ai/5"
          >
            <CircuitBoard className="w-3.5 h-3.5" />
            ESP32-CAM
          </motion.span>
        </motion.div>

        {/* Main features (3 cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          {mainFeatures.map(({ Icon, titleBn, titleEn, description }) => (
            <motion.div
              key={titleEn}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,229,255,0.12)' }}
              className="glassmorphism fire-border card-lift card-shimmer rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-ai/10 border border-cyan-ai/20 group-hover:bg-cyan-ai/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-cyan-ai group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{titleBn}</h3>
                  <p className="text-gray-500 text-xs tracking-wider uppercase">{titleEn}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional features (smaller cards, grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          {additionalFeatures.map(({ Icon, titleBn, titleEn, detail }) => (
            <motion.div
              key={titleEn}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glassmorphism fire-border card-lift rounded-xl p-3 sm:p-4 group text-center"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-ai/10 border border-cyan-ai/20 mx-auto mb-3 group-hover:bg-cyan-ai/20 transition-colors">
                <Icon className="w-5 h-5 text-cyan-ai" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-0.5">{titleBn}</h4>
              <p className="text-gray-500 text-[10px] tracking-wider uppercase mb-1">{titleEn}</p>
              <p className="text-gray-400 text-xs">{detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Targeting Overlay Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="relative rounded-2xl overflow-hidden border border-cyan-ai/20"
            style={{
              background: 'rgba(0,0,0,0.85)',
              boxShadow: '0 0 40px rgba(0,229,255,0.08), inset 0 0 60px rgba(0,229,255,0.03)',
            }}
          >
            {/* Viewfinder inner area */}
            <div className="relative aspect-video p-4 md:p-6">
              {/* Targeting brackets — corners */}
              <div className="absolute top-3 left-3 w-8 h-8 md:top-5 md:left-5 md:w-10 md:h-10">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-ai/70" />
                <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-ai/70" />
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 md:top-5 md:right-5 md:w-10 md:h-10">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-cyan-ai/70" />
                <div className="absolute top-0 right-0 w-[2px] h-full bg-cyan-ai/70" />
              </div>
              <div className="absolute bottom-3 left-3 w-8 h-8 md:bottom-5 md:left-5 md:w-10 md:h-10">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-ai/70" />
                <div className="absolute bottom-0 left-0 w-[2px] h-full bg-cyan-ai/70" />
              </div>
              <div className="absolute bottom-3 right-3 w-8 h-8 md:bottom-5 md:right-5 md:w-10 md:h-10">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyan-ai/70" />
                <div className="absolute bottom-0 right-0 w-[2px] h-full bg-cyan-ai/70" />
              </div>

              {/* Scanning line animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div
                  className="absolute left-0 right-0 h-[1px] opacity-30"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #00e5ff, transparent)',
                    animation: 'scanLine 4s linear infinite',
                  }}
                />
              </div>

              {/* Simulated person silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div
                    className="w-20 h-28 md:w-24 md:h-36 rounded-t-full bg-cyan-ai/5 border border-cyan-ai/15 relative"
                    style={{ clipPath: 'ellipse(45% 50% at 50% 50%)' }}
                  />
                  {/* Bounding box */}
                  <div
                    className="absolute -inset-3 md:-inset-4 border border-green-400/60 rounded-md"
                    style={{
                      boxShadow: '0 0 10px rgba(74,222,128,0.15)',
                    }}
                  >
                    <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-green-400/80" />
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-green-400/80" />
                    <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-green-400/80" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-green-400/80" />
                  </div>

                  {/* DETECTED label */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -top-8 md:-top-10 left-0 flex items-center gap-1.5"
                  >
                    <Crosshair className="w-3 h-3 text-green-400" />
                    <span
                      className="text-green-400 text-[10px] md:text-xs font-bold tracking-wider px-2 py-0.5 rounded-sm"
                      style={{
                        background: 'rgba(74,222,128,0.1)',
                        border: '1px solid rgba(74,222,128,0.3)',
                      }}
                    >
                      DETECTED: Sohan Hasan
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 flex flex-col gap-1">
                <span className="text-[10px] md:text-xs font-mono text-green-400/80 tracking-wider">
                  CONF: 98.7%
                </span>
                <span className="text-[10px] md:text-xs font-mono text-cyan-ai/80 tracking-wider">
                  STATUS: TRACKING
                </span>
              </div>
              <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5">
                <span className="text-[10px] md:text-xs font-mono text-fire-amber/80 tracking-wider">
                  MODE: RESCUE
                </span>
              </div>

              {/* Top-center small crosshair */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 md:top-5">
                <div className="w-4 h-4 relative">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-ai/40" />
                  <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cyan-ai/40" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

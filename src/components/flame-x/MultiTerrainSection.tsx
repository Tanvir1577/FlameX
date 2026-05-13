'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, Mountain, Waves } from 'lucide-react'

const terrainModes = [
  {
    id: 'air',
    mode: 'AIR',
    banglaMode: 'আকাশ',
    Icon: Plane,
    accentColor: '#ff4422',
    accentClass: 'text-fire-red',
    borderClass: 'border-fire-red/30',
    glowClass: 'shadow-[0_0_30px_rgba(255,68,34,0.3)]',
    bgAccent: 'rgba(255,68,34,0.1)',
    titleBn: 'ভার্টিকাল অ্যাক্সেস',
    titleEn: 'Vertical Access',
    description:
      'উঁচু ভবনের অগ্নিকাণ্ড বা জরুরি অবস্থায় সিঁড়ি ছাড়াই সরাসরি জানালায় বা ছাদে পৌঁছাতে সক্ষম।',
    visualType: 'drone' as const,
  },
  {
    id: 'earth',
    mode: 'EARTH',
    banglaMode: 'স্থল',
    Icon: Mountain,
    accentColor: '#ff8800',
    accentClass: 'text-fire-orange',
    borderClass: 'border-fire-orange/30',
    glowClass: 'shadow-[0_0_30px_rgba(255,136,0,0.3)]',
    bgAccent: 'rgba(255,136,0,0.1)',
    titleBn: 'যানজট নিরসন',
    titleEn: 'Traffic Bypass',
    description:
      'শহরের তীব্র জ্যাম এড়িয়ে আকাশপথে দ্রুত দুর্ঘটনাস্থলে পৌঁছে জীবন রক্ষাকারী সহায়তা দেয়।',
    visualType: 'ground' as const,
  },
  {
    id: 'water',
    mode: 'WATER',
    banglaMode: 'জল',
    Icon: Waves,
    accentColor: '#00e5ff',
    accentClass: 'text-cyan-ai',
    borderClass: 'border-cyan-ai/30',
    glowClass: 'shadow-[0_0_30px_rgba(0,229,255,0.3)]',
    bgAccent: 'rgba(0,229,255,0.1)',
    titleBn: 'বাঁধা ও সীমানাহীন যাতায়াত',
    titleEn: 'Obstacle-Free Navigation',
    description:
      'সামনে কোনো বাঁধা থাকলে এটি থেমে না থেকে উড়ে বা ভেসে গন্তব্যে পৌঁছায়।',
    visualType: 'water' as const,
  },
]

const largeIcons = [
  { Icon: Plane, label: 'AIR', bangla: 'আকাশ', accentColor: '#ff4422', accentClass: 'text-fire-red', borderClass: 'border-fire-red/40' },
  { Icon: Mountain, label: 'EARTH', bangla: 'স্থল', accentColor: '#ff8800', accentClass: 'text-fire-orange', borderClass: 'border-fire-orange/40' },
  { Icon: Waves, label: 'WATER', bangla: 'জল', accentColor: '#00e5ff', accentClass: 'text-cyan-ai', borderClass: 'border-cyan-ai/40' },
]

function DroneVisual() {
  return (
    <div className="relative h-16 w-full overflow-hidden rounded-lg bg-dark-bg/50 mt-4">
      <div className="absolute bottom-4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fire-red/20 to-transparent" />
      <div
        className="absolute bottom-3"
        style={{ animation: 'dronePath 6s ease-in-out infinite' }}
      >
        <Plane className="w-5 h-5 text-fire-red/80 -rotate-45" />
      </div>
      <div className="absolute bottom-0 left-[15%] w-3 h-8 bg-fire-red/10 rounded-t-sm" />
      <div className="absolute bottom-0 left-[40%] w-4 h-12 bg-fire-red/10 rounded-t-sm" />
      <div className="absolute bottom-0 left-[65%] w-3 h-6 bg-fire-red/10 rounded-t-sm" />
      <div className="absolute bottom-0 left-[85%] w-5 h-10 bg-fire-red/10 rounded-t-sm" />
      <div className="absolute bottom-12 left-[42%] w-[1px] h-4 bg-fire-red/30" style={{ animation: 'pulseFire 2s ease-in-out infinite' }} />
    </div>
  )
}

function GroundVisual() {
  return (
    <div className="relative h-16 w-full overflow-hidden rounded-lg bg-dark-bg/50 mt-4">
      <div className="absolute bottom-3 left-0 right-0 flex flex-col gap-1">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-fire-orange/30 to-transparent" style={{ animation: 'groundPulse 2s ease-in-out infinite' }} />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-fire-orange/15 to-transparent" style={{ animation: 'groundPulse 2s ease-in-out infinite 0.5s' }} />
      </div>
      <div className="absolute bottom-5 left-[10%] flex gap-1">
        <div className="w-2 h-1.5 rounded-sm bg-fire-orange/20" />
        <div className="w-2 h-1.5 rounded-sm bg-fire-orange/20" />
        <div className="w-2 h-1.5 rounded-sm bg-fire-orange/20" />
      </div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 64" preserveAspectRatio="none">
        <path
          d="M 20 55 Q 100 5 180 55"
          fill="none"
          stroke="rgba(255,136,0,0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ animation: 'groundPulse 2s ease-in-out infinite' }}
        />
      </svg>
      <div className="absolute" style={{ animation: 'dronePath 5s ease-in-out infinite', bottom: '8px', left: '10%' }}>
        <Mountain className="w-4 h-4 text-fire-orange/70" />
      </div>
    </div>
  )
}

function WaterVisual() {
  return (
    <div className="relative h-16 w-full overflow-hidden rounded-lg bg-dark-bg/50 mt-4 flex items-center justify-center">
      <div className="absolute bottom-3 left-0 right-0 h-[1px] bg-cyan-ai/20" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="w-12 h-3 rounded-full border border-cyan-ai/20" style={{ animation: 'waterRipple 2s ease-out infinite' }} />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="w-8 h-2 rounded-full border border-cyan-ai/30" style={{ animation: 'waterRipple 2s ease-out infinite 0.5s' }} />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="w-4 h-1 rounded-full border border-cyan-ai/40" style={{ animation: 'waterRipple 2s ease-out infinite 1s' }} />
      </div>
      <div className="absolute top-2 right-4" style={{ animation: 'float 3s ease-in-out infinite' }}>
        <Waves className="w-4 h-4 text-cyan-ai/60" />
      </div>
    </div>
  )
}

function TerrainVisual({ type }: { type: 'drone' | 'ground' | 'water' }) {
  switch (type) {
    case 'drone':
      return <DroneVisual />
    case 'ground':
      return <GroundVisual />
    case 'water':
      return <WaterVisual />
  }
}

export default function MultiTerrainSection() {
  const [activeMode, setActiveMode] = useState<string | null>(null)

  return (
    <section id="multi-terrain" className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
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
            Multi-Terrain
          </motion.span>
          <h2 className="fire-text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            মাল্টি-টেরেন নেভিগেশন সিস্টেম
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light tracking-wide">
            Multi-Terrain Navigation System
          </p>
        </motion.div>

        {/* Three terrain mode cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {terrainModes.map((mode, index) => {
            const isActive = activeMode === mode.id
            return (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setActiveMode(isActive ? null : mode.id)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${
                  isActive
                    ? `${mode.borderClass.replace('/30', '/70')} ${mode.glowClass}`
                    : mode.borderClass
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${mode.bgAccent}, rgba(17,17,17,0.9))`
                    : 'rgba(17,17,17,0.7)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Mode badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: mode.bgAccent, border: `1px solid ${mode.accentColor}33` }}
                    >
                      <mode.Icon className={`w-5 h-5 ${mode.accentClass}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold tracking-[0.2em] ${mode.accentClass} uppercase`}>
                        {mode.mode}
                      </span>
                      <span className="block text-[10px] text-gray-500 tracking-wider">
                        {mode.banglaMode}
                      </span>
                    </div>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: mode.accentColor, boxShadow: `0 0 10px ${mode.accentColor}` }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1">{mode.titleBn}</h3>
                <p className="text-sm text-gray-500 mb-3">{mode.titleEn}</p>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-2">
                  {mode.description}
                </p>

                {/* Visual animation */}
                <TerrainVisual type={mode.visualType} />
              </motion.div>
            )
          })}
        </div>

        {/* Three large icons in a row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 sm:gap-8 md:gap-16 flex-wrap"
        >
          {largeIcons.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center glassmorphism float-animation"
                style={{
                  borderColor: item.accentColor,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  animationDelay: `${index * 0.5}s`,
                  boxShadow: `0 0 20px ${item.accentColor}20, inset 0 0 20px ${item.accentColor}08`,
                }}
              >
                <item.Icon className={`w-8 h-8 md:w-10 md:h-10 ${item.accentClass}`} />
              </div>
              <div className="text-center">
                <span className={`text-sm font-bold tracking-[0.15em] ${item.accentClass} uppercase block`}>
                  {item.label}
                </span>
                <span className="text-xs text-gray-500">{item.bangla}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wind, Droplets, FlaskConical, Flame, Fuel, Cloud, Zap } from 'lucide-react'

const suppressionSystems = [
  {
    id: 'co2',
    tier: 'PRIMARY',
    title: 'CO\u2082 System',
    Icon: Wind,
    accentColor: '#00e5ff',
    accentClass: 'text-cyan-ai',
    borderClass: 'border-cyan-ai/30',
    bgAccent: 'rgba(0,229,255,0.08)',
    features: [
      'Removes oxygen from fire',
      'Safe for electrical fires',
      'Prevents equipment damage',
    ],
    visualType: 'co2' as const,
  },
  {
    id: 'water',
    tier: 'SECONDARY',
    title: 'Water Support',
    Icon: Droplets,
    accentColor: '#3b82f6',
    accentClass: 'text-blue-400',
    borderClass: 'border-blue-400/30',
    bgAccent: 'rgba(59,130,246,0.08)',
    features: [
      'Supplementary water-based cooling',
      'Temperature reduction support',
    ],
    visualType: 'water' as const,
  },
  {
    id: 'chemical',
    tier: 'CHEMICAL AGENT',
    title: 'Mono-Ammonium Phosphate',
    Icon: FlaskConical,
    accentColor: '#ffaa00',
    accentClass: 'text-fire-amber',
    borderClass: 'border-fire-amber/30',
    bgAccent: 'rgba(255,170,0,0.08)',
    features: [
      'রাসায়নিক উপাদান: মনো-অ্যামোনিয়াম ফসফেট',
      'কার্যপদ্ধতি: আগুনের সংস্পর্শে এসে গলে গিয়ে আঠালো স্তর তৈরি, অক্সিজেন বন্ধ, চেইন রিয়্যাকশন ভাঙে',
      'বৈদ্যুতিক নিরাপত্তা: বিদ্যুৎ অপরিবাহী',
      'দ্রুত সমাধান: মানুষ পৌঁছাতে পারে না এমন জায়গায়',
    ],
    visualType: 'chemical' as const,
  },
]

const fireTypes = [
  {
    class: 'Class A',
    label: 'Solid Fires',
    description: 'Wood, paper, cloth & ordinary combustibles',
    Icon: Flame,
    accentColor: '#ff4422',
    accentClass: 'text-fire-red',
    borderClass: 'border-fire-red/30',
    bgAccent: 'rgba(255,68,34,0.08)',
  },
  {
    class: 'Class B',
    label: 'Liquid Fires',
    description: 'Flammable liquids, gasoline, oils & solvents',
    Icon: Fuel,
    accentColor: '#ff8800',
    accentClass: 'text-fire-orange',
    borderClass: 'border-fire-orange/30',
    bgAccent: 'rgba(255,136,0,0.08)',
  },
  {
    class: 'Class C',
    label: 'Gas Fires',
    description: 'Flammable gases, propane, natural gas',
    Icon: Cloud,
    accentColor: '#ffaa00',
    accentClass: 'text-fire-amber',
    borderClass: 'border-fire-amber/30',
    bgAccent: 'rgba(255,170,0,0.08)',
  },
  {
    class: 'Electrical',
    label: 'Electrical Fires',
    description: 'Energized equipment, wiring & panels',
    Icon: Zap,
    accentColor: '#00e5ff',
    accentClass: 'text-cyan-ai',
    borderClass: 'border-cyan-ai/30',
    bgAccent: 'rgba(0,229,255,0.08)',
  },
]

function CO2Visual() {
  return (
    <div className="relative h-20 w-full flex items-center justify-center mt-4">
      <motion.div
        animate={{ scale: [1, 0.3], opacity: [0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        className="absolute w-16 h-16 rounded-full border-2 border-cyan-ai/40"
      />
      <motion.div
        animate={{ scale: [0.8, 0.15], opacity: [0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
        className="absolute w-14 h-14 rounded-full border border-cyan-ai/30"
      />
      <div className="w-6 h-6 rounded-full bg-cyan-ai/20 border border-cyan-ai/40 flex items-center justify-center">
        <span className="text-[8px] font-bold text-cyan-ai">CO₂</span>
      </div>
      <motion.span
        animate={{ x: [0, 40], y: [0, -20], opacity: [0.8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        className="absolute top-2 right-6 text-[9px] text-cyan-ai/60 font-mono"
      >
        O₂ ↓
      </motion.span>
      <motion.span
        animate={{ x: [0, -30], y: [0, -15], opacity: [0.8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
        className="absolute bottom-3 left-8 text-[9px] text-cyan-ai/60 font-mono"
      >
        O₂ ↓
      </motion.span>
    </div>
  )
}

function WaterSupportVisual() {
  return (
    <div className="relative h-20 w-full flex items-center justify-center mt-4 overflow-hidden">
      <div className="flex flex-col items-center gap-1 w-full px-4">
        <div className="w-full h-3 rounded-full bg-dark-bg/80 overflow-hidden">
          <motion.div
            animate={{ width: ['100%', '30%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="h-full rounded-full bg-gradient-to-r from-blue-500/60 to-blue-400/30"
          />
        </div>
        <div className="flex justify-between w-full text-[9px] text-gray-500">
          <span>🔥 Hot</span>
          <span>❄️ Cooled</span>
        </div>
      </div>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [-5, 15], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: 'easeIn' }}
          className="absolute"
          style={{ left: `${30 + i * 20}%`, top: '10%' }}
        >
          <Droplets className="w-3 h-3 text-blue-400/60" />
        </motion.div>
      ))}
    </div>
  )
}

function ChemicalVisual() {
  return (
    <div className="relative h-20 w-full flex items-center justify-center mt-4 overflow-hidden">
      <motion.div
        animate={{ width: ['20%', '80%'], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 h-3 rounded-full bg-fire-amber/20 border border-fire-amber/30"
      />
      <motion.div
        animate={{ width: ['15%', '60%'], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-5 h-2 rounded-full bg-fire-amber/15"
      />
      <div className="relative z-10">
        <FlaskConical className="w-6 h-6 text-fire-amber/60" />
      </div>
      <motion.div
        animate={{ opacity: [1, 0], scale: [1, 1.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-fire-amber/50 font-mono tracking-widest"
      >
        ⛓️‍💥 CHAIN BREAK
      </motion.div>
    </div>
  )
}

function SuppressionVisual({ type }: { type: 'co2' | 'water' | 'chemical' }) {
  switch (type) {
    case 'co2':
      return <CO2Visual />
    case 'water':
      return <WaterSupportVisual />
    case 'chemical':
      return <ChemicalVisual />
  }
}

function FireSuppressionAnimation() {
  return (
    <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 0.6, 0.3],
          opacity: [0.8, 0.9, 0.4, 0.1],
          borderColor: [
            'rgba(255,68,34,0.6)',
            'rgba(255,136,0,0.6)',
            'rgba(255,170,0,0.4)',
            'rgba(255,170,0,0.1)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-32 h-32 rounded-full border-4"
      />
      <motion.div
        animate={{
          scale: [0.8, 1.1, 0.5, 0.2],
          opacity: [0.6, 0.7, 0.3, 0.05],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-fire-red/30 via-fire-orange/20 to-transparent"
      />
      <motion.div
        animate={{
          scale: [0.6, 0.9, 0.3, 0.1],
          opacity: [0.5, 0.6, 0.2, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute w-16 h-16 rounded-full bg-fire-red/20"
      />
      <motion.div
        animate={{
          scale: [0.3, 0.3, 0.8, 1],
          opacity: [0, 0, 0.3, 0.6],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-10 h-10 rounded-full bg-cyan-ai/10 border border-cyan-ai/20 flex items-center justify-center"
      >
        <Wind className="w-4 h-4 text-cyan-ai/50" />
      </motion.div>
      <motion.span
        animate={{ opacity: [0.4, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute -bottom-8 text-xs text-gray-500 font-medium tracking-wider"
      >
        SUPPRESSION ACTIVE
      </motion.span>
    </div>
  )
}

export default function FireSuppressionSection() {
  const [activeSystem, setActiveSystem] = useState<string | null>(null)

  return (
    <section id="fire-suppression" className="relative py-24 md:py-32 overflow-hidden"
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-fire-amber/10 text-fire-amber border border-fire-amber/20 mb-6"
          >
            Fire Suppression
          </motion.span>
          <h2 className="fire-text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            স্মার্ট ফায়ার সাপ্রেশন সিস্টেম
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light tracking-wide">
            Smart Fire Suppression System
          </p>
        </motion.div>

        {/* Suppression system cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {suppressionSystems.map((system, index) => {
            const isActive = activeSystem === system.id
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                onClick={() => setActiveSystem(isActive ? null : system.id)}
                className={`cursor-pointer rounded-2xl p-6 bg-dark-card border transition-all duration-300 ${
                  isActive
                    ? `${system.borderClass.replace('/30', '/70')} shadow-[0_0_30px_${system.accentColor}33]`
                    : system.borderClass
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${system.bgAccent}, rgba(17,17,17,0.9))`
                    : 'rgba(17,17,17,0.7)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Tier badge + icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: system.bgAccent, border: `1px solid ${system.accentColor}33` }}
                    >
                      <system.Icon className={`w-5 h-5 ${system.accentClass}`} />
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold tracking-[0.2em] ${system.accentClass} uppercase block`}>
                        {system.tier}
                      </span>
                      <span className="text-sm font-semibold text-white">{system.title}</span>
                    </div>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: system.accentColor, boxShadow: `0 0 10px ${system.accentColor}` }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Features list */}
                <ul className="space-y-2 mb-2">
                  {system.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: system.accentColor, opacity: 0.6 }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Visual */}
                <SuppressionVisual type={system.visualType} />
              </motion.div>
            )
          })}
        </div>

        {/* Fire type cards + suppression animation */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-8 items-start">
          {/* Fire type cards grid */}
          <div className="lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white mb-6"
            >
              Fire Type Classification
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fireTypes.map((fire, index) => (
                <motion.div
                  key={fire.class}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
                  className="rounded-xl p-5 border glassmorphism cursor-default"
                  style={{
                    borderColor: fire.accentColor + '40',
                    background: `linear-gradient(135deg, ${fire.bgAccent}, rgba(17,17,17,0.6))`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: fire.bgAccent, border: `1px solid ${fire.accentColor}33` }}
                    >
                      <fire.Icon className={`w-4 h-4 ${fire.accentClass}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold tracking-[0.15em] ${fire.accentClass} uppercase`}>
                        {fire.class}
                      </span>
                      <span className="block text-sm font-semibold text-white">{fire.label}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{fire.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fire suppression animation */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl font-bold text-white mb-6 text-center"
            >
              Live Suppression
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glassmorphism rounded-2xl p-8 w-full flex flex-col items-center"
            >
              <FireSuppressionAnimation />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

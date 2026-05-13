'use client'

import { useMemo, useState, useEffect, useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'
import { Plane, Mountain, Waves, Flame, Bot, Shield, Cpu, Radio, ChevronDown, Sparkles } from 'lucide-react'
import Image from 'next/image'

const titleLetters = 'FLAME-X'.split('')

const stats = [
  { label: 'AI Powered', icon: Bot },
  { label: 'Multi-Terrain', icon: Mountain },
  { label: 'Smart Rescue', icon: Shield },
]

const modeIcons = [
  { Icon: Plane, label: 'AIR', bangla: 'আকাশ', color: 'from-red-500/20 to-orange-500/10', borderColor: 'border-red-500/20', iconColor: 'text-red-400', delay: 0.6 },
  { Icon: Mountain, label: 'LAND', bangla: 'স্থল', color: 'from-orange-500/20 to-amber-500/10', borderColor: 'border-orange-500/20', iconColor: 'text-orange-400', delay: 0.8 },
  { Icon: Waves, label: 'WATER', bangla: 'জল', color: 'from-cyan-500/20 to-blue-500/10', borderColor: 'border-cyan-500/20', iconColor: 'text-cyan-400', delay: 1.0 },
]

interface Particle {
  id: number
  left: string
  size: number
  color: string
  duration: number
  delay: number
  opacity: number
}

const emptySubscribe = () => () => {}

function useClientOnly() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false)
}

function useFireParticles(count: number) {
  const isClient = useClientOnly()

  return useMemo(() => {
    if (!isClient) return []
    const colors = ['#ef4444', '#f97316', '#f59e0b', '#fb923c']
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${((i * 17 + 7) % 100)}%`,
      size: 2 + (i % 4),
      color: colors[i % colors.length],
      duration: 5 + (i % 10),
      delay: i % 8,
      opacity: 0.15 + (i % 5) * 0.05,
    }))
  }, [isClient, count])
}

const badgeVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
} as const

const titleLetterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.2 + i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
} as const

export default function HeroSection() {
  const particles = useFireParticles(18)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 30%, rgba(239,68,68,0.1) 0%, rgba(249,115,22,0.04) 40%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 20% 80%, rgba(6,182,212,0.04) 0%, transparent 50%),
          radial-gradient(ellipse 40% 30% at 80% 60%, rgba(249,115,22,0.05) 0%, transparent 50%),
          linear-gradient(180deg, #0d1117 0%, #0b1120 30%, #101828 60%, #0d1117 100%)
        `,
      }}
    >
      {/* Subtle mesh pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239,68,68,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239,68,68,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Parallax gradient orbs - respond to mouse */}
      <div
        className="absolute pointer-events-none transition-transform duration-[2000ms] ease-out"
        style={{
          width: '600px',
          height: '600px',
          top: '5%',
          right: '-10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)',
          animation: 'floatOrb1 25s ease-in-out infinite',
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
      />
      <div
        className="absolute pointer-events-none transition-transform duration-[2000ms] ease-out"
        style={{
          width: '450px',
          height: '450px',
          bottom: '5%',
          left: '-5%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
          animation: 'floatOrb2 30s ease-in-out infinite',
          transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
        }}
      />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 h-[1px] opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
            animation: 'scanLine 8s linear infinite',
          }}
        />
      </div>

      {/* Fire particles */}
      <div className="particle-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}40`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Corner targeting brackets - animated */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 left-6 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 20, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-0 left-0 h-[1px] bg-red-500/30"
          />
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 20, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute top-0 left-0 w-[1px] bg-red-500/30"
          />
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 20, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-0 right-0 h-[1px] bg-red-500/30"
          />
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 20, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute top-0 right-0 w-[1px] bg-red-500/30"
          />
        </div>
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-8 h-8 md:w-12 md:h-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 20, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-0 left-0 h-[1px] bg-red-500/30"
          />
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 20, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-0 left-0 w-[1px] bg-red-500/30"
          />
        </div>
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-8 h-8 md:w-12 md:h-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 20, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-0 right-0 h-[1px] bg-red-500/30"
          />
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 20, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-0 right-0 w-[1px] bg-red-500/30"
          />
        </div>
      </div>

      {/* ===== MAIN CONTENT: Two-column layout on desktop ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* LEFT: Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left min-w-0">
            {/* Status badge */}
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border border-red-500/20 bg-red-500/5 text-[10px] sm:text-xs font-semibold text-red-400 tracking-[0.15em] sm:tracking-[0.2em] animate-pulse-glow backdrop-blur-sm">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                NEXT GENERATION RESCUE SYSTEM
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              </span>
            </motion.div>

            {/* Animated title with spring physics */}
            <div className="flex items-center justify-center lg:justify-start mb-4 md:mb-5 flex-wrap">
              {titleLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={titleLetterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{
                    scale: 1.15,
                    transition: { type: 'spring', stiffness: 400 },
                  }}
                  className={`fire-text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none cursor-default select-none ${
                    letter === '-' ? 'mx-1 md:mx-2' : ''
                  }`}
                  style={{ textShadow: '0 0 40px rgba(239,68,68,0.1)' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Mode icons row (AIR, LAND, WATER) - inline with text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-4"
            >
              {modeIcons.map(({ Icon, label, bangla, borderColor, iconColor }, index) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border ${borderColor} bg-gradient-to-br backdrop-blur-md cursor-default`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase leading-tight">
                      {label}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-gray-600 leading-tight">{bangla}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Subtitle with staggered word animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xl mb-2 sm:mb-3 font-light tracking-wide"
            >
              Next Generation AI Fire Rescue Intelligence System
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="text-xs sm:text-sm md:text-base text-gray-500 max-w-md mb-6 sm:mb-8 md:mb-10"
            >
              ভূমি, জল ও আকাশপথে সক্ষম উন্নত কৃত্রিম বুদ্ধিমত্তা ভিত্তিক অগ্নি উদ্ধার ব্যবস্থা
            </motion.p>

            {/* CTA Buttons with enhanced hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(239,68,68,0.4), 0 0 80px rgba(239,68,68,0.15)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                onClick={() => {
                  document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="fire-gradient text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm md:text-base cursor-pointer flex items-center gap-2.5 shadow-lg shadow-red-500/20 relative overflow-hidden group w-full sm:w-auto justify-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Flame className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                <span className="relative z-10">Explore Technology</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(6,182,212,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-chatbot'))
                }}
                className="bg-white/5 border border-white/10 text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm md:text-base hover:border-cyan-500/30 transition-all cursor-pointer flex items-center gap-2.5 backdrop-blur-sm w-full sm:w-auto justify-center"
              >
                <Bot className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                Launch AI Assistant
              </motion.button>
            </motion.div>

            {/* Tech chips - shown inline on all screens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex items-center gap-2 mt-6 flex-wrap justify-center lg:justify-start"
            >
              {[
                { icon: Cpu, label: 'ESP32' },
                { icon: Radio, label: 'Ultrasonic' },
                { icon: Shield, label: 'AI Vision' },
              ].map(({ icon: Icon, label }) => (
                <motion.span
                  key={label}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(239,68,68,0.3)' }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-[10px] text-gray-500 font-mono cursor-default transition-colors hover:text-gray-400"
                >
                  <Icon className="w-2.5 h-2.5" />
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Drone Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.0, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex-shrink-0 relative flex flex-col items-center justify-center w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] xl:max-w-[500px]"
          >
            {/* Glow behind image */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(239,68,68,0.12) 0%, rgba(249,115,22,0.06) 40%, transparent 70%)',
              }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full aspect-[4/3]"
            >
              <Image
                src="/drone.png"
                alt="FLAME-X AI Fire Rescue Drone"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(239,68,68,0.2)]"
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 440px, 500px"
              />
            </motion.div>

            {/* Inline stat badges below the image - always visible */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center gap-3 mt-4"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                <Flame className="w-3 h-3 text-red-400" />
                <span className="text-[10px] font-bold text-red-400 tracking-wider">AI POWERED</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <Bot className="w-3 h-3 text-cyan-400" />
                <span className="text-[10px] font-bold text-cyan-400 tracking-wider">SMART RESCUE</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stats area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-10 md:mt-14"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {stats.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {i > 0 && (
                  <div className="w-1 h-1 rounded-full bg-gray-700 mr-1 sm:mr-2" />
                )}
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wider text-gray-500 uppercase">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="flex flex-col items-center mt-6 sm:mt-8 gap-1"
          >
            <span className="text-[9px] sm:text-[10px] text-gray-600 tracking-widest uppercase font-mono">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-gray-600 cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

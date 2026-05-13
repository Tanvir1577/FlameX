'use client'

import { useMemo, useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, ArrowRight } from 'lucide-react'

interface VisionParticle {
  id: number
  left: string
  backgroundColor: string
  animationDuration: string
  animationDelay: string
  width: string
  height: string
}

const emptySubscribe = () => () => {}

function useClientOnly() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false)
}

function useVisionParticles(count: number) {
  const isClient = useClientOnly()

  return useMemo(() => {
    if (!isClient) return []
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${((i * 13 + 11) % 80) + 10}%`,
      backgroundColor:
        i % 2 === 0
          ? `rgba(255, 68, 34, ${0.3 + (i % 5) * 0.08})`
          : `rgba(0, 229, 255, ${0.2 + (i % 5) * 0.08})`,
      animationDuration: `${8 + (i % 10)}s`,
      animationDelay: `${i % 5}s`,
      width: `${2 + (i % 3)}px`,
      height: `${2 + (i % 3)}px`,
    }))
  }, [isClient, count])
}

export default function VisionSection() {
  const particles = useVisionParticles(12)

  return (
    <section id="vision" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 50% 30% at 80% 60%, rgba(6,182,212,0.03) 0%, transparent 50%),
          linear-gradient(180deg, #0d1117 0%, #0f1520 50%, #0d1117 100%)
        `,
      }}
    >
      {/* Section Divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,68,34,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,229,255,0.04)_0%,transparent_60%)]" />

      {/* Floating particles */}
      <div className="particle-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              backgroundColor: p.backgroundColor,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              width: p.width,
              height: p.height,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
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
            Our Vision
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 fire-text-gradient">
            আমাদের লক্ষ্য ও দৃষ্টিভঙ্গি
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">Our Mission &amp; Vision</p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative"
          >
            {/* Glowing orb behind card */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-fire-red/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fire-orange/8 rounded-full blur-[80px] pointer-events-none" />

            {/* Card */}
            <div
              className="relative glassmorphism rounded-2xl p-5 sm:p-8 md:p-10 card-lift h-full"
              style={{
                borderColor: 'rgba(255, 68, 34, 0.25)',
                background:
                  'linear-gradient(135deg, rgba(255,68,34,0.08) 0%, rgba(17,17,17,0.7) 40%, rgba(17,17,17,0.7) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,68,34,0.2), rgba(255,136,0,0.1))',
                    border: '1px solid rgba(255,68,34,0.3)',
                    boxShadow: '0 0 30px rgba(255,68,34,0.15)',
                  }}
                >
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-fire-red" />
                </div>
              </div>

              {/* Label */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-fire-red/10 text-fire-red border border-fire-red/20">
                OUR MISSION
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                Create safer cities using AI-powered emergency response technology.
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                We believe that every second counts in an emergency. Our mission is to deploy
                intelligent systems that respond faster, smarter, and safer than ever before.
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-2 text-fire-red group cursor-pointer">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative corner lines */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-fire-red/20 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-fire-red/20 rounded-bl-lg" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
            className="relative"
          >
            {/* Glowing orb behind card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-ai/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-ai/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Card */}
            <div
              className="relative glassmorphism rounded-2xl p-5 sm:p-8 md:p-10 card-lift h-full"
              style={{
                borderColor: 'rgba(0, 229, 255, 0.2)',
                background:
                  'linear-gradient(135deg, rgba(0,229,255,0.06) 0%, rgba(17,17,17,0.7) 40%, rgba(17,17,17,0.7) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,229,255,0.2), rgba(0,184,212,0.1))',
                    border: '1px solid rgba(0,229,255,0.3)',
                    boxShadow: '0 0 30px rgba(0,229,255,0.12)',
                  }}
                >
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-ai" />
                </div>
              </div>

              {/* Label */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-cyan-ai/10 text-cyan-ai border border-cyan-ai/20">
                OUR VISION
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                Reduce human loss and improve rescue efficiency worldwide.
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Our vision is a world where no life is lost to fire due to slow response. Through
                AI, autonomous navigation, and smart suppression, we&apos;re building the future of
                emergency response.
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-2 text-cyan-ai group cursor-pointer">
                <span className="text-sm font-semibold">Our Technology</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative corner lines */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-ai/20 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-ai/20 rounded-bl-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

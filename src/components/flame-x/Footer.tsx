'use client'

import { motion } from 'framer-motion'
import { Flame, Mail, Phone, MapPin, Hash } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Emergency', href: '#emergency' },
  { label: 'Data Hub', href: '#data-hub' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="relative mt-auto" style={{
      background: `
        radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,68,68,0.04) 0%, transparent 60%),
        linear-gradient(180deg, #0d1117 0%, #080c14 100%)
      `,
    }}>
      {/* Section Divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6 text-red-500" />
                <span className="fire-text-gradient text-2xl font-black tracking-wider">
                  FLAME-X
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Next Generation AI Fire Rescue Intelligence System
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                A project by Hazi Moqbul Purkakayastha High School
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px w-8 bg-fire-red/30" />
                <span className="text-[10px] text-fire-red/50 font-semibold tracking-[0.2em] uppercase">
                  Built for Humanity
                </span>
                <div className="h-px w-8 bg-fire-red/30" />
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200 cursor-pointer flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: School Info with Logo */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/school-logo.png"
                    alt="HMP High School Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                    Our School
                  </h4>
                  <p className="text-gray-500 text-[10px]">HMP High School</p>
                </div>
              </div>
              <h5 className="text-gray-200 font-semibold text-sm mb-4">
                Hazi Moqbul Purkakayastha High School
              </h5>
              <ul className="space-y-2.5">
                <li>
                  <span className="text-gray-400 text-sm flex items-center gap-3">
                    <MapPin className="w-3.5 h-3.5 text-red-500/50 shrink-0" />
                    Sunamganj Sadar, Sunamganj
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 text-sm flex items-center gap-3">
                    <Hash className="w-3.5 h-3.5 text-red-500/50 shrink-0" />
                    EIIN: 130025
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 text-sm flex items-center gap-3">
                    <Hash className="w-3.5 h-3.5 text-red-500/50 shrink-0" />
                    School Code: 2510
                  </span>
                </li>
                <li>
                  <a
                    href="tel:01309130025"
                    className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200 flex items-center gap-3"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500/50 shrink-0" />
                    01309130025
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hmhmp130025@gmail.com"
                    className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200 flex items-center gap-3 break-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-500/50 shrink-0" />
                    hmhmp130025@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>&copy; 2026 FLAME-X. All rights reserved.</p>
            <p className="text-fire-red/40 font-semibold tracking-wider">Built for Humanity</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Emergency', href: '#emergency' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)

    const sections = navLinks.map((link) => link.href.replace('#', ''))
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) {
          setActiveSection(sections[i])
          return
        }
      }
    }
    setActiveSection('')
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(13,17,23,0.92)] backdrop-blur-xl border-b border-white/[0.03] shadow-[0_4px_30px_rgba(0,0,0,0.3)] rounded-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Flame className="w-6 h-6 text-red-500" />
            </motion.div>
            <span className="fire-text-gradient text-xl font-black tracking-wider">
              FLAME-X
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer ${
                    isActive
                      ? 'text-red-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-red-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection('#emergency')}
              className="fire-gradient text-white font-semibold rounded-full px-5 py-2 text-sm hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-shadow cursor-pointer"
            >
              <Flame className="w-4 h-4 mr-1.5" />
              Emergency
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[rgba(13,17,23,0.95)] backdrop-blur-xl border-l border-white/5 w-[280px]"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-red-500" />
                    <span className="fire-text-gradient text-lg font-black tracking-wider">
                      FLAME-X
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-6 px-4">
                  {navLinks.map((link, index) => {
                    const sectionId = link.href.replace('#', '')
                    const isActive = activeSection === sectionId
                    return (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={() => scrollToSection(link.href)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? 'bg-red-500' : 'bg-gray-600'
                          }`}
                        />
                        {link.label}
                      </motion.button>
                    )
                  })}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <Button
                      onClick={() => scrollToSection('#emergency')}
                      className="w-full fire-gradient text-white font-semibold rounded-full py-3 text-sm hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-shadow cursor-pointer"
                    >
                      <Flame className="w-4 h-4 mr-1.5" />
                      Emergency
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

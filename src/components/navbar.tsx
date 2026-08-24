'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'motion/react'
import { MessageCircle, Menu, X, Phone, ChevronRight, Mountain } from 'lucide-react'
import { PROPERTY_INFO } from '@/content/property'

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  const navLinks = [
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Rooms & Baths', href: '/rooms' },
    { label: 'Rates & Pricing', href: '/rates' },
    { label: 'Occasions', href: '/occasions' },
    { label: 'Location & Map', href: '/location' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-cream/98 backdrop-blur-xl border-b border-sand shadow-warm-md py-3'
          : 'bg-cream/90 backdrop-blur-md border-b border-sand/60 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Script & Subtitle */}
        <Link
          href="/"
          className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2.5 group focus:outline-none"
          aria-label="Santiagos Resort Homepage"
        >
          <span className="font-script text-2xl sm:text-4xl text-terra-dark group-hover:text-terra transition-colors drop-shadow-xs leading-tight">
            Santiago&apos;s
          </span>
          <span className="text-[9px] sm:text-[11px] font-sans font-bold tracking-wider sm:tracking-widest text-ink-muted uppercase sm:border-l sm:border-sand-dark/40 sm:pl-2.5 leading-none">
            Private Resort • Alfonso
          </span>
        </Link>

        {/* Desktop Navigation Links with Seamless Floating Active Pill */}
        <nav
          className="hidden lg:flex items-center gap-1 bg-sand/30 p-1.5 rounded-full border border-sand/70"
          aria-label="Main Navigation"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const isHovered = hoveredPath === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                className={`relative isolate px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-terra-dark font-extrabold'
                    : 'text-ink/80 hover:text-ink'
                }`}
              >
                {/* Active Indicator Spring Pill */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-warm-sm border border-sand/50 z-0"
                    transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                  />
                )}

                {/* Hover Indicator */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    className="absolute inset-0 bg-sand/40 rounded-full z-0"
                    transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
                  />
                )}

                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Direct Airbnb Link */}
          <a
            href={PROPERTY_INFO.contacts.airbnb}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-ink-muted hover:text-[#FF385C] hover:bg-sand/40 rounded-full transition-all group"
            title="View Official Airbnb Listing"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF385C] inline-block group-hover:scale-125 transition-transform" />
            <span>Airbnb Listing</span>
          </a>

          {/* Animated WhatsApp Button */}
          <a
            href={PROPERTY_INFO.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold rounded-full shadow-warm-sm hover:shadow-warm-md active:scale-95 transition-all duration-200 group overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
            <span>Inquire Dates</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PROPERTY_INFO.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-3.5 py-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-xs active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Inquire</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-ink hover:text-terra rounded-xl bg-sand/40 hover:bg-sand/60 focus:outline-none transition-colors active:scale-95"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden bg-cream border-b border-sand px-4 py-6 space-y-4 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-sand/40 rounded-xl text-xs text-terra-dark font-semibold">
              <Mountain className="w-4 h-4 text-terra shrink-0" />
              <span>Alfonso, Tagaytay Highlands • 40 Max Guests</span>
            </div>

            <nav className="space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-semibold transition-colors active:scale-98 ${
                      isActive
                        ? 'bg-terra text-white font-bold shadow-xs'
                        : 'text-ink hover:bg-sand/40 hover:text-terra'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </Link>
                )
              })}
            </nav>

            <div className="pt-2 border-t border-sand grid grid-cols-2 gap-2 text-xs font-bold">
              <a
                href={PROPERTY_INFO.contacts.phone1.tel}
                className="p-3 bg-sand/40 hover:bg-sand/60 rounded-xl text-ink flex items-center justify-center gap-1.5 transition-colors active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-terra" />
                <span>Call Smart</span>
              </a>
              <a
                href={PROPERTY_INFO.contacts.phone2.tel}
                className="p-3 bg-sand/40 hover:bg-sand/60 rounded-xl text-ink flex items-center justify-center gap-1.5 transition-colors active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-terra" />
                <span>Call Globe</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

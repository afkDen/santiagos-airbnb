'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { PROPERTY_INFO } from '@/content/property'

const NAV_LINKS = [
  { label: 'Amenities', href: '/amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Rooms & Baths', href: '/rooms' },
  { label: 'Rates & Pricing', href: '/rates' },
  { label: 'Occasions', href: '/occasions' },
  { label: 'Location & Map', href: '/location' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMobileMenuOpen(false)
      toggleRef.current?.focus()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-40 h-[72px] border-b border-sand/80 bg-cream/95 backdrop-blur-lg">
      <div className="site-container flex h-full items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Santiagos Resort home">
          <span className="font-script text-3xl leading-none text-terra-dark sm:text-4xl">Santiago&apos;s</span>
          <span className="hidden border-l border-sand-dark/60 pl-3 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted sm:block">
            Private Resort<br />Alfonso
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-lg px-2.5 py-2 text-[11px] font-bold transition-[background-color,color,transform] duration-200 ${
                  active ? 'bg-sand/70 text-terra-dark' : 'text-ink-muted hover:bg-sand/40 hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PROPERTY_INFO.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-xs font-bold text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-whatsapp-hover hover:shadow-warm-md sm:px-5"
          >
            <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
            <span className="hidden sm:inline">Check dates</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-sand bg-cream text-ink transition-[background-color,color,transform] duration-200 hover:bg-sand/40 hover:text-terra xl:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-ink/45 xl:hidden"
            />
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateX(100%)' }}
              animate={{ opacity: 1, transform: 'translateX(0)' }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateX(100%)' }}
              transition={{ duration: reduceMotion ? 0.18 : 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed bottom-0 right-0 top-[72px] z-50 flex w-[min(92vw,420px)] flex-col overflow-y-auto border-l border-sand bg-cream p-5 shadow-warm-xl xl:hidden"
              data-motion="spatial"
            >
              <nav className="grid gap-1" aria-label="Mobile navigation links">
                {NAV_LINKS.map((link, index) => {
                  const active = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-[background-color,color,transform] duration-200 ${
                        active ? 'bg-terra text-white' : 'text-ink hover:bg-sand/50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-auto space-y-4 border-t border-sand pt-5">
                <p className="text-sm leading-6 text-ink-muted">
                  Planning for a large group? Call or message us directly for date availability.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a href={PROPERTY_INFO.contacts.phone1.tel} className="button-secondary px-4 text-xs">
                    <Phone className="h-4 w-4 text-terra" aria-hidden="true" />
                    Call
                  </a>
                  <a
                    href={PROPERTY_INFO.contacts.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-xs font-bold text-white"
                  >
                    <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

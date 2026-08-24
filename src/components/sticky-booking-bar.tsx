'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { PROPERTY_INFO } from '@/content/property'
import { MessageCircle, Phone, Sparkles } from 'lucide-react'

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show bar once scrolled past 400px
      const nextVisible = window.scrollY > 400
      setIsVisible((prev) => (prev !== nextVisible ? nextVisible : prev))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          aria-label="Quick Booking and Contact Bar"
          className="fixed bottom-3 left-3 right-3 sm:bottom-6 sm:right-6 sm:left-auto z-40 max-w-lg w-auto pointer-events-auto"
        >
          <div className="bg-ink/95 backdrop-blur-xl border border-gold/40 text-cream p-2.5 sm:p-4 rounded-full sm:rounded-3xl shadow-2xl flex items-center justify-between gap-2.5 sm:gap-4">
            {/* Desktop Info Left */}
            <div className="hidden sm:block space-y-0.5 pl-2">
              <div className="flex items-center gap-1.5 text-gold-light text-xs font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-forest"></span>
                </span>
                <span>Direct Inquiries Open</span>
              </div>
              <div className="text-[11px] text-sand-light/80 font-sans">
                From ₱25k/night • 40 Guests Max
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <a
                href={PROPERTY_INFO.contacts.phone1.tel}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-cream/15 hover:bg-cream/25 border border-sand/30 text-cream rounded-full text-xs font-semibold transition-all active:scale-95 shrink-0"
                aria-label="Call Primary Phone"
              >
                <Phone className="w-3.5 h-3.5 text-gold-light" />
                <span className="inline sm:hidden">Call</span>
              </a>

              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-md active:scale-95 transition-all group"
              >
                <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { PROPERTY_INFO } from '@/content/property'
import { MessageCircle, Phone, Sparkles, ShieldCheck } from 'lucide-react'

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show bar once scrolled past 600px
      if (window.scrollY > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-lg w-auto"
        >
          <div className="bg-ink/95 backdrop-blur-xl border border-gold/40 text-cream p-3.5 sm:p-4 rounded-3xl shadow-2xl flex items-center justify-between gap-4">
            <div className="hidden sm:block space-y-0.5 pl-1">
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

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <a
                href={PROPERTY_INFO.contacts.phone1.tel}
                className="p-3 bg-cream/10 hover:bg-cream/20 border border-sand/30 text-cream rounded-full transition-all active:scale-95 flex items-center justify-center shrink-0"
                aria-label="Call Santiagos Resort"
              >
                <Phone className="w-4 h-4 text-gold-light" />
              </a>

              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-md active:scale-95 transition-all group"
              >
                <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

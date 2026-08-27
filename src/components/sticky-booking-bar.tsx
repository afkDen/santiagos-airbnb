'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { PROPERTY_INFO } from '@/content/property'
import { MessageCircle, Phone } from 'lucide-react'

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const nextVisible = latest > 400
    setIsVisible((previous) => (previous === nextVisible ? previous : nextVisible))
  })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(100%)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(100%)' }}
          transition={{ duration: reduceMotion ? 0.18 : 0.26, ease: [0.23, 1, 0.32, 1] }}
          aria-label="Quick Booking and Contact Bar"
          className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] left-3 right-3 sm:bottom-6 sm:right-6 sm:left-auto z-40 max-w-lg w-auto pointer-events-auto"
        >
          <div className="bg-ink/95 backdrop-blur-2xl border border-gold/40 text-cream p-2.5 sm:p-4 rounded-full sm:rounded-3xl shadow-2xl flex items-center justify-between gap-2.5 sm:gap-4">
            {/* Desktop Info Left */}
            <div className="hidden sm:block space-y-0.5 pl-2">
              <div className="flex items-center gap-1.5 text-gold-light text-xs font-bold">
                <span>Direct Inquiries Open</span>
              </div>
              <div className="text-[11px] text-sand-light/80 font-sans">
                From ₱25k/night • 40 Guests Max
              </div>
            </div>

            {/* Action Buttons with 44px Touch Targets */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <a
                href={PROPERTY_INFO.contacts.phone1.tel}
                className="flex items-center justify-center min-h-[44px] min-w-[44px] sm:min-w-0 px-4 py-2.5 bg-cream/15 hover:bg-cream/25 border border-sand/30 text-cream rounded-full text-xs font-semibold transition-[background-color,border-color,color,box-shadow,opacity,transform] active:scale-95 shrink-0"
                aria-label="Call Primary Phone"
              >
                <Phone className="w-3.5 h-3.5 text-gold-light" />
                <span className="ml-1.5">Call</span>
              </a>

              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center min-h-[44px] gap-2 px-5 py-2.5 sm:py-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-md active:scale-95 transition-[background-color,border-color,color,box-shadow,opacity,transform] group"
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

'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Phone, Facebook, Instagram } from 'lucide-react'
import { PROPERTY_INFO } from '@/content/property'

export function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside
      aria-label="Quick Contact and Booking Bar"
      className={`fixed z-50 bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-12 md:translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {/* Mobile Full-Width Bar */}
      <div className="md:hidden bg-ink/95 backdrop-blur-lg border-t border-sand/30 px-4 py-2.5 flex items-center justify-between shadow-2xl safe-area-pb">
        <div className="flex items-center gap-3 text-xs font-semibold text-cream">
          <a
            href={PROPERTY_INFO.contacts.phone1.tel}
            className="flex items-center gap-1.5 px-3 py-2 bg-cream/15 hover:bg-cream/25 rounded-full text-cream active:scale-95 transition-all"
            aria-label="Call primary phone"
          >
            <Phone className="w-3.5 h-3.5 text-gold-light" />
            <span>Call</span>
          </a>
          <a
            href={PROPERTY_INFO.contacts.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-cream/15 hover:bg-cream/25 rounded-full text-cream active:scale-95 transition-all"
            aria-label="Facebook Page"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
        </div>

        <a
          href={PROPERTY_INFO.contacts.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold rounded-full shadow-lg animate-whatsapp-pulse active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Inquiry</span>
        </a>
      </div>

      {/* Desktop Floating Pill Cluster */}
      <div className="hidden md:flex items-center gap-2.5 p-2 bg-ink/90 backdrop-blur-xl border border-sand/30 rounded-full shadow-warm-xl">
        <a
          href={PROPERTY_INFO.contacts.phone1.tel}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-cream hover:text-gold-light hover:bg-cream/10 rounded-full transition-colors"
          title="Call 0917 800 5320"
        >
          <Phone className="w-3.5 h-3.5 text-gold" />
          <span>0917 800 5320</span>
        </a>

        <div className="w-[1px] h-4 bg-sand/30" />

        <a
          href={PROPERTY_INFO.contacts.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-sand-light hover:text-cream hover:bg-cream/10 rounded-full transition-colors"
          title="Facebook Page & Messenger"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>

        <a
          href={PROPERTY_INFO.contacts.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-sand-light hover:text-cream hover:bg-cream/10 rounded-full transition-colors"
          title="Instagram @santiagos.to"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>

        <a
          href={PROPERTY_INFO.contacts.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold rounded-full shadow-md animate-whatsapp-pulse active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Direct Booking Inquiry</span>
        </a>
      </div>
    </aside>
  )
}

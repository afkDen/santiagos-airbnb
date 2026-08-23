'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { OCCASIONS_DATA } from '@/content/occasions'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'
import { StickyBookingBar } from '@/components/sticky-booking-bar'
import { buildWhatsAppLink } from '@/lib/whatsapp-link'
import {
  PartyPopper,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Clock,
  Maximize2,
  X,
} from 'lucide-react'

export default function OccasionsPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; label: string } | null>(null)

  const sampleItinerary = [
    { time: '3:00 PM', event: 'Check-in & Welcome Pool Dip', desc: 'Settle into air-conditioned quarters and cool off in the private swimming pool.' },
    { time: '6:00 PM', event: 'Al Fresco Sunset Dinner', desc: 'Cook group dinner in the full chef kitchen and gather around the 10-seater banquet dining table.' },
    { time: '8:00 PM', event: 'Videoke & Arcade Battles', desc: 'Sing in the soundproofed videoke lounge and play Kangaroo pool tournaments.' },
    { time: '10:30 PM', event: 'Fireside Bonfire & Cocktails', desc: 'Gather around the sunken bonfire pit in the crisp 18°C mountain air.' },
    { time: '9:00 AM Next Day', event: 'Morning Coffee & Basketball Shootouts', desc: 'Enjoy fresh Cavite coffee on the breezy veranda and shoot hoops on the half-court.' },
  ]

  return (
    <div className="py-12 md:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/60 text-terra-dark text-xs font-bold uppercase tracking-wider">
          <PartyPopper className="w-4 h-4 text-terra" />
          <span>Tailored Setups for Every Group Event</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Celebrate Big Moments at <span className="text-terra">Santiagos</span>
        </h1>

        <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
          From milestone 25th and 50th birthdays to all-night barkada gaming sessions and executive team retreats, discover why Santiagos Resort is the premier event venue in Alfonso.
        </p>
      </motion.div>

      {/* Occasion Cards */}
      <div className="space-y-12">
        {OCCASIONS_DATA.map((pkg, idx) => {
          const isReversed = idx % 2 === 1
          const whatsappUrl = buildWhatsAppLink({ occasion: pkg.title })
          const photoKey =
            pkg.id === 'birthday'
              ? 'din1'
              : pkg.id === 'barkada'
              ? 'bill2'
              : pkg.id === 'family'
              ? 'out1'
              : 'bbl1'

          return (
            <motion.section
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className={`bg-white rounded-3xl overflow-hidden border border-sand shadow-warm-md hover:shadow-warm-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                isReversed ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Photo Showcase with Lightbox Trigger */}
              <div
                onClick={() => setLightboxImage({ src: getLocalImageUrl(photoKey), label: pkg.title })}
                className={`lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-sm border border-sand bg-sand/20 cursor-pointer group ${
                  isReversed ? 'lg:col-start-7' : ''
                }`}
              >
                <Image
                  src={getLocalImageUrl(photoKey)}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-ink/80 backdrop-blur-md rounded-full text-gold-light text-xs font-bold shadow-sm">
                  {pkg.tagline}
                </div>
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-gold-light" />
                </div>
              </div>

              {/* Text Description & Bullets */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  isReversed ? 'lg:col-start-1' : ''
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-terra">
                    {pkg.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-ink mt-1">
                    {pkg.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                  {pkg.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-sand/60">
                  <h4 className="text-xs font-bold text-ink uppercase tracking-wider">
                    Why It Works For This Occasion:
                  </h4>
                  {pkg.highlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-soft">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-sm active:scale-95 transition-all group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                    <span>Inquire for {pkg.title.split('&')[0].trim()}</span>
                  </a>
                  <Link
                    href="/rates"
                    className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-cream hover:bg-cream-dark border border-sand text-ink text-xs sm:text-sm font-semibold rounded-full active:scale-95 transition-all"
                  >
                    <span>Check Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-terra" />
                  </Link>
                </div>
              </div>
            </motion.section>
          )
        })}
      </div>

      {/* Suggested 24-Hour Stay Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-6 sm:p-10 space-y-6"
      >
        <div className="space-y-1 border-b border-sand pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terra">
            <Clock className="w-3.5 h-3.5 text-terra" />
            <span>Sample Group Itinerary</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            A Typical 24-Hour Celebration at Santiagos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {sampleItinerary.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-sand/70 space-y-2 flex flex-col justify-between shadow-xs hover:shadow-warm-sm hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="font-display text-sm font-bold text-terra-dark tabular-nums">{item.time}</div>
                <h4 className="font-serif text-sm font-bold text-ink mt-0.5">{item.event}</h4>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed font-sans pt-1 border-t border-sand/40">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in-0 duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-ink-soft rounded-3xl overflow-hidden border border-sand/30 shadow-2xl p-4 sm:p-6 space-y-3 animate-in zoom-in-95 ease-[cubic-bezier(0.23,1,0.32,1)] duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-cream px-2">
              <h4 className="text-sm sm:text-base font-semibold">{lightboxImage.label}</h4>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-2 text-sand-light hover:text-white rounded-full bg-cream/10 hover:bg-cream/20 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center">
              <Image src={lightboxImage.src} alt={lightboxImage.label} fill sizes="95vw" className="object-contain" />
            </div>
            <div className="px-2 text-xs text-sand-light/70 font-sans">
              Press Escape to close
            </div>
          </div>
        </div>
      )}

      {/* Floating Sticky Booking Quick-Action Pill */}
      <StickyBookingBar />
    </div>
  )
}

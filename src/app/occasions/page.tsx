'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { OCCASIONS_DATA } from '@/content/occasions'
import { getLocalImageUrl } from '@/content/gallery'
import { buildWhatsAppLink } from '@/lib/whatsapp-link'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { PageIntro } from '@/components/page-intro'
import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Clock,
  Maximize2,
} from 'lucide-react'

export default function OccasionsPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; label: string } | null>(null)

  const sampleItinerary = [
    { time: '3:00 PM', event: 'Check-in & Welcome Pool Dip', desc: 'Settle into air-conditioned rooms and cool off in the private swimming pool.' },
    { time: '6:00 PM', event: 'Al Fresco Sunset Dinner', desc: 'Cook group dinner in the full chef kitchen and gather around the solid acacia banquet dining table or covered al fresco veranda.' },
    { time: '8:00 PM', event: 'Videoke & Arcade Battles', desc: 'Sing in the soundproofed videoke lounge and play Kangaroo pool tournaments.' },
    { time: '10:30 PM', event: 'Fireside Bonfire & Cocktails', desc: 'Gather around the sunken bonfire pit in the crisp 18°C mountain air.' },
    { time: '9:00 AM Next Day', event: 'Morning Coffee & Basketball Shootouts', desc: 'Enjoy fresh Cavite coffee on the breezy veranda and shoot hoops on the half-court.' },
  ]

  return (
    <div className="page-shell">
      <PageIntro
        meta="Families, barkadas, celebrations, and team stays"
        title="A private place for your people."
        description="Choose the kind of gathering you are planning and see which spaces, activities, and setup will help."
      />

      {/* Occasion Cards */}
      <div className="space-y-8 sm:space-y-12">
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
              className={`bg-white rounded-3xl overflow-hidden border border-sand shadow-warm-md hover:shadow-warm-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-5 sm:p-10 ${
                isReversed ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Photo Showcase with Lightbox Trigger */}
              <button
                type="button"
                onClick={() => setLightboxImage({ src: getLocalImageUrl(photoKey), label: pkg.title })}
                aria-label={`Open photo for ${pkg.title}`}
                className={`media-button lg:col-span-6 relative h-56 sm:h-96 bg-sand/20 group ${
                  isReversed ? 'lg:col-start-7' : ''
                }`}
              >
                <Image
                  src={getLocalImageUrl(photoKey)}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="media-image object-cover"
                />
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-gold-light" />
                </div>
              </button>

              {/* Text Description & Bullets */}
              <div
                className={`lg:col-span-6 space-y-4 sm:space-y-5 ${
                  isReversed ? 'lg:col-start-1' : ''
                }`}
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-0.5">
                    {pkg.title}
                  </h2>
                  <p className="text-sm font-semibold text-terra-dark">{pkg.subtitle}</p>
                </div>

                <p className="text-xs sm:text-base text-ink-muted leading-relaxed font-sans">
                  {pkg.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-sand/60">
                  <h4 className="text-xs font-bold text-ink tracking-normal">
                    Why It Works For This Occasion:
                  </h4>
                  {pkg.highlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-2 text-xs sm:text-sm text-ink-soft">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-sm active:scale-95 transition-[background-color,box-shadow,transform] duration-200 group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                    <span>Inquire for {pkg.title.split('&')[0].trim()}</span>
                  </a>
                  <Link
                    href="/rates"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 bg-cream hover:bg-cream-dark border border-sand text-ink text-xs sm:text-sm font-semibold rounded-full active:scale-95 transition-[background-color,border-color,transform] duration-200"
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

      {/* Suggested 24-Hour Event Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-5 sm:p-10 space-y-6"
      >
        <div className="max-w-xl space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-normal text-terra">
            <Clock className="w-3.5 h-3.5 text-terra" />
            <span>Curated Group Schedule</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            A Sample 24-Hour Stay Timeline
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted font-sans">
            How a typical weekend birthday or barkada retreat flows smoothly across our facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {sampleItinerary.map((item) => (
            <div
              key={item.time}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-sand space-y-1.5 shadow-warm-sm"
            >
              <span className="text-[11px] font-bold text-terra bg-terra/10 px-2 py-0.5 rounded-full inline-block">
                {item.time}
              </span>
              <h4 className="font-serif text-sm font-bold text-ink pt-1">{item.event}</h4>
              <p className="text-xs text-ink-muted leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Portal Lightbox */}
      <FullscreenLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage ? lightboxImage.src : null}
        title={lightboxImage?.label}
        category="Event Setup"
      />
    </div>
  )
}

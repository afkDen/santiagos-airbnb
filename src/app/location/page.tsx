'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { DirectionsStepper } from '@/components/directions-stepper'
import { StickyBookingBar } from '@/components/sticky-booking-bar'
import { TRANSIT_INFO } from '@/content/directions'
import { NEARBY_ATTRACTIONS, LOCAL_TRAVEL_TIPS, MANILA_DISTANCES } from '@/content/attractions'
import { PROPERTY_INFO } from '@/content/property'
import {
  MapPin,
  Navigation,
  Compass,
  Bus,
  Clock,
  ExternalLink,
  ShoppingBag,
  ThermometerSnowflake,
  Play,
  Car,
  Maximize2,
  X,
} from 'lucide-react'

export default function LocationPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; label: string } | null>(null)

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
          <Compass className="w-4 h-4 text-terra" />
          <span>Alfonso, Cavite • 15 Mins Past Twin Lakes Tagaytay</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Getting to <span className="text-terra">Santiagos Resort</span>
        </h1>

        <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
          Conveniently located in the cool highlands of Alfonso, Cavite — approximately 90 minutes from Metro Manila via SLEX / CAVITEX and STAR Tollway.
        </p>
      </motion.div>

      {/* Manila Distance & Drive Times Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-warm-sm space-y-4"
      >
        <div className="flex items-center gap-2.5 border-b border-sand pb-3">
          <Car className="w-5 h-5 text-terra" />
          <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">
            Estimated Travel Times from Metro Manila
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {MANILA_DISTANCES.map((d) => (
            <div key={d.origin} className="p-4 bg-cream/40 rounded-2xl border border-sand/70 space-y-1 hover:border-terra/40 transition-colors">
              <div className="text-xs font-bold text-ink">{d.origin}</div>
              <div className="font-display text-lg font-bold text-terra tabular-nums">{d.time}</div>
              <div className="text-[11px] text-ink-muted">{d.distance}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Map Embed & Quick Navigation Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Google Maps Iframe Embed */}
        <div className="lg:col-span-8 bg-white p-3 rounded-3xl border border-sand shadow-warm-md overflow-hidden">
          <div className="relative h-80 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden">
            <iframe
              src={PROPERTY_INFO.contacts.googleMapsEmbed}
              title="Santiagos Private Resort Google Map Pin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Quick Route Actions */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-warm-md space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-terra">Address & Navigation</span>
            <h3 className="font-serif text-xl font-bold text-ink">{PROPERTY_INFO.address.full}</h3>
            <p className="text-xs text-ink-muted leading-relaxed font-sans">
              Elevation ~600m above sea level (18–24°C year-round cool breeze).
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={PROPERTY_INFO.contacts.waze}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#33CCFF] hover:bg-[#2bb8e6] text-white font-bold text-sm rounded-full shadow-sm active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4 fill-white" />
              <span>Open in Waze App</span>
            </a>

            <a
              href={PROPERTY_INFO.contacts.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-cream hover:bg-cream-dark border border-sand text-ink font-bold text-sm rounded-full active:scale-95 transition-all"
            >
              <MapPin className="w-4 h-4 text-terra" />
              <span>Open Google Maps Pin</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-muted" />
            </a>
          </div>

          <div className="p-4 bg-sand/30 rounded-2xl border border-sand text-xs text-ink-muted space-y-1 font-sans">
            <p className="font-bold text-ink">Free On-Site Gated Parking:</p>
            <p>Accommodates 3+ large vans/SUVs safely within the gated compound.</p>
          </div>
        </div>
      </motion.div>

      {/* Step-by-Step Directions Stepper Component */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <DirectionsStepper />
      </motion.div>

      {/* Google Drive Video Embeds & Directions Poster */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-6 sm:p-10 space-y-8 shadow-warm-sm"
      >
        <div className="max-w-2xl space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terra">
            <Play className="w-3.5 h-3.5 fill-terra text-terra" />
            <span>Visual Navigation Aids</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Watch the Route & Property Video Guides
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted font-sans">
            Follow our recorded dashcam navigation drive from Twin Lakes Tagaytay directly to the resort gate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Navigation Drive Video */}
          <div className="bg-white p-4 rounded-2xl border border-sand shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-base font-bold text-ink">
                Dashcam Navigation Drive Video
              </h4>
              <span className="text-[11px] font-semibold text-terra bg-terra/10 px-2 py-0.5 rounded-full">
                Twin Lakes → Resort Gate
              </span>
            </div>
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe
                src="https://drive.google.com/file/d/1ZWg_wszkmugcqoqiRSygm-rgKSxudyLm/preview"
                title="Santiagos Resort Navigation Drive Video"
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>
            <p className="text-xs text-ink-muted font-sans">
              Shows all key turns: Amuyong-Kaytitinga Road, 7-Eleven, and the Cell Repair Shop access turn.
            </p>
          </div>

          {/* Directions Poster Image */}
          <div className="bg-white p-4 rounded-2xl border border-sand shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-base font-bold text-ink">
                Official Directions Map Poster
              </h4>
              <a
                href="https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w2400"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-terra hover:underline flex items-center gap-1"
              >
                <span>View Full HD (2400px)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div
              onClick={() =>
                setLightboxImage({
                  src: 'https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w1600',
                  label: 'Official Directions Map Poster & Road Landmarks',
                })
              }
              className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-sand/20 border border-sand/50 shadow-inner cursor-pointer group"
            >
              <Image
                src="https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w1600"
                alt="Santiagos Resort Official Directions Poster and Landmark Map"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
              </div>
            </div>
            <p className="text-xs text-ink-muted font-sans">
              Save or screenshot this official road poster on your phone for offline navigation.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Public Commute Guide */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-6 sm:p-10 space-y-4"
      >
        <div className="flex items-center gap-2.5">
          <Bus className="w-5 h-5 text-terra" />
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
            {TRANSIT_INFO.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs sm:text-sm text-ink-muted">
          {TRANSIT_INFO.steps.map((s, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-sand space-y-2">
              <span className="font-bold text-terra">Step {i + 1}</span>
              <p className="leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Nearby Attractions Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="space-y-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-terra">Explore Alfonso & Tagaytay</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Popular Nearby Attractions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEARBY_ATTRACTIONS.map((attraction) => (
            <div
              key={attraction.name}
              onClick={() => setLightboxImage({ src: attraction.fallbackImage, label: attraction.name })}
              className="bg-white rounded-3xl overflow-hidden border border-sand shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="relative h-48 w-full bg-sand/20 overflow-hidden">
                <Image
                  src={attraction.fallbackImage}
                  alt={attraction.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-ink/80 backdrop-blur-md rounded-full text-gold-light text-[11px] font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{attraction.travelTime}</span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-ink">{attraction.name}</h4>
                  <p className="text-xs text-ink-muted leading-relaxed font-sans mt-1">
                    {attraction.highlights}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-sand/40">
                  {attraction.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold text-ink-muted bg-sand/40 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Practical Travel Tips */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {LOCAL_TRAVEL_TIPS.map((tip) => (
          <div key={tip.title} className="bg-cream-dark p-6 rounded-2xl border border-sand space-y-2 hover:shadow-warm-sm transition-shadow">
            <h4 className="font-serif text-lg font-bold text-ink flex items-center gap-2">
              {tip.title.includes('Grocery') ? (
                <ShoppingBag className="w-4 h-4 text-terra" />
              ) : (
                <ThermometerSnowflake className="w-4 h-4 text-terra" />
              )}
              <span>{tip.title}</span>
            </h4>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
              {tip.detail}
            </p>
          </div>
        ))}
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

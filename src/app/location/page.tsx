'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { DirectionsStepper } from '@/components/directions-stepper'
import { TRANSIT_INFO } from '@/content/directions'
import { NEARBY_ATTRACTIONS, LOCAL_TRAVEL_TIPS, MANILA_DISTANCES } from '@/content/attractions'
import { PROPERTY_INFO } from '@/content/property'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { PageIntro } from '@/components/page-intro'
import {
  MapPin,
  Navigation,
  Bus,
  Clock,
  ExternalLink,
  ShoppingBag,
  ThermometerSnowflake,
  Play,
  Car,
  Maximize2,
} from 'lucide-react'

export default function LocationPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; label: string } | null>(null)

  return (
    <div className="py-12 md:py-16 space-y-12 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageIntro
        meta="Kaytitinga II, Alfonso, Cavite"
        title="Plan the drive with confidence."
        description="Check estimated travel times, open the exact map pin, and follow the route guidance for your group."
      />

      {/* Manila Distance & Drive Times Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-white p-5 sm:p-8 rounded-3xl border border-sand shadow-warm-sm space-y-4"
      >
        <div className="flex items-center gap-2.5 border-b border-sand pb-3">
          <Car className="w-5 h-5 text-terra" />
          <h3 className="font-serif text-base sm:text-xl font-bold text-ink">
            Estimated Travel Times from Metro Manila
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {MANILA_DISTANCES.map((d) => (
            <div key={d.origin} className="p-3 sm:p-4 bg-cream/40 rounded-2xl border border-sand/70 space-y-0.5 sm:space-y-1 hover:border-terra/40 transition-colors">
              <div className="text-[11px] sm:text-xs font-bold text-ink truncate">{d.origin}</div>
              <div className="font-display text-base sm:text-lg font-bold text-terra tabular-nums">{d.time}</div>
              <div className="text-[10px] sm:text-[11px] text-ink-muted">{d.distance}</div>
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
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
      >
        {/* Google Maps Iframe Embed */}
        <div className="lg:col-span-8 bg-white p-2.5 sm:p-3 rounded-3xl border border-sand shadow-warm-md overflow-hidden">
          <div className="relative h-64 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden">
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
        <div className="lg:col-span-4 bg-white p-5 sm:p-8 rounded-3xl border border-sand shadow-warm-md space-y-4 sm:space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold tracking-normal text-terra">Address & Navigation</span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">{PROPERTY_INFO.address.full}</h3>
            <p className="text-xs text-ink-muted leading-relaxed font-sans">
              Elevation ~600m above sea level (18-24°C year-round cool breeze).
            </p>
          </div>

          <div className="space-y-2.5 pt-1">
            <a
              href={PROPERTY_INFO.contacts.waze}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#33CCFF] hover:bg-[#2bb8e6] text-white font-bold text-xs sm:text-sm rounded-full shadow-sm active:scale-95 transition-[background-color,border-color,color,box-shadow,opacity,transform]"
            >
              <Navigation className="w-4 h-4 fill-white" />
              <span>Open in Waze App</span>
            </a>

            <a
              href={PROPERTY_INFO.contacts.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-cream hover:bg-cream-dark border border-sand text-ink font-bold text-xs sm:text-sm rounded-full active:scale-95 transition-[background-color,border-color,color,box-shadow,opacity,transform]"
            >
              <MapPin className="w-4 h-4 text-terra" />
              <span>Open Google Maps Pin</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-muted" />
            </a>
          </div>

          <div className="p-3.5 sm:p-4 bg-sand/30 rounded-2xl border border-sand text-xs text-ink-muted space-y-1 font-sans">
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
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-5 sm:p-10 space-y-6 sm:space-y-8 shadow-warm-sm"
      >
        <div className="max-w-2xl space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-normal text-terra">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Navigation Drive Video */}
          <div className="bg-white p-4 rounded-2xl border border-sand shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-sm sm:text-base font-bold text-ink">
                Dashcam Navigation Drive Video
              </h4>
              <span className="text-[10px] sm:text-[11px] font-semibold text-terra bg-terra/10 px-2 py-0.5 rounded-full">
                Twin Lakes → Resort Gate
              </span>
            </div>
            <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden bg-black shadow-inner">
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
              <h4 className="font-serif text-sm sm:text-base font-bold text-ink">
                Official Directions Map Poster
              </h4>
              <a
                href="https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w2400"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-[11px] font-bold text-terra hover:underline flex items-center gap-1"
              >
                <span>Full HD (2400px)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <button
              type="button"
              onClick={() =>
                setLightboxImage({
                  src: 'https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w1600',
                  label: 'Official Directions Map Poster & Road Landmarks',
                })
              }
              className="media-button relative h-56 sm:h-72 w-full bg-sand/20 border border-sand/50 shadow-inner group"
              aria-label="Open official directions map poster"
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
            </button>
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
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-5 sm:p-10 space-y-4"
      >
        <div className="flex items-center gap-2.5">
          <Bus className="w-5 h-5 text-terra" />
          <h3 className="font-serif text-lg sm:text-2xl font-bold text-ink">
            {TRANSIT_INFO.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 font-sans text-xs sm:text-sm text-ink-muted">
          {TRANSIT_INFO.steps.map((s, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-sand space-y-1.5">
              <span className="font-bold text-terra text-xs">Step {i + 1}</span>
              <p className="leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Nearby Attractions Grid (2-Column Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-bold tracking-normal text-terra">Explore Alfonso & Tagaytay</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink">
            Popular Nearby Attractions
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {NEARBY_ATTRACTIONS.map((attraction) => (
            <button
              key={attraction.name}
              type="button"
              onClick={() => setLightboxImage({ src: attraction.fallbackImage, label: attraction.name })}
              aria-label={`Open photo: ${attraction.name}`}
              className="media-button bg-white border border-sand shadow-warm-sm flex flex-col justify-between group"
            >
              <div className="relative h-32 sm:h-48 w-full bg-sand/20 overflow-hidden">
                <Image
                  src={attraction.fallbackImage}
                  alt={attraction.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-ink/80 backdrop-blur-md rounded-full text-gold-light text-[9px] sm:text-[11px] font-bold flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span>{attraction.travelTime}</span>
                </div>
                <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </div>
              </div>

              <div className="p-3 sm:p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xs sm:text-lg font-bold text-ink line-clamp-1 sm:line-clamp-none">{attraction.name}</h4>
                  <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed font-sans mt-0.5 line-clamp-2">
                    {attraction.highlights}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1.5 border-t border-sand/40">
                  {attraction.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[9px] sm:text-[10px] font-semibold text-ink-muted bg-sand/40 px-1.5 py-0.2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Practical Travel Tips */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6"
      >
        {LOCAL_TRAVEL_TIPS.map((tip) => (
          <div key={tip.title} className="bg-cream-dark p-4 sm:p-6 rounded-2xl border border-sand space-y-1.5 hover:shadow-warm-sm transition-shadow">
            <h4 className="font-serif text-base sm:text-lg font-bold text-ink flex items-center gap-2">
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

      {/* Fullscreen Portal Lightbox (immune to stacking contexts) */}
      <FullscreenLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage ? lightboxImage.src : null}
        title={lightboxImage?.label}
        category="Alfonso Tagaytay Location"
      />
    </div>
  )
}

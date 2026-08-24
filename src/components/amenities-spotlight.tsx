'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import {
  Waves,
  Mic,
  CircleDot,
  ChefHat,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'

export function AmenitiesSpotlight() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null)

  // Body scroll lock on modal open
  useEffect(() => {
    if (activeLightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeLightbox])

  const spotlights = [
    {
      title: 'Private Pool & Cascading Waterfall',
      tagline: '100% Exclusive Swimming Deck',
      image: getLocalImageUrl('pool1'), // 408.6 KB High-Res
      icon: Waves,
      bullets: [
        'Depth: 4ft to 5.5ft gradual slope',
        'Ambient underwater LED night illumination',
        'Natural rock cascading waterfall feature',
        'Adjacent garden-access rinse bathroom',
      ],
    },
    {
      title: 'Acoustic Videoke Lounge',
      tagline: 'Soundproofed with Zero Curfew',
      image: getLocalImageUrl('kara1'), // 421.6 KB High-Res
      icon: Mic,
      bullets: [
        'Updated digital songbook (OPM & Global Hits)',
        '2 professional wireless microphones',
        'Large LED flat-screen with high-power speakers',
        'Deep cushioned L-shaped sectional couch',
      ],
    },
    {
      title: 'Kangaroo Billiards & Retro Arcades',
      tagline: 'Multiplayer Entertainment Wing',
      image: getLocalImageUrl('bill2'), // 219.4 KB
      icon: CircleDot,
      bullets: [
        'Full regulation Kangaroo pool table',
        'Cue sticks, bridge, chalk & triangle provided',
        'Classic multi-game retro arcade cabinets',
        '1000+ free-play 90s tournament titles',
      ],
    },
    {
      title: 'Chef’s Kitchen & Acacia Banquet Dining',
      tagline: 'Cook Together with Zero Corkage',
      image: getLocalImageUrl('din1'), // 379.2 KB High-Res
      icon: ChefHat,
      bullets: [
        'Solid acacia live-edge hardwood banquet table',
        'Heavy-duty double burner gas stove (gas included)',
        'Large 2-door refrigerator & freezer',
        '₱0 Corkage on outside catering, lechon & drinks',
      ],
    },
  ]

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sand pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-terra">
            Flagship Facility Spotlight
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mt-1">
            The 4 Signature Group Experiences
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-ink-muted max-w-md font-sans">
          Every booking reserves the entire private compound with unlimited access to all 4 flagship facilities.
        </p>
      </div>

      {/* 4 Spotlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {spotlights.map((spot) => {
          const Icon = spot.icon
          return (
            <div
              key={spot.title}
              className="bg-white rounded-3xl overflow-hidden border border-sand shadow-warm-sm hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Photo Viewport with Zoom Lightbox Trigger (Clean, No Overlay Pill) */}
              <div
                onClick={() => setActiveLightbox(spot.image)}
                className="relative h-64 sm:h-72 bg-sand/20 overflow-hidden cursor-pointer"
              >
                <Image
                  src={spot.image}
                  alt={spot.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-gold-light" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-sand/60 text-terra flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-terra transition-colors">
                      {spot.title}
                    </h3>
                  </div>
                  <div className="space-y-2 pt-1 border-t border-sand/50">
                    {spot.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-xs sm:text-sm text-ink font-medium">
                        <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-sand/50 flex items-center justify-between text-xs font-bold text-terra-dark">
                  <span className="text-forest flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Included in Nightly Rate</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveLightbox(spot.image)}
                    className="hover:underline text-terra inline-flex items-center gap-1"
                  >
                    <span>View HD Photo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Fullscreen Portal Lightbox (immune to stacking contexts) */}
      <FullscreenLightbox
        isOpen={!!activeLightbox}
        onClose={() => setActiveLightbox(null)}
        src={activeLightbox}
        title="Amenity Full HD View"
        category="Flagship Facility"
        actionButton={
          <span className="px-3 py-1 bg-forest/20 text-forest-light border border-forest/30 rounded-full font-bold text-xs">
            Included in Nightly Rate
          </span>
        }
      />
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import {
  Waves,
  Mic,
  ChefHat,
  Bed,
  Flame,
  CheckCircle2,
  Users,
  Droplets,
  ArrowRight,
  MessageCircle,
  Maximize2,
  Compass,
} from 'lucide-react'

export function EstateZoneExplorer() {
  const [activeZone, setActiveZone] = useState<number>(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  // Body scroll lock on modal open
  useEffect(() => {
    if (lightboxImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [lightboxImage])

  const zones = [
    {
      id: 'pool',
      name: 'Pool Deck & Waterfall',
      tagline: '100% Private Swimming & Mountain Sun',
      icon: Waves,
      capacity: 'All 40 Guests',
      image: getLocalImageUrl('pool1'), // 408.6 KB
      secondaryImage: getLocalImageUrl('pool7'), // 239.3 KB Sunlit Pool & Waterfall
      description:
        'Pristine private pool with ambient underwater night illumination, cascading stone waterfall feature, comfortable sun loungers, and direct outdoor garden shower access so guests never track pool water inside.',
      features: [
        'Exclusive whole-property swimming — zero stranger interference',
        'Ambient underwater lighting for evening swims in 18°C mountain air',
        'Dedicated poolside loungers with breezy garden patio views',
        'Direct garden-access full bathroom for seamless rinsing',
      ],
      linkHref: '/amenities',
      linkText: 'Explore Pool & Water Features',
    },
    {
      id: 'entertainment',
      name: 'Gaming & Videoke Hub',
      tagline: 'Soundproofed Videoke, Billiards & Arcades',
      icon: Mic,
      capacity: 'Multi-Activity Space',
      image: getLocalImageUrl('kara1'), // 421.6 KB
      secondaryImage: getLocalImageUrl('arc4'), // 172.8 KB Retro Arcade Tournament Station
      description:
        'A dedicated acoustic entertainment wing. Features a soundproofed videoke lounge with music poster walls, full-size Kangaroo pool table set against authentic exposed brick, and classic retro arcade cabinets with multiplayer tournament titles.',
      features: [
        'Soundproofed air-conditioned videoke room with zero curfew',
        'Full-size Kangaroo billiard table with premium cue sticks and chalk',
        'Multiplayer retro arcade machines with hundreds of classic games',
        'No tokens needed — 100% free unlimited play included in stay',
      ],
      linkHref: '/amenities',
      linkText: 'Explore Game & Lounge Areas',
    },
    {
      id: 'dining',
      name: 'Banquet Hall & Kitchen',
      tagline: '100% Self-Catering & Grilling',
      icon: ChefHat,
      capacity: 'Full Self-Catering & Grilling',
      image: getLocalImageUrl('din1'), // 379.2 KB
      secondaryImage: getLocalImageUrl('din4'), // 328.9 KB Ambient Warm Evening Dining
      description:
        'Designed for memorable group feasts. Features a 10-seater contemporary glass banquet table, full outdoor covered BBQ grill, commercial refrigerator, gas stove, microwave, rice cooker, and pure mineral water dispenser.',
      features: [
        '₱0 Corkage on all food, drinks, liquors, and celebration cakes',
        'Heavy-duty outdoor charcoal BBQ grill & preparation counter',
        'Full kitchenware: pots, pans, plates, glasses, and utensils',
        'Purified mineral water dispenser with complimentary refill jugs',
      ],
      linkHref: '/amenities',
      linkText: 'Explore Dining & Cooking Setup',
    },
    {
      id: 'suites',
      name: '4 Bedroom Zones',
      tagline: '20 Beds (2 VIP + 9 Bunks + Quarters)',
      icon: Bed,
      capacity: 'Sleeps 40 Guests Comfortably',
      image: getLocalImageUrl('bed7'), // 554.5 KB High-Res VIP Suite
      secondaryImage: getLocalImageUrl('bed9'), // 120.8 KB VIP Master Suite Detailed View
      description:
        'Engineered to eliminate the usual group travel frustrations. 4 distinct air-conditioned bedroom zones (2 VIP master suites + 9 sturdy double-deck bunks + driver quarters) paired with 8 full bathrooms so morning routines flow effortlessly.',
      features: [
        '2 VIP Master Suites with private ensuite rainfall bathrooms',
        '9 heavy-duty bunk pods equipped with charging sockets and reading lights',
        'Dedicated air-conditioned driver & staff quarters',
        '8 full bathrooms throughout — zero waiting lines for large groups',
      ],
      linkHref: '/rooms',
      linkText: 'View All Rooms & 8 Bathrooms',
    },
    {
      id: 'outdoor',
      name: 'Bonfire & Basketball',
      tagline: 'Under-the-Stars Hearth & Half-Court',
      icon: Flame,
      capacity: 'Evening Gatherings',
      image: getLocalImageUrl('fir1'), // 243.6 KB
      secondaryImage: getLocalImageUrl('out8'), // 523.8 KB Garden Patio & Container Deck
      description:
        'A dedicated stone fire pit ringed by wooden benches for evening marshmallow roasting and guitar sessions under the cool Alfonso stars, alongside a gated basketball half-court and secure parking for 3+ family vans.',
      features: [
        'Stone fire pit with firewood setup available on request',
        'Outdoor half-court basketball ring with balls provided',
        'Gated secure parking accommodating 3+ large family vans/SUVs',
      ],
      linkHref: '/amenities',
      linkText: 'Explore Outdoor Facilities',
    },
  ]

  const current = zones[activeZone]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-sand pb-4 sm:pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terra/10 text-terra-dark text-xs font-bold uppercase tracking-wider mb-0.5">
            <Compass className="w-3.5 h-3.5 text-terra" />
            <span>Architectural Layout Navigator</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-ink">
            Explore the 5 Compound Zones
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted font-sans">
            See how the shipping containers, private pool, dining hall, and sleeping quarters connect seamlessly.
          </p>
        </div>

        <div className="text-xs font-semibold text-ink-muted bg-sand/40 px-3.5 py-1.5 rounded-full self-start md:self-auto">
          Click any zone to navigate
        </div>
      </div>

      {/* Zone Selector Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {zones.map((zone, idx) => {
          const Icon = zone.icon
          const isActive = activeZone === idx

          return (
            <button
              key={zone.id}
              type="button"
              onClick={() => setActiveZone(idx)}
              className={`relative isolate overflow-hidden p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 active:scale-95 flex flex-col justify-between gap-2.5 ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              } ${
                isActive
                  ? 'text-cream shadow-warm-md scale-[1.02] border border-transparent'
                  : 'bg-white border border-sand text-ink hover:bg-sand/30 hover:border-sand-dark'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-zone-tab"
                  className="absolute inset-0 bg-ink rounded-2xl z-0 shadow-warm-md"
                  transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                />
              )}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-terra text-white' : 'bg-sand/50 text-terra-dark'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-gold-light' : 'bg-sand/60 text-ink-muted'
                  }`}
                >
                  Zone {idx + 1}
                </span>
              </div>
              <div className="relative z-10">
                <div className="text-xs sm:text-sm font-bold leading-tight line-clamp-1 sm:line-clamp-2">{zone.name}</div>
                <div className={`text-[10px] sm:text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-sand-light/80' : 'text-ink-muted'}`}>
                  {zone.capacity}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Deep-Dive Zone Card with Generous Image Dimensions (Clean, Unobscured Photos) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="bg-white rounded-3xl p-5 sm:p-10 lg:p-12 border border-sand shadow-warm-lg grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
        >
          {/* Dual Photo Viewport */}
          <div className="lg:col-span-6 space-y-3">
            <div
              onClick={() => setLightboxImage(current.image)}
              className="relative h-56 sm:h-84 md:h-96 rounded-2xl overflow-hidden shadow-warm-md border border-sand bg-sand/20 cursor-pointer group"
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-light" />
              </div>
            </div>

            {/* Secondary Photo Thumbnail */}
            <div
              onClick={() => setLightboxImage(current.secondaryImage)}
              className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-sm border border-sand bg-sand/20 cursor-pointer group flex items-center justify-between p-3"
            >
              <Image
                src={current.secondaryImage}
                alt={`${current.name} Secondary Angle`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent flex items-center p-3 sm:p-4">
                <span className="text-cream text-xs font-semibold">
                  Tap to view secondary angle ↗
                </span>
              </div>
            </div>
          </div>

          {/* Zone Details & Highlights */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-terra">
                  Zone Details
                </span>
                <span className="text-[11px] text-ink-muted bg-sand/40 px-2 py-0.5 rounded-full font-medium">
                  {current.capacity}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans pt-1">
                {current.description}
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-2 border-t border-sand pt-3 sm:pt-4">
              <span className="text-xs font-bold text-ink uppercase tracking-wider">
                Zone Highlights:
              </span>
              <ul className="space-y-2 font-sans text-xs sm:text-sm text-ink-muted">
                {current.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href={current.linkHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-terra hover:bg-terra-dark text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-sm active:scale-95 transition-all"
              >
                <span>{current.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen Portal Lightbox (immune to stacking contexts) */}
      <FullscreenLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage}
        title={current.name}
        subtitle={current.capacity}
        category="Compound Zone"
      />
    </section>
  )
}

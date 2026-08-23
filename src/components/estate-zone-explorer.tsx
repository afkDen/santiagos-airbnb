'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'
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
  X,
  Compass,
} from 'lucide-react'

export function EstateZoneExplorer() {
  const [activeZone, setActiveZone] = useState<number>(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const zones = [
    {
      id: 'pool',
      name: 'The Pool Deck & Waterfalls',
      tagline: '100% Private Swimming & Mountain Sun',
      icon: Waves,
      capacity: 'All 40 Guests',
      image: getLocalImageUrl('pool1'), // 408.6 KB
      secondaryImage: getLocalImageUrl('pool3'), // 344.9 KB
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
      name: 'Entertainment & Gaming Hub',
      tagline: 'Soundproofed Videoke, Billiards & Arcades',
      icon: Mic,
      capacity: 'Multi-Activity Space',
      image: getLocalImageUrl('kara1'), // 421.6 KB
      secondaryImage: getLocalImageUrl('bill2'), // 219.4 KB
      description:
        'A dedicated acoustic entertainment wing. Features a soundproofed videoke lounge with music poster walls, full-size Kangaroo pool table set against authentic exposed brick, and classic retro arcade cabinets with multiplayer tournament titles.',
      features: [
        'Soundproofed air-conditioned videoke room with zero curfew',
        'Kangaroo billiards table with cues, balls & racks provided',
        'Authentic retro arcade multi-game machines',
        'High-power sound system and comfortable sectional seating',
      ],
      linkHref: '/amenities',
      linkText: 'View All Entertainment Amenities',
    },
    {
      id: 'dining',
      name: 'Banquet Dining & Chef’s Kitchen',
      tagline: '10-Seater Banquet Table & Group Cooking',
      icon: ChefHat,
      capacity: 'Banquet & Prep Area',
      image: getLocalImageUrl('din1'), // 379.2 KB High-Res Banquet Table
      secondaryImage: getLocalImageUrl('kit4'), // 220.8 KB Kitchen Overview
      description:
        'The social heart of the resort. Dine together at the 10-seater glass table with a fully equipped commercial kitchen featuring heavy-duty gas cooktops, refrigeration, and zero corkage fees on outside catering.',
      features: [
        '10-seater solid glass-top dining table for group meals',
        'Heavy-duty chef gas cooktops, prep counters & cookware included',
        'Large-capacity refrigerator for outside food & party drinks',
        'Zero corkage fees on outside catering, drinks & birthday cakes',
      ],
      linkHref: '/amenities',
      linkText: 'View Kitchen & Dining Specs',
    },
    {
      id: 'accommodations',
      name: 'Sleeping Quarters & 8 Bathrooms',
      tagline: '4 Private Zones • 20 Beds • Zero Queues',
      icon: Bed,
      capacity: '40 Sleeping Capacity',
      image: getLocalImageUrl('bed7'), // 554.5 KB High-Res VIP Suite
      secondaryImage: getLocalImageUrl('bat1'), // 429.9 KB Modern Rain Shower
      description:
        'Engineered to eliminate the usual group travel frustrations. 4 distinct air-conditioned bedroom zones (2 VIP master suites + 9 sturdy double-deck bunks + driver quarters) paired with 8 full bathrooms so morning routines flow effortlessly.',
      features: [
        '8 Full Bathrooms distributed strategically — Zero Queue Guarantee',
        '2 VIP Master Suites with private ensuite rainfall bathrooms',
        '9 heavy-duty double-deck bunk beds with comfortable spring mattresses',
        'Dedicated ground-level sleeping quarters for drivers & staff',
      ],
      linkHref: '/rooms',
      linkText: 'Explore 4 Room Zones & Bathrooms',
    },
    {
      id: 'outdoor',
      name: 'Outdoor Grounds & Bonfire Pit',
      tagline: 'Fireside Gathering, Basketball & Parking',
      icon: Flame,
      capacity: 'Outdoor Recreation',
      image: getLocalImageUrl('fir1'), // 386.1 KB
      secondaryImage: getLocalImageUrl('bbl1'), // 307.8 KB
      description:
        'Expansive highland outdoor spaces. Gather around the sunken circular fire pit for marshmallow roasting and acoustic jamming in the crisp 18°C evening air, play pickup basketball on the half-court, and park up to 3+ large vans inside the secure gate.',
      features: [
        'Sunken outdoor bonfire pit circle under the open highland sky',
        'Regulation basketball half-court with balls provided',
        'Covered al fresco verandas on ground and second floors',
        'Gated secure parking accommodating 3+ large family vans/SUVs',
      ],
      linkHref: '/amenities',
      linkText: 'Explore Outdoor Facilities',
    },
  ]

  const current = zones[activeZone]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sand pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terra/10 text-terra-dark text-xs font-bold uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5 text-terra" />
            <span>Architectural Layout Navigator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
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

      {/* Zone Selector Pills with Zero Border Clash */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {zones.map((zone, idx) => {
          const Icon = zone.icon
          const isActive = activeZone === idx

          return (
            <button
              key={zone.id}
              type="button"
              onClick={() => setActiveZone(idx)}
              className={`relative isolate overflow-hidden p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 active:scale-95 flex flex-col justify-between gap-3 ${
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
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-terra text-white' : 'bg-sand/50 text-terra-dark'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-gold-light' : 'bg-sand/60 text-ink-muted'
                  }`}
                >
                  Zone {idx + 1}
                </span>
              </div>
              <div className="relative z-10">
                <div className="text-xs sm:text-sm font-bold leading-tight">{zone.name}</div>
                <div className={`text-[11px] mt-0.5 ${isActive ? 'text-sand-light/80' : 'text-ink-muted'}`}>
                  {zone.capacity}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Deep-Dive Zone Card with Generous Image Dimensions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-sand shadow-warm-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          {/* Dual Photo Viewport */}
          <div className="lg:col-span-6 space-y-3.5">
            <div
              onClick={() => setLightboxImage(current.image)}
              className="relative h-72 sm:h-84 md:h-96 rounded-2xl overflow-hidden shadow-warm-md border border-sand bg-sand/20 cursor-pointer group"
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 bg-ink/80 backdrop-blur-md rounded-full text-gold-light text-xs font-bold shadow-sm">
                {current.tagline}
              </div>
              <div className="absolute bottom-3.5 right-3.5 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-light" />
              </div>
            </div>

            {/* Generous Secondary Photo Strip */}
            <div
              onClick={() => setLightboxImage(current.secondaryImage)}
              className="relative h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs border border-sand bg-sand/20 cursor-pointer group"
            >
              <Image
                src={current.secondaryImage}
                alt={`${current.name} Secondary Angle`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs font-bold text-cream px-3.5 py-1.5 bg-ink/70 rounded-full backdrop-blur-md flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                  <span>Click to enlarge angle</span>
                </span>
              </div>
            </div>
          </div>

          {/* Description & Feature Checklist */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-terra">
                Zone {activeZone + 1} Architecture & Flow
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                {current.name}
              </h3>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                {current.description}
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-2.5 pt-2 border-t border-sand/60">
              {current.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-sm active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire About {current.name.split('&')[0].trim()}</span>
              </a>

              <Link
                href={current.linkHref}
                className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-cream hover:bg-cream-dark border border-sand text-ink text-xs sm:text-sm font-semibold rounded-full active:scale-95 transition-all"
              >
                <span>{current.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-terra" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Lightbox for Zone Explorer */}
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
              <h4 className="text-sm sm:text-base font-semibold">{current.name} HD View</h4>
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
              <Image src={lightboxImage} alt={current.name} fill sizes="95vw" className="object-contain" />
            </div>
            <div className="px-2 text-xs text-sand-light/70 font-sans">
              Press Escape to close
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

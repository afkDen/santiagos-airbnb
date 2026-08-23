'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'
import { StickyBookingBar } from '@/components/sticky-booking-bar'
import {
  Bed,
  Droplets,
  ShieldCheck,
  Users,
  CheckCircle2,
  Maximize2,
  X,
  MessageCircle,
  Sparkles,
  Camera,
  Layers,
} from 'lucide-react'

export default function RoomsPage() {
  const [selectedZone, setSelectedZone] = useState<number>(0)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; label: string } | null>(null)

  const roomZones = [
    {
      id: 'vip1',
      name: 'VIP Room 1 (Master Suite)',
      beds: '1 Queen Bed + Private Ensuite Bathroom',
      capacity: 'Ideal for group leaders, celebrants, or couples',
      features: [
        'Private ensuite rainfall bathroom with hot water',
        'Individual split-type air conditioner (18–22°C)',
        'Hotel-grade fresh linens, pillows & duvets',
        'High ceilings with warm architectural downlights',
      ],
      image: getLocalImageUrl('bed1'),
      badge: 'Master Suite',
    },
    {
      id: 'vip2',
      name: 'VIP Room 2 (Second Master Bedroom)',
      beds: '1 Queen Bed • High-Power AC & Large Windows',
      capacity: 'Ideal for parents, elders, or VIP couples',
      features: [
        'Individual high-power air conditioning unit',
        'Direct corridor access to adjacent rainfall bathrooms',
        'Quiet, serene corner placement for deep restorative sleep',
        'Clean modern industrial container aesthetic with large windows',
      ],
      image: getLocalImageUrl('bed7'), // 554.5 KB High-Res VIP Suite
      badge: 'VIP Bedroom',
    },
    {
      id: 'bunks',
      name: 'Bunk Bed Quarters (Bedrooms 3 & 4)',
      beds: '9 Heavy-Duty Double-Deck Beds (18 Spots)',
      capacity: 'Engineered for barkadas, extended family & teams',
      features: [
        '9 sturdy double-deck frames with comfortable spring mattresses',
        'High-power individual AC units keeping rooms crisp and cool',
        'Ample walking space & designated luggage storage area',
        'Individual power outlets beside beds for phone charging',
      ],
      image: getLocalImageUrl('bed2'),
      badge: '18+ Beds Total',
    },
    {
      id: 'driver',
      name: 'Driver’s & Staff Quarters',
      beds: 'Dedicated Staff Sleeping Room',
      capacity: 'Accommodates hired drivers, cooks & assistants',
      features: [
        'Private separate sleeping space for support staff',
        'Ensures main guest quarters remain 100% private',
        'Convenient ground-level access near gated parking',
        'Equipped with dedicated electric fan and ventilation',
      ],
      image: getLocalImageUrl('bed8'),
      badge: 'Staff Quarters',
    },
  ]

  const allBedrooms = [
    { key: 'bed1', label: 'VIP Room 1 — Queen Bed Master Suite', tag: 'VIP Suite 1' },
    { key: 'bed7', label: 'VIP Room 2 — Second Queen Bed Master Suite', tag: 'VIP Suite 2' },
    { key: 'bed2', label: 'Bunk Bed Room A — Sturdy Double Decks', tag: 'Bunk Quarters' },
    { key: 'bed3', label: 'Bunk Bed Room B — Air-Conditioned Bunk Units', tag: 'Bunk Quarters' },
    { key: 'bed4', label: 'Bunk Bed Room C — Heavy-Duty Frames & Linens', tag: 'Bunk Quarters' },
    { key: 'bed5', label: 'Bunk Bed Room D — Spacious Group Sleeping', tag: 'Bunk Quarters' },
    { key: 'bed6', label: 'Bunk Bed Room E — Comfortable Mattresses', tag: 'Bunk Quarters' },
    { key: 'bed8', label: 'Staff Quarters — Dedicated Driver Room', tag: 'Support Staff' },
  ]

  const bathroomDetails = [
    {
      title: 'Zero-Queue Guarantee',
      desc: '8 full bathrooms distributed strategically across indoor quarters, living zones, and poolside so a 40-person group never has to wait in line during morning rushes.',
      icon: Users,
    },
    {
      title: 'Rainfall Showerheads & Hot Water',
      desc: 'Equipped with heavy-flow rainfall showerheads and reliable hot water systems — perfect after an evening swim in the cool 18–24°C mountain air.',
      icon: Droplets,
    },
    {
      title: 'Outdoor Garden Bathroom',
      desc: 'Dedicated poolside and garden-access full bathroom so guests can rinse off and shower without tracking pool water into the bedrooms.',
      icon: Droplets,
    },
    {
      title: 'Pristine Cleanliness Standard',
      desc: 'Full ceramic tiling, modern vanities, mirrors, and thorough sanitation between every group booking.',
      icon: ShieldCheck,
    },
  ]

  const bathroomPhotos = [
    { key: 'bat1', label: 'Bathroom 1 — Rainfall Shower & Hot Water' },
    { key: 'bat2', label: 'Bathroom 2 — Modern Ceramic Vanity & Clean Tiling' },
    { key: 'bat7', label: 'Bathroom 7 — Dedicated Outdoor Garden & Pool Access' },
  ]

  const currentZone = roomZones[selectedZone]

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
          <Bed className="w-4 h-4 text-terra" />
          <span>4 Room Zones • 20 Beds Total • 40 Max Guests</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Rest Comfortably with <span className="text-terra">Zero Queues</span>
        </h1>

        <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
          Built specifically to eliminate the usual pain points of large group vacations: cramped bedrooms and long bathroom lines.
        </p>
      </motion.div>

      {/* Interactive Room Zone Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-white rounded-3xl p-6 sm:p-10 border border-sand shadow-warm-lg space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sand pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terra">Interactive Floor Navigator</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
              Explore the 4 Sleeping Zones
            </h2>
          </div>
          <div className="text-xs text-ink-muted font-medium bg-sand/40 px-3 py-1.5 rounded-full self-start sm:self-auto">
            All Bedrooms Air-Conditioned
          </div>
        </div>

        {/* Zone Selector Buttons with Spring layoutId and Isolated Stacking Context */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {roomZones.map((zone, idx) => {
            const isActive = selectedZone === idx
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setSelectedZone(idx)}
                className={`relative isolate px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 active:scale-95 flex items-center justify-between gap-2 overflow-hidden ${
                  isActive
                    ? 'text-cream shadow-warm-sm border border-transparent'
                    : 'bg-cream/40 border border-sand text-ink hover:bg-sand/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-room-zone"
                    className="absolute inset-0 bg-ink rounded-full z-0 shadow-warm-sm"
                    transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10 truncate">{zone.name.split('(')[0].trim()}</span>
                <span
                  className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${
                    isActive ? 'bg-white/20 text-gold-light' : 'bg-sand/60 text-ink-muted'
                  }`}
                >
                  {zone.badge.split(' ')[0]}
                </span>
              </button>
            )
          })}
        </div>

        {/* Selected Zone Deep Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentZone.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2"
          >
            <div
              onClick={() => setLightboxImage({ src: currentZone.image, label: currentZone.name })}
              className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-warm-md border border-sand bg-sand/20 cursor-pointer group"
            >
              <Image
                src={currentZone.image}
                alt={currentZone.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-ink/80 backdrop-blur-md rounded-full text-gold-light text-xs font-bold shadow-sm">
                {currentZone.beds}
              </div>
              <div className="absolute bottom-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-light" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-terra">
                  {currentZone.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  {currentZone.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-terra-dark">
                  {currentZone.capacity}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-sand/60">
                {currentZone.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink font-medium">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={PROPERTY_INFO.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-sm active:scale-95 transition-all group"
                >
                  <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                  <span>Ask About Bed Arrangements</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Complete 8-Bedroom Photo Catalog with Exact Image Matching */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/60 text-terra-dark text-xs font-bold uppercase tracking-wider mb-1">
              <Layers className="w-3.5 h-3.5 text-terra" />
              <span>Full Sleeping Configuration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
              All 8 Bedroom Views & Pods
            </h2>
          </div>
          <span className="text-xs font-bold text-ink-muted bg-sand/40 px-3 py-1.5 rounded-full self-start sm:self-auto">
            Click any bedroom to enlarge
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {allBedrooms.map((bed) => (
            <div
              key={bed.key}
              onClick={() => setLightboxImage({ src: getLocalImageUrl(bed.key), label: bed.label })}
              className="bg-white rounded-2xl overflow-hidden border border-sand shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-48 sm:h-52 w-full bg-sand/20 overflow-hidden">
                <Image
                  src={getLocalImageUrl(bed.key)}
                  alt={bed.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-ink/75 backdrop-blur-md text-gold-light text-[10px] font-bold">
                  {bed.tag}
                </div>
                <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-ink/70 text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </div>
              </div>
              <div className="p-3.5">
                <h4 className="font-serif text-xs sm:text-sm font-bold text-ink leading-snug">
                  {bed.label}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 8 Bathrooms Zero-Queue Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-8 sm:p-12 space-y-8"
      >
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terra/15 text-terra-dark text-xs font-bold uppercase tracking-wider">
            <Droplets className="w-3.5 h-3.5 text-terra" />
            <span>The 8-Bathroom Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            8 Full Bathrooms — The Zero-Queue Guarantee
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
            Nothing ruins a big group trip faster than 40 people fighting over 2 bathrooms. Santiagos Resort provides 8 fully-equipped bathrooms throughout the property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bathroomDetails.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="bg-white p-6 rounded-3xl border border-sand/70 shadow-warm-sm space-y-3 hover:shadow-warm-md hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-terra/15 text-terra-dark flex items-center justify-center group-hover:scale-110 group-hover:bg-terra group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-ink">{b.title}</h4>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">{b.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bathroom Photos Preview with Lightbox Trigger */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {bathroomPhotos.map((bp) => (
            <div
              key={bp.key}
              onClick={() => setLightboxImage({ src: getLocalImageUrl(bp.key), label: bp.label })}
              className="relative h-60 sm:h-64 rounded-2xl overflow-hidden border border-sand shadow-sm bg-sand/20 cursor-pointer group"
            >
              <Image
                src={getLocalImageUrl(bp.key)}
                alt={bp.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                <span className="text-xs sm:text-sm font-bold text-cream block">{bp.label}</span>
              </div>
              <div className="absolute top-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-light" />
              </div>
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

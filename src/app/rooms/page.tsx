'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'
import {
  Bed,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Users,
  Wind,
  Maximize2,
  X,
  Layers,
  Sparkles,
} from 'lucide-react'

export default function RoomsPage() {
  const [selectedZone, setSelectedZone] = useState<number>(0)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; label: string } | null>(null)

  const roomZones = [
    {
      id: 'vip1',
      name: 'VIP Room 1 (Master Suite)',
      tabLabel: 'VIP Suite 1',
      tabSub: '1 Queen • Ensuite',
      capacity: 'Ideal for parents, elders, or couple hosts',
      beds: '1 Queen Bed',
      bathrooms: 'Private Ensuite Rainfall Bathroom',
      features: [
        'Dedicated split-type air conditioner with quiet night mode',
        'Direct ensuite private bathroom with hot rainfall shower',
        'Large window overlooking the compound courtyard',
        'Hotel-grade cotton linens, pillows, and acoustic privacy',
      ],
      image: getLocalImageUrl('bed1'), // 387.8 KB High-Res VIP Suite
      badge: 'VIP Bedroom',
    },
    {
      id: 'vip2',
      name: 'VIP Room 2 (Second Master Bedroom)',
      tabLabel: 'VIP Suite 2',
      tabSub: '1 Queen • Ensuite',
      capacity: 'Ideal for parents, elders, or VIP couples',
      beds: '1 Queen Bed',
      bathrooms: 'Private Ensuite Bathroom',
      features: [
        'Dedicated split-type air conditioning',
        'Ensuite full bathroom with modern tiling and vanity',
        'Wood-paneled accent walls & warm ambient lighting',
        'Plush mattress with fresh sanitized sheets & duvet',
      ],
      image: getLocalImageUrl('bed7'), // 554.5 KB High-Res VIP Suite
      badge: 'VIP Bedroom',
    },
    {
      id: 'bunks',
      name: 'Double-Deck Bunk Zone (Main Sleeping Quarters)',
      tabLabel: 'Bunk Zone',
      tabSub: '16 Beds • 4 Baths',
      capacity: 'Sleeps up to 16+ cousins, barkada, and friends',
      beds: '8 Heavy-Duty Double-Deck Bunk Pods (16 Single Beds)',
      bathrooms: '4 Dedicated Full Bathrooms on Same Floor',
      features: [
        'Sturdy steel-and-wood frame bunk beds — zero squeaks or wobbles',
        'Individual reading lights and charging outlets per bed pod',
        'Multi-unit high-capacity split air conditioners keep the room 18°C',
        '4 full bathrooms immediately adjacent to prevent morning lines',
      ],
      image: getLocalImageUrl('bed2'), // 411.3 KB High-Res Bunk Pods
      badge: '16-Bed Capacity',
    },
    {
      id: 'staff',
      name: 'Staff & Driver Air-Conditioned Quarters',
      tabLabel: 'Staff Room',
      tabSub: '2 Beds • 1 Bath',
      capacity: 'Dedicated space for family drivers, assistants, or extra guests',
      beds: '1 Double-Deck Bunk Bed (2 Beds)',
      bathrooms: 'Dedicated Bathroom on Ground Floor',
      features: [
        'Separate air-conditioned room ensuring support staff rest comfortably',
        'Private access door near the compound driveway and parking area',
        'Direct access to ground floor guest bathroom',
      ],
      image: getLocalImageUrl('bed8'), // 534.5 KB High-Res Quarters
      badge: 'Staff Quarters',
    },
  ]

  // Verified 8 Bedroom Photography Registry
  const allBedrooms = [
    { key: 'bed1', label: 'VIP Room 1 — Queen Bed Master Suite', tag: 'VIP Suite 1' },
    { key: 'bed7', label: 'VIP Room 2 — Second Queen Bed Master Suite', tag: 'VIP Suite 2' },
    { key: 'bed2', label: 'Bunk Pod 1 — Air-Conditioned Bunk Beds', tag: 'Bunk Zone' },
    { key: 'bed3', label: 'Bunk Pod 2 — Upper & Lower Mattresses', tag: 'Bunk Zone' },
    { key: 'bed4', label: 'Bunk Pod 3 — Custom Wood Container Frames', tag: 'Bunk Zone' },
    { key: 'bed5', label: 'Bunk Pod 4 — Fresh Hotel-Grade Linens', tag: 'Bunk Zone' },
    { key: 'bed6', label: 'Bunk Pod 5 — High-Ceiling Group Quarters', tag: 'Bunk Zone' },
    { key: 'bed8', label: 'Staff & Driver Air-Conditioned Room', tag: 'Staff Room' },
  ]

  const bathroomDetails = [
    {
      title: '2 VIP Ensuite Bathrooms',
      desc: 'Located inside VIP Suites 1 & 2 for total privacy and immediate access.',
      icon: Droplets,
    },
    {
      title: '4 Bunk Zone Bathrooms',
      desc: 'Placed along the main bunk corridor so large groups get ready simultaneously.',
      icon: Droplets,
    },
    {
      title: '1 Main Hall Guest Bathroom',
      desc: 'Centrally located next to the banquet dining hall and videoke lounge.',
      icon: Droplets,
    },
    {
      title: '1 Poolside Outdoor Bathroom',
      desc: 'Direct outdoor access from the pool deck and garden so wet guests rinse outside.',
      icon: Droplets,
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
        className="bg-white rounded-3xl p-5 sm:p-10 border border-sand shadow-warm-lg space-y-6 sm:space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sand pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terra">Interactive Floor Navigator</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-0.5">
              Explore the 4 Sleeping Zones
            </h2>
          </div>
          <div className="text-xs text-ink-muted font-medium bg-sand/40 px-3 py-1.5 rounded-full self-start sm:self-auto">
            All Bedrooms Air-Conditioned
          </div>
        </div>

        {/* Zone Selector Buttons with Clear Mobile Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {roomZones.map((zone, idx) => {
            const isActive = selectedZone === idx
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setSelectedZone(idx)}
                className={`relative isolate p-3 sm:p-4 text-left rounded-2xl sm:rounded-full transition-all duration-200 active:scale-95 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 overflow-hidden ${
                  isActive
                    ? 'text-cream shadow-warm-sm border border-transparent'
                    : 'bg-cream/40 border border-sand text-ink hover:bg-sand/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-room-zone"
                    className="absolute inset-0 bg-ink rounded-2xl sm:rounded-full z-0 shadow-warm-sm"
                    transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                  />
                )}
                <div className="relative z-10 space-y-0.5">
                  <div className="text-xs sm:text-sm font-bold leading-tight">{zone.tabLabel}</div>
                  <div className={`text-[10px] sm:hidden ${isActive ? 'text-gold-light' : 'text-ink-muted'}`}>
                    {zone.tabSub}
                  </div>
                </div>
                <span
                  className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full shrink-0 self-start sm:self-auto ${
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-2"
          >
            <div
              onClick={() => setLightboxImage({ src: currentZone.image, label: currentZone.name })}
              className="lg:col-span-6 relative h-56 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-warm-md border border-sand bg-sand/20 cursor-pointer group"
            >
              <Image
                src={currentZone.image}
                alt={currentZone.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-ink/80 backdrop-blur-md text-gold-light text-xs font-bold">
                {currentZone.badge}
              </div>
              <div className="absolute bottom-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-light" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-terra uppercase tracking-wider">
                  Zone Details & Layout
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-ink mt-0.5">
                  {currentZone.name}
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted mt-1 font-sans">
                  {currentZone.capacity}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-2 border-y border-sand">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">Bed Configuration</div>
                  <div className="text-xs sm:text-sm font-semibold text-ink flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-terra shrink-0" />
                    <span>{currentZone.beds}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">Bath Access</div>
                  <div className="text-xs sm:text-sm font-semibold text-ink flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-terra shrink-0" />
                    <span>{currentZone.bathrooms}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-ink uppercase tracking-wider">Key Room Features:</div>
                <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-ink-muted">
                  {currentZone.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Complete 8-Bedroom Photo Catalog with Balanced 2-Column Mobile Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/60 text-terra-dark text-xs font-bold uppercase tracking-wider mb-1">
              <Layers className="w-3.5 h-3.5 text-terra" />
              <span>Full Sleeping Configuration</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
              All 8 Bedroom Views & Pods
            </h2>
          </div>
          <span className="text-xs font-bold text-ink-muted bg-sand/40 px-3 py-1.5 rounded-full self-start sm:self-auto">
            Click any bedroom to enlarge
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {allBedrooms.map((bed) => (
            <div
              key={bed.key}
              onClick={() => setLightboxImage({ src: getLocalImageUrl(bed.key), label: bed.label })}
              className="bg-white rounded-2xl overflow-hidden border border-sand shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-36 sm:h-52 w-full bg-sand/20 overflow-hidden">
                <Image
                  src={getLocalImageUrl(bed.key)}
                  alt={bed.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-ink/75 backdrop-blur-md text-gold-light text-[9px] sm:text-[10px] font-bold">
                  {bed.tag}
                </div>
                <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-ink/70 text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </div>
              </div>
              <div className="p-2.5 sm:p-3.5">
                <h4 className="font-serif text-xs sm:text-sm font-bold text-ink leading-snug line-clamp-2">
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
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-5 sm:p-12 space-y-6 sm:space-y-8"
      >
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terra/15 text-terra-dark text-xs font-bold uppercase tracking-wider">
            <Droplets className="w-3.5 h-3.5 text-terra" />
            <span>The 8-Bathroom Advantage</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
            8 Full Bathrooms — Zero Queues
          </h2>
          <p className="text-xs sm:text-base text-ink-muted leading-relaxed font-sans">
            Nothing ruins a big group trip faster than 40 people fighting over 2 bathrooms. Santiagos Resort provides 8 fully-equipped bathrooms throughout the property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {bathroomDetails.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-sand/70 shadow-warm-sm space-y-2.5 hover:shadow-warm-md hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-terra/15 text-terra-dark flex items-center justify-center group-hover:scale-110 group-hover:bg-terra group-hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-ink">{b.title}</h4>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">{b.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bathroom Photos Preview with Lightbox Trigger (2-Column Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
          {bathroomPhotos.map((bp) => (
            <div
              key={bp.key}
              onClick={() => setLightboxImage({ src: getLocalImageUrl(bp.key), label: bp.label })}
              className="relative h-40 sm:h-64 rounded-2xl overflow-hidden border border-sand shadow-sm bg-sand/20 cursor-pointer group"
            >
              <Image
                src={getLocalImageUrl(bp.key)}
                alt={bp.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent p-3 sm:p-4 flex flex-col justify-end">
                <span className="text-[11px] sm:text-sm font-bold text-cream block line-clamp-2">{bp.label}</span>
              </div>
              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Lightbox Modal (z-[100] covers screen completely) */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-6 animate-in fade-in-0 duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-6xl w-full h-full flex flex-col justify-between bg-ink-soft rounded-2xl sm:rounded-3xl overflow-hidden border border-sand/30 shadow-2xl p-3 sm:p-5 space-y-2 animate-in zoom-in-95 ease-[cubic-bezier(0.23,1,0.32,1)] duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-cream px-2 shrink-0">
              <h4 className="text-sm sm:text-base font-semibold truncate max-w-[240px] sm:max-w-none">{lightboxImage.label}</h4>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-2 text-sand-light hover:text-white rounded-full bg-cream/10 hover:bg-cream/20 transition-colors active:scale-95"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-black/70 flex items-center justify-center min-h-0">
              <Image src={lightboxImage.src} alt={lightboxImage.label} fill sizes="95vw" className="object-contain" priority />
            </div>
            <div className="px-2 text-xs text-sand-light/70 font-sans shrink-0">
              Tap outside or press Escape to close
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

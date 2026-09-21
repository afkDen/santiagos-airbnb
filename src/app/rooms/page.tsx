'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { PageIntro } from '@/components/page-intro'
import {
  Bed,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Users,
  Wind,
  Maximize2,
  Sparkles,
} from 'lucide-react'

export default function RoomsPage() {
  const [selectedZone, setSelectedZone] = useState<number>(0)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; label: string } | null>(null)
  const zoneRefs = useRef<Array<HTMLButtonElement | null>>([])

  const roomZones = [
    {
      id: 'vip1',
      name: 'VIP 1',
      tabLabel: 'VIP 1',
      tabSub: '1 Double • Private Bath',
      capacity: 'Ideal for parents, elders, or couple hosts',
      beds: '1 Double Bed',
      bathrooms: 'Private Bathroom with Rainfall Shower',
      features: [
        'Dedicated split-type air conditioner with quiet night mode',
        'Direct private bathroom with hot rainfall shower',
        'Large window overlooking the compound courtyard',
        'Hotel-grade cotton linens, pillows, and acoustic privacy',
      ],
      image: getLocalImageUrl('bed3'), // 411.3 KB High-Res VIP 1 Double Bed
      badge: 'VIP Bedroom',
    },
    {
      id: 'vip2',
      name: 'VIP 2',
      tabLabel: 'VIP 2',
      tabSub: '1 Double • Private Bath',
      capacity: 'Ideal for parents, elders, or VIP couples',
      beds: '1 Double Bed',
      bathrooms: 'Private Bathroom',
      features: [
        'Dedicated split-type air conditioning',
        'Full private bathroom with modern tiling and vanity',
        'Wood-paneled accent walls & warm ambient lighting',
        'Plush mattress with fresh sanitized sheets & duvet',
      ],
      image: getLocalImageUrl('bed7'), // 554.5 KB High-Res VIP 2
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
        'Sturdy steel-and-wood frame bunk beds - zero squeaks or wobbles',
        'Individual reading lights and charging outlets per bed pod',
        'Multi-unit high-capacity split air conditioners keep the room 18°C',
        '4 full bathrooms immediately adjacent to prevent morning lines',
      ],
      image: getLocalImageUrl('bed1'), // 387.8 KB High-Res Bunk Pods Hallway
      badge: '16-Bed Capacity',
    },
  ]

  // Verified Sleeping Perspectives Registry
  const allBedrooms = [
    { key: 'bed3', label: 'VIP 1 - Double Bed with Private Bathroom', tag: 'VIP 1' },
    { key: 'bed7', label: 'VIP 2 - Double Bed with Private Bathroom', tag: 'VIP 2' },
    { key: 'bed4', label: 'VIP 1 Smart TV on Slatted Wood Accent Wall', tag: 'VIP 1' },
    { key: 'bed8', label: 'VIP 2 Bedside Nightstand & Headboard Close-Up', tag: 'VIP 2' },
    { key: 'bed1', label: 'Bunk Zone Hallway - Multi-Deck Heavy Duty Pods', tag: 'Bunk Zone' },
    { key: 'bed2', label: 'Bunk Room Ante-Room - Glass Sliding Door to Gym', tag: 'Bunk Zone' },
    { key: 'bed5', label: 'Bunk Pods - Crisp White Linens & Slatted Headboards', tag: 'Bunk Zone' },
    { key: 'bed6', label: 'Bunk Room Entryway - 4 Built-In Bunk Pods', tag: 'Bunk Zone' },
    { key: 'bed9', label: 'Spacious Group Bunk Room - High Capacity Pods', tag: 'Bunk Zone' },
    { key: 'lou1', label: 'VIP Bedroom - 4K Smart TV & Plush Bedding', tag: 'VIP 1' },
  ]

  const bathroomDetails = [
    {
      title: '2 VIP Private Bathrooms',
      desc: 'Located inside VIP 1 & 2 for total privacy and immediate access.',
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
    { key: 'bat1', label: 'VIP Private Bathroom Rainfall Shower with Hot Water System' },
    { key: 'bat2', label: 'Modern Private Ceramic Vanity & LED Backlit Mirror' },
    { key: 'bat3', label: 'Full Private Bathroom with Glass Shower & Bidet Toilet' },
    { key: 'bat8', label: 'Private Bathroom with LED Mirror & Rainfall Shower Stall' },
    { key: 'bat7', label: 'Common Restroom & Shower Corridor with Dedicated Stalls' },
  ]

  const currentZone = roomZones[selectedZone]

  const selectZone = (index: number) => {
    setSelectedZone(index)
    zoneRefs.current[index]?.focus()
  }

  const handleZoneKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % roomZones.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + roomZones.length) % roomZones.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = roomZones.length - 1
    if (nextIndex === null) return
    event.preventDefault()
    selectZone(nextIndex)
  }

  return (
    <div className="page-shell">
      <PageIntro
        meta="3 sleeping zones, 20 beds, 8 bathrooms"
        title="See where everyone sleeps."
        description="Compare each sleeping zone, bed setup, bathroom access, and the type of guest it suits best."
      />

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
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-0.5">
              Choose a sleeping zone
            </h2>
          </div>
          <div className="text-xs text-ink-muted font-medium bg-sand/40 px-3 py-1.5 rounded-full self-start sm:self-auto">
            All bedrooms are air-conditioned
          </div>
        </div>

        {/* Zone Selector Buttons with Clear Mobile Layout */}
        <div role="tablist" aria-label="Sleeping zones" className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {roomZones.map((zone, idx) => {
            const isActive = selectedZone === idx
            return (
              <button
                key={zone.id}
                ref={(element) => { zoneRefs.current[idx] = element }}
                type="button"
                role="tab"
                id={`room-zone-tab-${zone.id}`}
                aria-selected={isActive}
                aria-controls="room-zone-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectZone(idx)}
                onKeyDown={(event) => handleZoneKeyDown(event, idx)}
                className={`relative isolate p-3 sm:p-4 text-left rounded-2xl sm:rounded-full transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-200 active:scale-95 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 overflow-hidden ${
                  isActive
                    ? 'text-cream shadow-warm-sm border border-transparent'
                    : 'bg-cream/40 border border-sand text-ink hover:bg-sand/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-room-zone"
                    className="absolute inset-0 bg-ink rounded-2xl sm:rounded-full z-0 shadow-warm-sm"
                    transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.65 }}
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
            id="room-zone-panel"
            role="tabpanel"
            aria-labelledby={`room-zone-tab-${currentZone.id}`}
            initial={{ opacity: 0, transform: 'translateY(8px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            exit={{ opacity: 0, transform: 'translateY(-6px)' }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-2"
          >
            <button
              type="button"
              onClick={() => setLightboxImage({ src: currentZone.image, label: currentZone.name })}
              aria-label={`Open photo: ${currentZone.name}`}
              className="media-button lg:col-span-6 relative h-56 sm:h-80 md:h-96 bg-sand/20 group"
            >
              <Image
                src={currentZone.image}
                alt={currentZone.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="media-image object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-ink/80 backdrop-blur-md text-gold-light text-xs font-bold">
                {currentZone.badge}
              </div>
              <div className="absolute bottom-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-light" />
              </div>
            </button>

            <div className="lg:col-span-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold leading-tight text-ink sm:text-2xl lg:text-3xl">
                  {currentZone.name}
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted mt-1 font-sans">
                  {currentZone.capacity}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-2 border-y border-sand">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-ink-muted">Beds</div>
                  <div className="text-xs sm:text-sm font-semibold text-ink flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-terra shrink-0" />
                    <span>{currentZone.beds}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-ink-muted">Bathroom access</div>
                  <div className="text-xs sm:text-sm font-semibold text-ink flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-terra shrink-0" />
                    <span>{currentZone.bathrooms}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-bold text-ink">What this room includes</div>
                <ul className="space-y-2 text-sm leading-6 text-ink-muted">
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
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
              All bedroom views
            </h2>
          </div>
          <span className="text-xs font-bold text-ink-muted bg-sand/40 px-3 py-1.5 rounded-full self-start sm:self-auto">
            Open any photo to enlarge
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {allBedrooms.map((bed) => (
            <button
              key={bed.key}
              type="button"
              onClick={() => setLightboxImage({ src: getLocalImageUrl(bed.key), label: bed.label })}
              aria-label={`Open photo: ${bed.label}`}
              className="media-button bg-white border border-sand shadow-warm-sm group flex flex-col justify-between"
            >
              <div className="relative h-36 sm:h-52 w-full bg-sand/20 overflow-hidden">
                <Image
                  src={getLocalImageUrl(bed.key)}
                  alt={bed.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="media-image object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-ink/75 backdrop-blur-md text-gold-light text-[9px] sm:text-[10px] font-bold">
                  {bed.tag}
                </div>
                <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-ink/70 text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </div>
              </div>
              <div className="p-2.5 sm:p-3.5">
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-ink">
                  {bed.label}
                </h3>
              </div>
            </button>
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
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
            Eight bathrooms across the compound.
          </h2>
          <p className="max-w-[65ch] text-base leading-7 text-ink-muted">
            Bathrooms are distributed near VIP 1 & 2, the bunk zone, main hall, and pool so large groups can get ready more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {bathroomDetails.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="interactive-card group space-y-2.5 rounded-2xl border border-sand/70 bg-white p-5 shadow-warm-sm sm:rounded-3xl sm:p-6"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-terra/15 text-terra-dark flex items-center justify-center group-hover:scale-110 group-hover:bg-terra group-hover:text-white transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-300">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-base font-bold text-ink sm:text-lg">{b.title}</h3>
                <p className="text-sm leading-6 text-ink-muted">{b.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bathroom Photos Preview with Lightbox Trigger (2-Column Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
          {bathroomPhotos.map((bp) => (
            <button
              key={bp.key}
              type="button"
              onClick={() => setLightboxImage({ src: getLocalImageUrl(bp.key), label: bp.label })}
              aria-label={`Open photo: ${bp.label}`}
              className="media-button relative h-40 sm:h-64 border border-sand shadow-sm bg-sand/20 group"
            >
              <Image
                src={getLocalImageUrl(bp.key)}
                alt={bp.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="media-image object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent p-3 sm:p-4 flex flex-col justify-end">
                <span className="text-[11px] sm:text-sm font-bold text-cream block line-clamp-2">{bp.label}</span>
              </div>
              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Portal Lightbox (immune to stacking contexts) */}
      <FullscreenLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage ? lightboxImage.src : null}
        title={lightboxImage?.label}
        category="Resort Suite & Pods"
      />
    </div>
  )
}

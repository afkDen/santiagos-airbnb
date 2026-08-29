'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight, BedDouble, BedSingle, CircleDot, CookingPot, Dumbbell, Flame, Gamepad2, Images,
  Maximize2, Mic2, TableProperties, Waves, type LucideIcon,
} from 'lucide-react'
import {
  AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring,
} from 'motion/react'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { getLocalImageUrl } from '@/content/gallery'

type ZoneKind = 'indoor' | 'outdoor'

interface ExplorerZone {
  id: string
  title: string
  mapLabel: string
  locationHint: string
  description: string
  icon: LucideIcon
  kind: ZoneKind
  position: { x: number; y: number }
  compactPosition?: { x: number; y: number }
  facts: string[]
  photos: Array<{ src: string; alt: string }>
}

const MAP_VIEW = {
  src: getLocalImageUrl('gal_ext1'),
  alt: 'Elevated night view of the illuminated Santiagos Resort compound',
}

const ZONES: ExplorerZone[] = [
  {
    id: 'vip-rooms', title: 'VIP rooms & hall', mapLabel: 'VIP rooms + hall', locationHint: 'Upper floor · left', icon: BedDouble,
    kind: 'indoor',
    description: 'The VIP rooms and their connecting hall occupy the left side of the upper floor, directly above the poolside games room.',
    position: { x: 38, y: 20.3 },
    compactPosition: { x: 35.3, y: 18.7 },
    facts: ['VIP room wing', 'Upper-floor hall', 'Full-height windows'],
    photos: [
      { src: getLocalImageUrl('bed7'), alt: 'VIP bedroom with a queen bed and full-height windows' },
      { src: getLocalImageUrl('bed3'), alt: 'VIP master bedroom with a fluted headboard and draped windows' },
      { src: getLocalImageUrl('gal_int1'), alt: 'Upper-floor hall and stair landing with picture windows' },
    ],
  },
  {
    id: 'gym', title: 'Private gym', mapLabel: 'Private gym', locationHint: 'Upper floor · center', icon: Dumbbell,
    kind: 'indoor',
    description: 'The glass-enclosed gym sits at the center of the upper floor, between the VIP side and the group bunk room.',
    position: { x: 44.6, y: 22.2 },
    compactPosition: { x: 43.4, y: 20.5 },
    facts: ['Turf flooring', 'Free weights', 'Cardio equipment'],
    photos: [
      { src: getLocalImageUrl('gym3'), alt: 'Full gym with free weights, a multi-station, and an elliptical' },
      { src: getLocalImageUrl('gym1'), alt: 'Indoor gym with turf flooring and a mirrored wall' },
      { src: getLocalImageUrl('gym2'), alt: 'Glass-enclosed gym viewed from the upper-floor lounge' },
    ],
  },
  {
    id: 'bunks', title: 'Bunk room', mapLabel: 'Group bunk room', locationHint: 'Upper floor · right', icon: BedSingle,
    kind: 'indoor',
    description: 'The group bunk room occupies the right side of the upper floor, past the gym and toward the covered dining wing.',
    position: { x: 56.8, y: 24.2 },
    compactPosition: { x: 58.4, y: 22.3 },
    facts: ['Double-deck beds', 'Built for groups', 'Upper-floor right wing'],
    photos: [
      { src: getLocalImageUrl('bed9'), alt: 'Group bunk room with multiple double-deck beds' },
      { src: getLocalImageUrl('bed6'), alt: 'Bunk-room doorway flanked by built-in double-deck beds' },
      { src: getLocalImageUrl('bed5'), alt: 'Lower bunk pods with white linens and wood slat details' },
    ],
  },
  {
    id: 'games', title: 'Billiards and arcade', mapLabel: 'Billiards + arcade', locationHint: 'Ground floor · left wing', icon: Gamepad2,
    kind: 'indoor',
    description: 'The billiards table and arcade stations occupy the poolside ground-floor room at the left end of the main building.',
    position: { x: 43.6, y: 34.9 },
    compactPosition: { x: 42.2, y: 32.2 },
    facts: ['Billiards table', 'Arcade stations', 'Beside the pool'],
    photos: [
      { src: getLocalImageUrl('bill2'), alt: 'Billiards and arcade games area' },
      { src: getLocalImageUrl('arc3'), alt: 'Arcade stations beside the billiards table' },
      { src: getLocalImageUrl('arc4'), alt: 'Full view of the poolside games room' },
    ],
  },
  {
    id: 'acacia-dining', title: 'Acacia dining room', mapLabel: 'Acacia dining', locationHint: 'Inside · left of stairs', icon: TableProperties,
    kind: 'indoor',
    description: 'The indoor dining room with its long live-edge acacia table sits immediately to the left of the central staircase.',
    position: { x: 55.9, y: 31.9 },
    compactPosition: { x: 57.3, y: 29.4 },
    facts: ['Live-edge acacia table', 'Air-conditioned', 'Left of the interior stairs'],
    photos: [
      { src: getLocalImageUrl('din2'), alt: 'Full view of the indoor acacia dining table' },
      { src: getLocalImageUrl('din1'), alt: 'Live-edge acacia table beside the interior stairs' },
    ],
  },
  {
    id: 'karaoke', title: 'Karaoke lounge', mapLabel: 'Karaoke lounge', locationHint: 'Inside · right of stairs', icon: Mic2,
    kind: 'indoor',
    description: 'The air-conditioned karaoke lounge is to the right of the staircase, behind the ground-floor sliding door.',
    position: { x: 61.9, y: 33.2 },
    compactPosition: { x: 64.7, y: 30.6 },
    facts: ['Videoke system', 'Air-conditioned', 'Right of the interior stairs'],
    photos: [
      { src: getLocalImageUrl('kara1'), alt: 'Air-conditioned karaoke lounge and television' },
      { src: getLocalImageUrl('kara2'), alt: 'Wrap-around seating inside the karaoke lounge' },
      { src: getLocalImageUrl('kara3'), alt: 'Karaoke microphones ready for guests' },
    ],
  },
  {
    id: 'outdoor-dining', title: 'Outdoor dining', mapLabel: 'Outdoor dining', locationHint: 'Covered right wing', icon: CookingPot,
    kind: 'outdoor',
    description: 'The covered dining and group-kitchen wing extends from the far-right side of the main building for open-air meals.',
    position: { x: 73.6, y: 46.5 },
    compactPosition: { x: 79.1, y: 43 },
    facts: ['Covered tables', 'Group kitchen', 'Zero corkage'],
    photos: [
      { src: getLocalImageUrl('out1'), alt: 'Covered al fresco dining patio and group bar' },
      { src: getLocalImageUrl('out8'), alt: 'Covered outdoor grilling station and firewood hearth' },
      { src: getLocalImageUrl('din4'), alt: 'Open-air glass dining table beneath the covered patio' },
    ],
  },
  {
    id: 'pool', title: 'Private pool', mapLabel: 'Pool + waterfall', locationHint: 'Central courtyard', icon: Waves,
    kind: 'outdoor',
    description: 'The pool is the physical center of the compound, with direct sightlines to the room block, social spaces, court, and bonfire yard.',
    position: { x: 42.9, y: 57.7 },
    compactPosition: { x: 41.2, y: 53.3 },
    facts: ['Private use', 'Waterfall feature', 'Central deck'],
    photos: [
      { src: getLocalImageUrl('pool4'), alt: 'Illuminated pool deck at night' },
      { src: getLocalImageUrl('pool1'), alt: 'Daytime private pool and waterfall deck' },
      { src: getLocalImageUrl('pool7'), alt: 'Pool steps and bamboo-lined deck lighting at night' },
    ],
  },
  {
    id: 'court', title: 'Basketball court', mapLabel: 'Private half-court', locationHint: 'Left of the pool', icon: CircleDot,
    kind: 'outdoor',
    description: 'The fenced half-court sits in its own corner beside the pool, keeping active play close without taking over the gathering areas.',
    position: { x: 18.2, y: 71.4 },
    compactPosition: { x: 10.9, y: 65.9 },
    facts: ['Private half-court', 'Fenced perimeter', 'Inside the compound'],
    photos: [
      { src: getLocalImageUrl('bbl1'), alt: 'Private basketball half-court and glass backboard' },
      { src: getLocalImageUrl('bbl2'), alt: 'Fenced outdoor basketball court' },
    ],
  },
  {
    id: 'bonfire', title: 'Bonfire yard', mapLabel: 'Bonfire yard', locationHint: 'Poolside open yard', icon: Flame,
    kind: 'outdoor',
    description: 'The gravel gathering yard fills the open space between the pool and dining wing, giving the group a relaxed place to settle after dinner.',
    position: { x: 61.9, y: 60.6 },
    compactPosition: { x: 64.6, y: 55.9 },
    facts: ['Outdoor fire pit', 'Group seating', 'Beside the pool'],
    photos: [
      { src: getLocalImageUrl('fir1'), alt: 'Outdoor bonfire pit and group seating' },
      { src: getLocalImageUrl('out7'), alt: 'Bonfire yard beside the illuminated pool' },
      { src: getLocalImageUrl('out2'), alt: 'Night bonfire gathering beside the covered dining wing' },
    ],
  },
]

const PHOTO_COUNT = ZONES.reduce((total, zone) => total + zone.photos.length, 0)

export function CompoundExplorer() {
  const [selectedZoneIndex, setSelectedZoneIndex] = useState(0)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const zoneButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const mapSurfaceRef = useRef<HTMLDivElement>(null)
  const mapBoundsRef = useRef<DOMRect | null>(null)
  const pointerFrameRef = useRef<number | null>(null)
  const pendingPointerRef = useRef({ x: 0, y: 0 })
  const tiltXTarget = useMotionValue(0)
  const tiltYTarget = useMotionValue(0)
  const tiltX = useSpring(tiltXTarget, { duration: 0.5, bounce: 0.1 })
  const tiltY = useSpring(tiltYTarget, { duration: 0.5, bounce: 0.1 })
  const mapTransform = useMotionTemplate`rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
  const selectedZone = ZONES[selectedZoneIndex]
  const lightboxPhoto = lightboxIndex === null ? null : selectedZone.photos[lightboxIndex]

  useEffect(() => {
    const mapSurface = mapSurfaceRef.current
    if (!mapSurface) return
    const updateBounds = () => { mapBoundsRef.current = mapSurface.getBoundingClientRect() }
    const resizeObserver = new ResizeObserver(updateBounds)
    resizeObserver.observe(mapSurface)
    updateBounds()
    return () => {
      resizeObserver.disconnect()
      if (pointerFrameRef.current !== null) cancelAnimationFrame(pointerFrameRef.current)
    }
  }, [])

  const selectZone = (index: number) => {
    setSelectedZoneIndex(index)
    setSelectedPhotoIndex(0)
    setLightboxIndex(null)
  }

  const handleMapPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType !== 'mouse') return
    pendingPointerRef.current = { x: event.clientX, y: event.clientY }
    if (pointerFrameRef.current !== null) return
    pointerFrameRef.current = requestAnimationFrame(() => {
      pointerFrameRef.current = null
      const bounds = mapBoundsRef.current
      if (!bounds) return
      const horizontal = (pendingPointerRef.current.x - bounds.left) / bounds.width - 0.5
      const vertical = (pendingPointerRef.current.y - bounds.top) / bounds.height - 0.5
      tiltXTarget.set(vertical * -2.5)
      tiltYTarget.set(horizontal * 4)
    })
  }

  const resetMapTilt = () => {
    if (pointerFrameRef.current !== null) cancelAnimationFrame(pointerFrameRef.current)
    pointerFrameRef.current = null
    tiltXTarget.set(0)
    tiltYTarget.set(0)
  }

  const handleZoneKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let nextIndex = index
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = ZONES.length - 1
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % ZONES.length
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + ZONES.length) % ZONES.length
    selectZone(nextIndex)
    zoneButtonRefs.current[nextIndex]?.focus()
  }

  const handleNextLightboxPhoto = () => setLightboxIndex((current) =>
    current === null || current === selectedZone.photos.length - 1 ? 0 : current + 1)
  const handlePreviousLightboxPhoto = () => setLightboxIndex((current) =>
    current === null || current === 0 ? selectedZone.photos.length - 1 : current - 1)

  return (
    <section id="compound-explorer" className="section-space scroll-mt-20 overflow-hidden bg-[#130e0b] text-cream">
      <div className="site-container">
        <div className="mb-7 grid gap-5 lg:mb-9 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <h2 className="max-w-[15ch] text-balance font-serif text-4xl font-bold leading-[0.98] tracking-[-0.035em] text-cream sm:text-5xl lg:text-7xl">
            See how the whole place connects.
          </h2>
          <div className="space-y-4 lg:pb-1">
            <p className="text-base leading-7 text-sand-light/80">
              Explore the real compound from above. Each marker follows the property&apos;s actual layout and opens its own photo set.
            </p>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.08em] text-gold">
              <Images className="h-4 w-4" aria-hidden="true" /> {ZONES.length} PLACES · {PHOTO_COUNT} PROPERTY PHOTOS
            </div>
          </div>
        </div>

        <div className="relative [perspective:1600px]" ref={mapSurfaceRef}>
          <div className="absolute inset-x-[5%] bottom-[-5%] h-1/2 bg-black/60 blur-3xl" aria-hidden="true" />
          <motion.figure
            style={{ transform: mapTransform, transformStyle: 'preserve-3d' }}
            onPointerEnter={(event) => { mapBoundsRef.current = event.currentTarget.getBoundingClientRect() }}
            onPointerMove={handleMapPointerMove}
            onPointerLeave={resetMapTilt}
            className="relative aspect-[4/3] overflow-hidden bg-ink shadow-[0_32px_80px_rgba(0,0,0,0.42)] will-change-transform lg:aspect-[16/9]"
            data-motion="spatial"
          >
            <Image src={MAP_VIEW.src} alt={MAP_VIEW.alt} fill priority sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover object-top" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(19,14,11,0.3)_0%,transparent_32%,transparent_55%,rgba(19,14,11,0.92)_100%)]" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />

            <div className="absolute left-4 top-4 z-40 sm:left-6 sm:top-6">
              <p className="font-display text-[10px] font-bold tracking-[0.18em] text-white/65 sm:text-xs">SANTIAGOS COMPOUND</p>
              <p className="mt-1 text-xs font-semibold text-white sm:text-sm">Alfonso, Cavite</p>
            </div>

            <div className="absolute right-3 top-3 z-40 flex items-center gap-3 bg-[#130e0b]/90 px-3 py-2 shadow-warm-lg sm:right-6 sm:top-6" aria-label="Map marker legend">
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-cream sm:text-xs">
                <span className="h-2.5 w-2.5 rounded-full border border-cream bg-cream" aria-hidden="true" /> Indoor
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-cream sm:text-xs">
                <span className="h-2.5 w-2.5 rounded-full border border-cream bg-transparent" aria-hidden="true" /> Outdoor
              </span>
            </div>

            {ZONES.map((zone, index) => {
              const active = selectedZoneIndex === index
              const Icon = zone.icon
              const position = zone.position
              const compactPosition = zone.compactPosition ?? position
              const placeLabelBelow = position.y < 26
              const markerStyle = zone.kind === 'indoor'
                ? active
                  ? 'scale-100 border-gold bg-terra text-white shadow-[0_8px_24px_rgba(0,0,0,0.38)]'
                  : 'scale-[0.8] border-cream bg-cream text-ink shadow-[0_6px_18px_rgba(0,0,0,0.32)] hover:bg-gold-light sm:scale-[0.84]'
                : active
                  ? 'scale-100 border-2 border-terra bg-[#130e0b]/72 text-white shadow-[0_8px_24px_rgba(0,0,0,0.38)]'
                  : 'scale-[0.8] border-white/80 bg-[#130e0b]/48 text-white shadow-[0_6px_18px_rgba(0,0,0,0.32)] hover:border-gold sm:scale-[0.84]'
              return (
                <button
                  key={zone.id}
                  type="button"
                  data-compound-marker={zone.id}
                  data-marker-kind={zone.kind}
                  onClick={() => selectZone(index)}
                  aria-pressed={active}
                  aria-label={`Explore ${zone.title}, ${zone.locationHint}, ${zone.kind}`}
                  className={`group absolute left-[var(--marker-x-compact)] top-[var(--marker-y-compact)] z-20 flex h-11 w-11 items-center justify-center focus-visible:z-50 lg:left-[var(--marker-x)] lg:top-[var(--marker-y)] ${active ? 'z-30' : ''}`}
                  style={{
                    '--marker-x': `${position.x}%`,
                    '--marker-y': `${position.y}%`,
                    '--marker-x-compact': `${compactPosition.x}%`,
                    '--marker-y-compact': `${compactPosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                  } as CSSProperties}
                >
                  <span className={`absolute left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-sm px-3 py-2 text-left shadow-warm-md transition-[opacity,background-color] duration-200 sm:block ${placeLabelBelow ? 'top-full mt-2' : 'bottom-full mb-2'} ${active ? 'bg-cream text-ink' : 'pointer-events-none bg-[#130e0b]/92 text-cream opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'}`}>
                    <span className={`block text-[8px] font-bold uppercase tracking-[0.14em] ${active ? 'text-terra-dark' : 'text-gold-light'}`}>{zone.locationHint}</span>
                    <span className="mt-0.5 block text-[11px] font-bold tracking-[0.01em]">{zone.mapLabel}</span>
                  </span>
                  <span className={`relative flex h-10 w-10 items-center justify-center rounded-full border sm:h-12 sm:w-12 transition-[background-color,border-color,color,transform,box-shadow] duration-200 ${markerStyle}`}>
                    {active ? <motion.span initial={{ opacity: 0.3, transform: 'scale(0.92)' }} animate={{ opacity: 1, transform: 'scale(1)' }} transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} className="absolute -inset-2 rounded-full border border-gold/75" data-motion="feedback" aria-hidden="true" /> : null}
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </button>
              )
            })}

            <AnimatePresence mode="wait" initial={false}>
              <motion.figcaption key={selectedZone.id} initial={{ opacity: 0, transform: 'translateY(12px)' }} animate={{ opacity: 1, transform: 'translateY(0)' }} exit={{ opacity: 0, transform: 'translateY(8px)' }} transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} className="pointer-events-none absolute inset-x-0 bottom-0 z-40 hidden items-end justify-between gap-6 bg-[linear-gradient(180deg,transparent_0%,rgba(19,14,11,0.93)_28%,#130e0b_100%)] px-6 pb-5 pt-10 lg:flex xl:px-8 xl:pb-6" data-motion="feedback">
                <div className="max-w-[34rem]">
                  <p className="font-display text-xs font-bold tabular-nums tracking-[0.12em] text-gold">{String(selectedZoneIndex + 1).padStart(2, '0')} / {String(ZONES.length).padStart(2, '0')}</p>
                  <h3 className="mt-1 font-serif text-2xl font-bold tracking-[-0.025em] text-white xl:text-3xl">{selectedZone.title}</h3>
                  <p className="mt-1.5 max-w-[62ch] text-sm leading-5 text-white/75 xl:leading-6">{selectedZone.description}</p>
                  <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] font-bold text-cream">
                    {selectedZone.facts.map((fact) => <li key={fact} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />{fact}</li>)}
                  </ul>
                </div>
                <div className="pointer-events-auto flex shrink-0 items-end gap-2" aria-label={`${selectedZone.title} photos`}>
                  {selectedZone.photos.map((photo, index) => {
                    const active = selectedPhotoIndex === index
                    return (
                      <button key={photo.src} type="button" onClick={() => active ? setLightboxIndex(index) : setSelectedPhotoIndex(index)} aria-pressed={active} aria-label={active ? `Open ${photo.alt} fullscreen` : `Show photo ${index + 1}: ${photo.alt}`} className={`group/photo relative overflow-hidden bg-sand/20 transition-[opacity,box-shadow] duration-200 ${active ? 'h-20 w-28 ring-2 ring-gold ring-offset-2 ring-offset-[#130e0b] xl:h-24 xl:w-32' : 'h-16 w-20 opacity-60 hover:opacity-100 xl:h-20 xl:w-24'}`}>
                        <Image src={photo.src} alt="" fill sizes="160px" className="object-cover" />
                        {active ? <span className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-200 group-hover/photo:opacity-100 group-focus-visible/photo:opacity-100"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#130e0b]/90 text-white"><Maximize2 className="h-4 w-4" aria-hidden="true" /></span></span> : null}
                      </button>
                    )
                  })}
                </div>
              </motion.figcaption>
            </AnimatePresence>
          </motion.figure>
        </div>

        <div role="tablist" aria-label="Compound areas" className="relative z-10 flex snap-x overflow-x-auto border-b border-x border-white/10 bg-[#130e0b] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.18)_transparent]">
          {ZONES.map((zone, index) => {
            const active = selectedZoneIndex === index
            const Icon = zone.icon
            return (
              <button key={zone.id} ref={(element) => { zoneButtonRefs.current[index] = element }} type="button" role="tab" id={`compound-zone-tab-${zone.id}`} aria-selected={active} aria-controls="compound-mobile-zone-panel" tabIndex={active ? 0 : -1} onClick={() => selectZone(index)} onKeyDown={(event) => handleZoneKeyDown(event, index)} className={`relative flex min-h-[4.5rem] min-w-[9.25rem] flex-1 snap-start items-center gap-2.5 border-r border-t border-white/10 px-3 text-left text-xs font-bold transition-[background-color,color] duration-200 last:border-r-0 sm:min-w-[10rem] sm:px-4 xl:min-w-0 ${active ? 'bg-cream text-ink' : 'text-sand-light/65 hover:bg-white/[0.045] hover:text-white'}`}>
                <Icon className={`h-4 w-4 shrink-0 ${active ? 'text-terra' : 'text-gold'}`} strokeWidth={1.8} aria-hidden="true" />
                <span>{zone.title}</span>
                {active ? <motion.span layoutId="compound-zone-line" className="absolute inset-x-0 top-0 h-0.5 bg-terra" /> : null}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={selectedZone.id} id="compound-mobile-zone-panel" role="tabpanel" aria-labelledby={`compound-zone-tab-${selectedZone.id}`} initial={{ opacity: 0, transform: 'translateY(8px)' }} animate={{ opacity: 1, transform: 'translateY(0)' }} exit={{ opacity: 0, transform: 'translateY(6px)' }} transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }} className="border-b border-x border-white/10 px-4 py-5 sm:px-6 lg:hidden" data-motion="feedback">
            <div className="flex items-start justify-between gap-5">
              <div><p className="font-display text-[10px] font-bold tracking-[0.12em] text-gold">{selectedZone.mapLabel.toUpperCase()}</p><h3 className="mt-2 font-serif text-3xl font-bold tracking-[-0.025em] text-white">{selectedZone.title}</h3></div>
              <span className="font-display text-xs font-bold tabular-nums text-white/45">{String(selectedZoneIndex + 1).padStart(2, '0')} / {String(ZONES.length).padStart(2, '0')}</span>
            </div>
            <p className="mt-3 max-w-[62ch] text-sm leading-6 text-white/70">{selectedZone.description}</p>
            <div className={`mt-5 grid gap-2 ${selectedZone.photos.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
              {selectedZone.photos.map((photo, index) => (
                <button key={photo.src} type="button" onClick={() => { setSelectedPhotoIndex(index); setLightboxIndex(index) }} aria-label={`Open ${photo.alt} fullscreen`} className="media-button group relative aspect-[4/3] overflow-hidden bg-sand/20">
                  <Image src={photo.src} alt="" fill sizes="33vw" className="object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"><Maximize2 className="h-4 w-4 text-white" aria-hidden="true" /></span>
                </button>
              ))}
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-cream">
              {selectedZone.facts.map((fact) => <li key={fact} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />{fact}</li>)}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 flex justify-end">
          <Link href="/gallery" className="group inline-flex min-h-11 items-center gap-2 text-sm font-bold text-cream transition-colors duration-200 hover:text-gold">
            Continue through the full gallery
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <FullscreenLightbox
        isOpen={lightboxPhoto !== null}
        onClose={() => setLightboxIndex(null)}
        src={lightboxPhoto?.src ?? null}
        title={lightboxPhoto?.alt}
        category={selectedZone.title}
        index={lightboxIndex ?? undefined}
        total={selectedZone.photos.length}
        onPrev={handlePreviousLightboxPhoto}
        onNext={handleNextLightboxPhoto}
        caption="Use the arrow keys to move through this part of the compound"
      />
    </section>
  )
}

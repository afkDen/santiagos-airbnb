'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'
import { StatCounter } from '@/components/stat-counter'
import { VideoTourModal } from '@/components/video-tour-modal'
import {
  MessageCircle,
  Users,
  Droplets,
  Bed,
  Gamepad2,
  Camera,
  Compass,
  Sparkles,
  ShieldCheck,
  Flame,
  CheckCircle2,
} from 'lucide-react'

export function Hero() {
  const heroViews = [
    {
      id: 'pool',
      label: 'Pool Deck',
      badge: 'Waterfall & Sun Deck',
      fullName: 'Private Swimming Pool & Waterfall Deck',
      src: getLocalImageUrl('pool1'), // 408.6 KB High-Res
    },
    {
      id: 'dining',
      label: 'Banquet Hall',
      badge: '10-Seater Glass Table',
      fullName: '10-Seater Banquet Dining & Chef Kitchen',
      src: getLocalImageUrl('din1'), // 379.2 KB High-Res
    },
    {
      id: 'billiards',
      label: 'Billiards & Arcade',
      badge: 'Kangaroo Pool & Games',
      fullName: 'Kangaroo Billiards & Multiplayer Gaming',
      src: getLocalImageUrl('bill2'), // 219.4 KB
    },
    {
      id: 'exterior',
      label: 'Container Estate',
      badge: 'Industrial Chic Architecture',
      fullName: 'Industrial Container Architectural Compound',
      src: getLocalImageUrl('ext3'), // 402.2 KB High-Res Upper Deck
    },
  ]

  const [activeViewIndex, setActiveViewIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [activeTilt, setActiveTilt] = useState<{ index: number; x: number; y: number } | null>(null)
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([])

  const currentView = heroViews[activeViewIndex]

  // Gentle 6-second auto-cycle that pauses on user hover or manual interaction
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveViewIndex((prev) => (prev + 1) % heroViews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, heroViews.length])

  const handleTileMouseMove = (idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const el = cardRefs.current[idx]
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setActiveTilt({ index: idx, x, y })
  }

  const handleTileMouseLeave = () => {
    setActiveTilt(null)
  }

  return (
    <section className="relative min-h-[92vh] md:min-h-[96dvh] flex flex-col justify-between overflow-hidden bg-ink text-cream">
      {/* Background Photography with Smooth Hardware-Accelerated Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroViews.map((view, idx) => (
          <div
            key={view.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              activeViewIndex === idx
                ? 'opacity-55 scale-105'
                : 'opacity-0 scale-100 pointer-events-none'
            }`}
          >
            <Image
              src={view.src}
              alt={view.fullName}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Ambient Warm Golden Radial Glow & Deep Contrast Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(194,110,56,0.38),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/40 pointer-events-none" />
      </div>

      {/* Main Hero Content (2-Column Desktop + Clean Mobile Stack) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-14 pb-6 sm:pb-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Action CTAs (6.5 Columns on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Live Estate Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-md border border-white/15 text-gold-light text-xs font-bold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest"></span>
              </span>
              <span>100% Whole-Compound Rental • 2026 Dates Open</span>
              <span className="hidden sm:inline-block border-l border-white/20 pl-2 text-sand-light/80 font-normal">
                Alfonso, Cavite
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-cream leading-[1.1] drop-shadow-md">
              The Whole-Property <br className="hidden sm:inline" />
              <span className="text-gold-light italic">Container Resort</span> Built for 40.
            </h1>

            {/* Value Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-sand-light/90 leading-relaxed font-sans max-w-2xl font-normal">
              Private pool, 8 full bathrooms, air-conditioned videoke lounge, Kangaroo billiards, retro arcades, and full chef&apos;s kitchen. Exclusive compound privacy with zero strangers.
            </p>

            {/* Action CTAs with Emil Kowalski Tactile Spring Physics */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm sm:text-base rounded-full shadow-warm-lg hover:shadow-xl transition-all duration-200 active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Inquire Dates on WhatsApp</span>
              </a>

              <VideoTourModal />

              <Link
                href="/gallery"
                className="hidden xl:inline-flex items-center justify-center gap-2 px-5 py-4 bg-cream/10 hover:bg-cream/20 border border-white/15 text-cream font-medium text-sm rounded-full backdrop-blur-sm transition-all duration-200 active:scale-95"
              >
                <Camera className="w-4 h-4 text-gold-light" />
                <span>59+ Real Photos</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Spatial 2x2 Perspective Deck with 3D Gyroscope Physics (5.5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-5 bg-ink/75 backdrop-blur-2xl border border-sand/30 rounded-3xl p-4 sm:p-5 space-y-3.5 shadow-2xl"
          >
            {/* Header / Angle Indicator */}
            <div className="flex items-center justify-between text-xs text-sand-light px-1">
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-gold-light text-[11px] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-gold-light" />
                  <span>Interactive 4-Zone Angle Deck</span>
                </span>
              </div>
              <span className="text-[10px] text-sand-light/70 bg-cream/10 px-2 py-0.5 rounded-full font-medium">
                {isPaused ? 'Paused' : 'Auto-Rotating'}
              </span>
            </div>

            {/* 2x2 Spatial Glass Tiles Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {heroViews.map((view, idx) => {
                const isActive = activeViewIndex === idx
                const isHovered = activeTilt?.index === idx
                const tiltStyle =
                  isHovered && activeTilt
                    ? {
                        transform: `perspective(800px) rotateX(${
                          activeTilt.y * -8
                        }deg) rotateY(${activeTilt.x * 8}deg) scale3d(1.03, 1.03, 1.03)`,
                        transition: 'transform 0.1s ease-out',
                      }
                    : {
                        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                        transition: 'transform 0.4s ease-out',
                      }

                return (
                  <button
                    key={view.id}
                    ref={(el) => {
                      cardRefs.current[idx] = el
                    }}
                    type="button"
                    onMouseMove={(e) => handleTileMouseMove(idx, e)}
                    onMouseLeave={handleTileMouseLeave}
                    onClick={() => {
                      setActiveViewIndex(idx)
                      setIsPaused(true)
                    }}
                    style={tiltStyle}
                    className={`group relative h-28 sm:h-32 rounded-2xl overflow-hidden border text-left transition-all duration-300 active:scale-95 flex flex-col justify-between p-2.5 sm:p-3 ${
                      isActive
                        ? 'border-gold shadow-[0_0_24px_rgba(212,175,55,0.45)] ring-1 ring-gold'
                        : 'border-sand/25 opacity-80 hover:opacity-100 hover:border-sand/60'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <Image
                      src={view.src}
                      alt={view.label}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent pointer-events-none" />

                    {/* Top Status Dot */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-terra text-white shadow-xs'
                            : 'bg-ink/75 text-gold-light backdrop-blur-md'
                        }`}
                      >
                        Zone {idx + 1}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      )}
                    </div>

                    {/* Bottom Label & Subtitle */}
                    <div className="relative z-10 space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-cream leading-tight group-hover:text-gold-light transition-colors">
                        {view.label}
                      </div>
                      <div className="text-[10px] text-sand-light/80 truncate font-sans">
                        {view.badge}
                      </div>
                    </div>

                    {/* Active Timer Progress Line */}
                    {isActive && !isPaused && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden z-20">
                        <motion.div
                          key={`progress-${activeViewIndex}`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 6, ease: 'linear' }}
                          className="h-full bg-gold"
                        />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Bottom Scrubber Caption */}
            <div className="px-1 text-[11px] text-sand-light/80 font-sans flex items-center justify-between">
              <span>
                Viewing: <strong className="text-gold-light">{currentView.label}</strong>
              </span>
              <span className="text-[10px] text-sand-light/60">
                Click any tile to switch view
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elevated Bento Spec Horizon (Interactive Luxury Stats Console) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-5 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="bg-ink/85 backdrop-blur-2xl border border-sand/30 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {/* Bento Card 1: 40 Guests */}
            <div className="flex flex-col justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-sand/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-terra/25 border border-terra/40 flex items-center justify-center text-terra-light group-hover:scale-110 group-hover:bg-terra/35 transition-all">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-forest-light bg-forest/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-forest/30">
                  Exclusive
                </span>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold-light leading-tight tabular-nums">
                  <StatCounter value={40} /> Guests
                </div>
                <div className="text-[11px] sm:text-xs text-sand-light font-medium mt-0.5">
                  Base 20 • Max 40 Total
                </div>
                <div className="text-[10px] text-sand-light/65 font-sans mt-0.5">
                  ~₱1,250/head full group
                </div>
              </div>
            </div>

            {/* Bento Card 2: 8 Full Bathrooms */}
            <div className="flex flex-col justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-sand/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-terra/25 border border-terra/40 flex items-center justify-center text-terra-light group-hover:scale-110 group-hover:bg-terra/35 transition-all">
                  <Droplets className="w-5 h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-gold-light bg-gold/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-gold/30">
                  Zero Queues
                </span>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold-light leading-tight tabular-nums">
                  <StatCounter value={8} /> Full Baths
                </div>
                <div className="text-[11px] sm:text-xs text-sand-light font-medium mt-0.5">
                  Zero-Queue Guarantee
                </div>
                <div className="text-[10px] text-sand-light/65 font-sans mt-0.5">
                  2 Master Ensuite + 6 Compound
                </div>
              </div>
            </div>

            {/* Bento Card 3: 20 Real Beds */}
            <div className="flex flex-col justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-sand/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-terra/25 border border-terra/40 flex items-center justify-center text-terra-light group-hover:scale-110 group-hover:bg-terra/35 transition-all">
                  <Bed className="w-5 h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-terra-light bg-terra/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-terra/30">
                  4 Zones
                </span>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold-light leading-tight tabular-nums">
                  <StatCounter value={20} /> Real Beds
                </div>
                <div className="text-[11px] sm:text-xs text-sand-light font-medium mt-0.5">
                  2 VIP + 9 Bunks + Driver
                </div>
                <div className="text-[10px] text-sand-light/65 font-sans mt-0.5">
                  100% Air-Conditioned
                </div>
              </div>
            </div>

            {/* Bento Card 4: 22+ Amenities */}
            <div className="flex flex-col justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-sand/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-terra/25 border border-terra/40 flex items-center justify-center text-terra-light group-hover:scale-110 group-hover:bg-terra/35 transition-all">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-forest-light bg-forest/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-forest/30">
                  ₱0 Corkage
                </span>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold-light leading-tight tabular-nums">
                  <StatCounter value={22} suffix="+" /> Amenities
                </div>
                <div className="text-[11px] sm:text-xs text-sand-light font-medium mt-0.5">
                  Pool, Videoke, Arcades
                </div>
                <div className="text-[10px] text-sand-light/65 font-sans mt-0.5">
                  Billiards, Grilling, Court
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

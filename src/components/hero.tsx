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
      badge: 'Industrial Architecture',
      fullName: 'Industrial Container Architectural Compound',
      src: getLocalImageUrl('ext3'), // 402.2 KB High-Res Upper Deck
    },
  ]

  const [activeViewIndex, setActiveViewIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [activeTilt, setActiveTilt] = useState<{ index: number; x: number; y: number } | null>(null)
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([])

  const currentView = heroViews[activeViewIndex]

  // Snappy 3.8-second auto-cycle that pauses on user hover or interaction
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveViewIndex((prev) => (prev + 1) % heroViews.length)
    }, 3800)
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
    <section className="relative lg:h-[calc(100dvh-72px)] lg:max-h-[calc(100dvh-72px)] min-h-[auto] flex flex-col justify-between overflow-hidden bg-ink text-cream">
      {/* Background Photography with Fast, Fluid Hardware-Accelerated AnimatePresence Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentView.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentView.src}
              alt={currentView.fullName}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Warm Golden Radial Glow & Contrast Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(194,110,56,0.38),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/40 pointer-events-none" />
      </div>

      {/* Main Hero Content (Auto-Proportioned for Complete Viewport Fit) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-4 xl:pt-6 pb-2 lg:pb-3 flex-1 flex flex-col justify-center min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Editorial Headline & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-3.5 sm:space-y-4 xl:space-y-5"
          >
            {/* Live Estate Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-white/15 text-gold-light text-[11px] sm:text-xs font-bold tracking-wide shadow-sm">
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
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight text-cream leading-[1.08] drop-shadow-md">
              The Whole-Property <br className="hidden sm:inline" />
              <span className="text-gold-light italic">Container Resort</span> Built for 40.
            </h1>

            {/* Value Subtext */}
            <p className="text-xs sm:text-sm lg:text-sm xl:text-base text-sand-light/90 leading-relaxed font-sans max-w-xl font-normal">
              Private pool, 8 full bathrooms, air-conditioned videoke lounge, Kangaroo billiards, retro arcades, and full chef&apos;s kitchen. Exclusive compound privacy with zero strangers.
            </p>

            {/* Action CTAs with Tactile Spring Physics */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-lg hover:shadow-xl transition-all duration-200 active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white group-hover:scale-110 transition-transform" />
                <span>Inquire Dates on WhatsApp</span>
              </a>

              <VideoTourModal />

              <Link
                href="/gallery"
                className="hidden xl:inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 bg-cream/10 hover:bg-cream/20 border border-white/15 text-cream font-medium text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all duration-200 active:scale-95"
              >
                <Camera className="w-4 h-4 text-gold-light" />
                <span>59+ Real Photos</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Spatial 2x2 Perspective Deck (Snappy Auto-Cycle + 3D Tilt) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-5 bg-ink/75 backdrop-blur-2xl border border-sand/30 rounded-2xl sm:rounded-3xl p-3 sm:p-4 space-y-2 sm:space-y-2.5 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between text-xs text-sand-light px-1">
              <span className="font-bold uppercase tracking-wider text-gold-light text-[10px] sm:text-[11px] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-gold-light" />
                <span>Multi-Angle Estate Views</span>
              </span>
              <span className="text-[10px] text-sand-light/60 font-sans">
                {isPaused ? 'Hover Paused' : 'Auto-Rotating'}
              </span>
            </div>

            {/* 2x2 Spatial Glass Tiles Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {heroViews.map((view, idx) => {
                const isActive = activeViewIndex === idx
                const isHovered = activeTilt?.index === idx
                const tiltStyle =
                  isHovered && activeTilt
                    ? {
                        transform: `perspective(800px) rotateX(${
                          activeTilt.y * -8
                        }deg) rotateY(${activeTilt.x * 8}deg) scale3d(1.02, 1.02, 1.02)`,
                        transition: 'transform 0.1s ease-out',
                      }
                    : {
                        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                        transition: 'transform 0.3s ease-out',
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
                    className={`group relative h-20 sm:h-24 lg:h-24 xl:h-28 2xl:h-30 rounded-xl sm:rounded-2xl overflow-hidden border text-left transition-all duration-200 active:scale-95 flex flex-col justify-end p-2 sm:p-2.5 ${
                      isActive
                        ? 'border-gold shadow-[0_0_18px_rgba(212,175,55,0.4)] ring-1 ring-gold scale-[1.02]'
                        : 'border-sand/25 opacity-75 hover:opacity-100 hover:border-sand/60'
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
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent pointer-events-none" />

                    {/* Clean Label & Subtitle */}
                    <div className="relative z-10 space-y-0.5">
                      <div
                        className={`text-xs sm:text-sm font-bold leading-tight transition-colors ${
                          isActive ? 'text-gold-light' : 'text-cream group-hover:text-gold-light'
                        }`}
                      >
                        {view.label}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-sand-light/85 truncate font-sans">
                        {view.badge}
                      </div>
                    </div>

                    {/* Active Snappy Progress Timer Line */}
                    {isActive && !isPaused && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white/20 overflow-hidden z-20">
                        <motion.div
                          key={`progress-${activeViewIndex}`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3.8, ease: 'linear' }}
                          className="h-full bg-gold"
                        />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Current Viewing Caption */}
            <div className="px-1 text-[10px] sm:text-[11px] text-sand-light/80 font-sans flex items-center justify-between pt-0.5">
              <span>
                Viewing: <strong className="text-gold-light font-semibold">{currentView.label}</strong>
              </span>
              <span className="text-[10px] text-sand-light/60">
                {activeViewIndex + 1} of {heroViews.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ultra-Sleek Floating Frosted Glass Spec Capsule (100% Above-the-Fold on Desktop) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-3 sm:pb-4 lg:pb-3 xl:pb-4 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="bg-ink/80 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-full shadow-2xl p-2 sm:px-6 sm:py-2.5"
        >
          <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-2 lg:gap-0">
            {/* Stat 1: 40 Guests */}
            <div className="flex items-center gap-2.5 sm:gap-3 py-1 px-1.5 sm:px-3 rounded-xl hover:bg-white/5 transition-colors cursor-default">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-terra/20 border border-terra/30 flex items-center justify-center text-terra-light shrink-0">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-cream leading-tight">
                  <span className="text-gold-light tabular-nums font-bold text-sm sm:text-base">
                    <StatCounter value={40} />
                  </span>{' '}
                  Guests
                </div>
                <div className="text-[10px] sm:text-[11px] text-sand-light/75 truncate font-sans">
                  Base 20 • Max 40
                </div>
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="hidden lg:block w-px h-6 bg-white/10" />

            {/* Stat 2: 8 Full Baths */}
            <div className="flex items-center gap-2.5 sm:gap-3 py-1 px-1.5 sm:px-3 rounded-xl hover:bg-white/5 transition-colors cursor-default">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-terra/20 border border-terra/30 flex items-center justify-center text-terra-light shrink-0">
                <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-cream leading-tight">
                  <span className="text-gold-light tabular-nums font-bold text-sm sm:text-base">
                    <StatCounter value={8} />
                  </span>{' '}
                  Full Baths
                </div>
                <div className="text-[10px] sm:text-[11px] text-sand-light/75 truncate font-sans">
                  Zero-Queue Guarantee
                </div>
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="hidden lg:block w-px h-6 bg-white/10" />

            {/* Stat 3: 20 Real Beds */}
            <div className="flex items-center gap-2.5 sm:gap-3 py-1 px-1.5 sm:px-3 rounded-xl hover:bg-white/5 transition-colors cursor-default">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-terra/20 border border-terra/30 flex items-center justify-center text-terra-light shrink-0">
                <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-cream leading-tight">
                  <span className="text-gold-light tabular-nums font-bold text-sm sm:text-base">
                    <StatCounter value={20} />
                  </span>{' '}
                  Real Beds
                </div>
                <div className="text-[10px] sm:text-[11px] text-sand-light/75 truncate font-sans">
                  2 VIP + 9 Bunks + Driver
                </div>
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="hidden lg:block w-px h-6 bg-white/10" />

            {/* Stat 4: 22+ Amenities */}
            <div className="flex items-center gap-2.5 sm:gap-3 py-1 px-1.5 sm:px-3 rounded-xl hover:bg-white/5 transition-colors cursor-default">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-terra/20 border border-terra/30 flex items-center justify-center text-terra-light shrink-0">
                <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-cream leading-tight">
                  <span className="text-gold-light tabular-nums font-bold text-sm sm:text-base">
                    <StatCounter value={22} suffix="+" />
                  </span>{' '}
                  Amenities
                </div>
                <div className="text-[10px] sm:text-[11px] text-sand-light/75 truncate font-sans">
                  Pool, Videoke, Arcades
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

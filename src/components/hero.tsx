'use client'

import { useState, useRef } from 'react'
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
  const [activeTilt, setActiveTilt] = useState<{ index: number; x: number; y: number } | null>(null)
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([])

  const currentView = heroViews[activeViewIndex]

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

      {/* Main Hero Content (2-Column Desktop + Balanced Mobile Stack) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-14 pb-6 sm:pb-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
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

            {/* Action CTAs with Tactile Spring Physics */}
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

          {/* Right Column: Spatial 2x2 Perspective Deck (Clean, No Clutter Pills) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 bg-ink/75 backdrop-blur-2xl border border-sand/30 rounded-3xl p-4 sm:p-5 space-y-3 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between text-xs text-sand-light px-1">
              <span className="font-bold uppercase tracking-wider text-gold-light text-[11px] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-gold-light" />
                <span>Multi-Angle Estate Views</span>
              </span>
              <span className="text-[11px] text-sand-light/70 font-sans">
                Click tile to switch view
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
                    onClick={() => setActiveViewIndex(idx)}
                    style={tiltStyle}
                    className={`group relative h-28 sm:h-32 rounded-2xl overflow-hidden border text-left transition-all duration-200 active:scale-95 flex flex-col justify-end p-3 ${
                      isActive
                        ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] ring-1 ring-gold scale-[1.02]'
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

                    {/* Clean Label & Subtitle (No Clutter Badge Pills) */}
                    <div className="relative z-10 space-y-0.5">
                      <div className={`text-xs sm:text-sm font-bold leading-tight transition-colors ${isActive ? 'text-gold-light' : 'text-cream group-hover:text-gold-light'}`}>
                        {view.label}
                      </div>
                      <div className="text-[10px] text-sand-light/85 truncate font-sans">
                        {view.badge}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Current Viewing Caption */}
            <div className="px-1 text-[11px] text-sand-light/80 font-sans flex items-center justify-between pt-0.5">
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

      {/* Elevated Bento Spec Horizon (Clean, Uncluttered Luxury Stats Console) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-5 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="bg-ink/85 backdrop-blur-2xl border border-sand/30 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {/* Bento Card 1: 40 Guests */}
            <div className="flex flex-col justify-between p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-sand/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-terra/25 border border-terra/40 flex items-center justify-center text-terra-light group-hover:scale-110 group-hover:bg-terra/35 transition-all mb-2.5">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold-light leading-tight tabular-nums">
                  <StatCounter value={40} /> Guests
                </div>
                <div className="text-xs sm:text-sm text-cream font-semibold">
                  Base 20 • Max 40 Total
                </div>
                <div className="text-[11px] text-sand-light/75 font-sans">
                  Whole-Estate (~₱1,250/head)
                </div>
              </div>
            </div>

            {/* Bento Card 2: 8 Full Bathrooms */}
            <div className="flex flex-col justify-between p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-sand/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-terra/25 border border-terra/40 flex items-center justify-center text-terra-light group-hover:scale-110 group-hover:bg-terra/35 transition-all mb-2.5">
                <Droplets className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold-light leading-tight tabular-nums">
                  <StatCounter value={8} /> Full Baths
                </div>
                <div className="text-xs sm:text-sm text-cream font-semibold">
                  Zero-Queue Guarantee
                </div>
                <div className="text-[11px] text-sand-light/75 font-sans">
                  2 Master Ensuite + 6 Compound
                </div>
              </div>
            </div>

            {/* Bento Card 3: 20 Real Beds */}
            <div className="flex flex-col justify-between p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-sand/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-terra/25 border border-terra/40 flex items-center justify-center text-terra-light group-hover:scale-110 group-hover:bg-terra/35 transition-all mb-2.5">
                <Bed className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold-light leading-tight tabular-nums">
                  <StatCounter value={20} /> Real Beds
                </div>
                <div className="text-xs sm:text-sm text-cream font-semibold">
                  2 VIP + 9 Bunks + Driver
                </div>
                <div className="text-[11px] text-sand-light/75 font-sans">
                  4 Air-Conditioned Zones
                </div>
              </div>
            </div>

            {/* Bento Card 4: 22+ Amenities */}
            <div className="flex flex-col justify-between p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-sand/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-terra/25 border border-terra/40 flex items-center justify-center text-terra-light group-hover:scale-110 group-hover:bg-terra/35 transition-all mb-2.5">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold-light leading-tight tabular-nums">
                  <StatCounter value={22} suffix="+" /> Amenities
                </div>
                <div className="text-xs sm:text-sm text-cream font-semibold">
                  Pool, Videoke, Arcades
                </div>
                <div className="text-[11px] text-sand-light/75 font-sans">
                  ₱0 Corkage • Billiards, Grilling
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

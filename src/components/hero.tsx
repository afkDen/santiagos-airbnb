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
  ShieldCheck,
  Camera,
  Sparkles,
  ChevronRight,
  Flame,
} from 'lucide-react'

export function Hero() {
  const heroViews = [
    {
      id: 'pool',
      label: 'Private Pool Deck',
      sublabel: 'Cascading Waterfall & Poolside',
      src: getLocalImageUrl('pool1'), // 408.6 KB High-Res
    },
    {
      id: 'dining',
      label: 'Banquet Dining Hall',
      sublabel: '10-Seater Glass Table & Feasts',
      src: getLocalImageUrl('din1'), // 379.2 KB High-Res Dining Room
    },
    {
      id: 'billiards',
      label: 'Billiards Lounge',
      sublabel: 'Kangaroo Pool & Brick Walls',
      src: getLocalImageUrl('bill2'), // 219.4 KB
    },
    {
      id: 'exterior',
      label: 'Container Deck',
      sublabel: 'Industrial Chic Architecture',
      src: getLocalImageUrl('ext3'), // 402.2 KB High-Res Upper Deck
    },
  ]

  const [activeViewIndex, setActiveViewIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const currentView = heroViews[activeViewIndex]

  // Gentle 6-second auto-cycle that pauses on user hover
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveViewIndex((prev) => (prev + 1) % heroViews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, heroViews.length])

  return (
    <section className="relative min-h-[92vh] md:min-h-[95dvh] flex flex-col justify-between overflow-hidden bg-ink text-cream">
      {/* Background Photography with Smooth Hardware-Accelerated Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroViews.map((view, idx) => (
          <div
            key={view.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              activeViewIndex === idx ? 'opacity-55 scale-105' : 'opacity-0 scale-100 pointer-events-none'
            }`}
          >
            <Image
              src={view.src}
              alt={view.label}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
        
        {/* Hearth Ambient Golden Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(194,110,56,0.35),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Headline & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Live Estate Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-md border border-sand/30 text-gold-light text-xs font-bold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest"></span>
              </span>
              <span>100% Whole-Compound Rental • 2026 Dates Now Open</span>
              <span className="hidden sm:inline-block border-l border-sand/30 pl-2 text-sand-light/80 font-normal">
                Alfonso, Cavite
              </span>
            </div>

            {/* Editorial Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-cream leading-[1.12] drop-shadow-md">
              The Whole-Property <br className="hidden sm:inline" />
              <span className="text-gold-light italic">Container Resort</span> Built for 40.
            </h1>

            {/* Value Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-sand-light/90 leading-relaxed font-sans max-w-2xl font-normal">
              Private pool, 8 full bathrooms, air-conditioned videoke lounge, Kangaroo billiards, retro arcades, and full chef&apos;s kitchen. Exclusive compound privacy with zero strangers.
            </p>

            {/* Action CTAs with Tactile Emil Active States */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm sm:text-base rounded-full shadow-warm-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Inquire Dates on WhatsApp</span>
              </a>

              <VideoTourModal />

              <Link
                href="/gallery"
                className="hidden xl:inline-flex items-center justify-center gap-2 px-6 py-4 bg-cream/10 hover:bg-cream/20 border border-sand/30 text-cream font-medium text-sm rounded-full backdrop-blur-sm transition-all duration-200 active:scale-95"
              >
                <Camera className="w-4 h-4 text-gold-light" />
                <span>59+ Photos</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Multi-Perspective Dock with Auto-Progress Progress */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-5 bg-ink/80 backdrop-blur-xl border border-sand/30 rounded-3xl p-4 sm:p-6 space-y-3.5 shadow-2xl"
          >
            <div className="flex items-center justify-between text-xs text-sand-light px-1">
              <div className="flex items-center gap-1.5">
                <span className="font-bold uppercase tracking-wider text-gold-light text-[11px]">
                  Multi-Perspective View
                </span>
                <span className="text-[10px] text-sand-light/60 bg-cream/10 px-2 py-0.2 rounded-full">
                  {isPaused ? 'Paused' : 'Auto-Tour'}
                </span>
              </div>
              <span className="text-[11px] text-sand-light/70">Click to switch</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {heroViews.map((view, idx) => {
                const isActive = activeViewIndex === idx
                return (
                  <button
                    key={view.id}
                    type="button"
                    onClick={() => {
                      setActiveViewIndex(idx)
                      setIsPaused(true)
                    }}
                    className={`relative h-24 sm:h-28 rounded-2xl overflow-hidden border text-left transition-all duration-300 active:scale-95 group ${
                      isActive
                        ? 'border-gold shadow-[0_0_16px_rgba(212,175,55,0.45)] scale-[1.03]'
                        : 'border-sand/30 opacity-75 hover:opacity-100 hover:border-sand'
                    }`}
                  >
                    <Image
                      src={view.src}
                      alt={view.label}
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-2.5 flex flex-col justify-end">
                      <span className="text-xs font-bold text-cream leading-tight block">
                        {view.label}
                      </span>
                    </div>

                    {/* Active Progress Bar Timer */}
                    {isActive && !isPaused && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
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

            <div className="px-1 text-[11px] text-sand-light/75 font-sans leading-tight flex items-center justify-between">
              <span>
                Viewing: <strong className="text-gold-light">{currentView.label}</strong>
              </span>
              <span className="text-[10px] text-sand-light/60">
                {activeViewIndex + 1} / {heroViews.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Counter Strip with Clean Non-Overlapping Dividers */}
      <div className="relative z-10 border-t border-sand/20 bg-ink/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5 p-2 rounded-2xl bg-cream/5 border border-sand/10 group cursor-default">
              <div className="w-11 h-11 rounded-2xl bg-terra/20 border border-terra/30 flex items-center justify-center text-terra-light shrink-0 group-hover:scale-105 group-hover:bg-terra/30 transition-all">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-gold-light leading-none tabular-nums">
                  <StatCounter value={40} /> Guests
                </div>
                <div className="text-[11px] sm:text-xs text-sand-light/75 font-medium mt-1">
                  Base 20 • Max 40 Total
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 rounded-2xl bg-cream/5 border border-sand/10 group cursor-default">
              <div className="w-11 h-11 rounded-2xl bg-terra/20 border border-terra/30 flex items-center justify-center text-terra-light shrink-0 group-hover:scale-105 group-hover:bg-terra/30 transition-all">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-gold-light leading-none tabular-nums">
                  <StatCounter value={8} /> Bathrooms
                </div>
                <div className="text-[11px] sm:text-xs text-sand-light/75 font-medium mt-1">
                  Zero-Queue Guarantee
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 rounded-2xl bg-cream/5 border border-sand/10 group cursor-default">
              <div className="w-11 h-11 rounded-2xl bg-terra/20 border border-terra/30 flex items-center justify-center text-terra-light shrink-0 group-hover:scale-105 group-hover:bg-terra/30 transition-all">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-gold-light leading-none tabular-nums">
                  <StatCounter value={20} /> Beds
                </div>
                <div className="text-[11px] sm:text-xs text-sand-light/75 font-medium mt-1">
                  2 VIP + 9 Bunk Decks + Driver
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 rounded-2xl bg-cream/5 border border-sand/10 group cursor-default">
              <div className="w-11 h-11 rounded-2xl bg-terra/20 border border-terra/30 flex items-center justify-center text-terra-light shrink-0 group-hover:scale-105 group-hover:bg-terra/30 transition-all">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-gold-light leading-none tabular-nums">
                  <StatCounter value={22} suffix="+" /> Amenities
                </div>
                <div className="text-[11px] sm:text-xs text-sand-light/75 font-medium mt-1">
                  Pool, Videoke, Arcades, Court
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

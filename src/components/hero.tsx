'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'motion/react'
import { ArrowRight, Bed, Droplets, MapPin, MessageCircle, ShieldCheck, Users } from 'lucide-react'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'

const HERO_VIEWS = [
  {
    id: 'pool',
    label: 'Pool deck',
    alt: 'Private swimming pool and waterfall deck at Santiagos Resort',
    src: getLocalImageUrl('pool1'),
  },
  {
    id: 'dining',
    label: 'Dining hall',
    alt: 'Group dining hall and kitchen at Santiagos Resort',
    src: getLocalImageUrl('din1'),
  },
  {
    id: 'games',
    label: 'Games lounge',
    alt: 'Billiards and games lounge at Santiagos Resort',
    src: getLocalImageUrl('bill2'),
  },
  {
    id: 'estate',
    label: 'The compound',
    alt: 'Industrial container compound at Santiagos Resort',
    src: getLocalImageUrl('ext3'),
  },
]

const PROOF_POINTS = [
  { value: '40', label: 'guests', detail: 'One private booking', icon: Users },
  { value: '20', label: 'beds', detail: 'Across four zones', icon: Bed },
  { value: '8', label: 'bathrooms', detail: 'Built for groups', icon: Droplets },
  { value: '100%', label: 'private', detail: 'No shared spaces', icon: ShieldCheck },
]

export function Hero() {
  const [[activeView, direction], setViewState] = useState<[number, number]>([0, 0])
  const shouldReduceMotion = useReducedMotion()
  const currentView = HERO_VIEWS[activeView]

  const handleSelectView = (newIdx: number) => {
    if (newIdx === activeView) return
    const dir = newIdx > activeView ? 1 : -1
    setViewState([newIdx, dir])
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      transform: shouldReduceMotion ? 'none' : 'translateY(14px)',
    },
    visible: {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: {
        duration: 0.35,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  }

  const deckVariants: Variants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir >= 0 ? '5%' : '-5%',
      scale: shouldReduceMotion ? 1 : 1.03,
      opacity: 0,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)',
    }),
    center: {
      x: '0%',
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.32,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir >= 0 ? '-5%' : '5%',
      scale: shouldReduceMotion ? 1 : 0.98,
      opacity: 0,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)',
      transition: {
        duration: 0.26,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    }),
  }

  return (
    <section className="bg-ink text-cream relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-terra/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container grid min-h-[calc(100dvh-72px)] grid-cols-1 items-center gap-8 py-8 lg:grid-cols-12 lg:gap-12 lg:py-10 relative z-10">
        {/* Left Column: Coordinated Stagger Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-1 space-y-6 lg:col-span-5"
        >
          {/* Location / Status Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-sand/20 text-xs font-semibold text-sand-light/90 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span>Alfonso, Cavite • Tagaytay Highlands</span>
            </div>
          </motion.div>

          {/* Display Headline with Descender Safety */}
          <motion.h1
            variants={itemVariants}
            className="max-w-[12ch] font-serif text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-cream pb-1"
          >
            Your whole group. One private resort.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="max-w-[52ch] text-base leading-7 text-sand-light/85 sm:text-lg"
          >
            Pool, videoke lounge, billiards, dining hall, and 20 beds for up to 40 guests — entirely exclusive for your group.
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row pt-1">
            <a
              href={PROPERTY_INFO.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white shadow-warm-md transition-transform duration-100 hover:bg-whatsapp-hover active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
              <span>Inquire Dates on WhatsApp</span>
            </a>
            <Link
              href="/rates"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-sand/35 bg-cream/10 px-6 py-3 text-sm font-bold text-cream transition-transform duration-100 hover:border-sand/60 hover:bg-cream/15 active:scale-[0.98]"
            >
              <span>View rates & packages</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Fluid Directional Image Deck */}
        <div className="order-2 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, transform: shouldReduceMotion ? 'none' : 'scale(0.98) translateY(12px)' }}
            animate={{ opacity: 1, transform: 'scale(1) translateY(0px)' }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] as const }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-soft shadow-2xl border border-sand/20 sm:aspect-[16/10]"
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentView.id}
                custom={direction}
                variants={deckVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentView.src}
                  alt={currentView.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Apple-Style Glassmorphic View Selector */}
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 z-20">
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 rounded-2xl bg-ink/80 p-1.5 sm:p-2 backdrop-blur-xl border border-white/10 shadow-2xl">
                {HERO_VIEWS.map((view, index) => {
                  const isActive = activeView === index
                  return (
                    <button
                      key={view.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => handleSelectView(index)}
                      className={`relative min-h-11 overflow-hidden rounded-xl px-2 py-2 text-[11px] sm:text-xs font-bold transition-colors duration-150 active:scale-[0.98] ${
                        isActive
                          ? 'text-ink'
                          : 'text-sand-light/80 hover:bg-cream/10 hover:text-cream'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="hero-active-view-pill"
                          className="absolute inset-0 rounded-xl bg-cream shadow-md"
                          transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10">{view.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metric Stat Ribbon with Static Clean Numbers */}
      <div className="border-t border-sand/15 bg-[#160f0b]">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4">
          {PROOF_POINTS.map(({ value, label, detail, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3.5 py-5 sm:py-6 ${
                index % 2 === 0 ? 'pr-3' : 'border-l border-sand/15 pl-3'
              } ${index > 1 ? 'border-t border-sand/15 lg:border-t-0' : ''} ${
                index > 0 ? 'lg:border-l lg:border-sand/15 lg:pl-6' : 'lg:pr-6'
              }`}
            >
              <div className="p-2 rounded-xl bg-gold/10 border border-gold/20 text-gold shrink-0">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <div className="font-display text-xl font-bold tabular-nums text-cream sm:text-2xl">
                  {value} <span className="font-sans text-sm font-semibold text-sand-light/80">{label}</span>
                </div>
                <p className="text-[11px] text-sand-light/60 sm:text-xs">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

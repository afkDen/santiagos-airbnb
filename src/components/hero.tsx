'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
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
  const [activeView, setActiveView] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const currentView = HERO_VIEWS[activeView]

  return (
    <section className="bg-ink text-cream">
      <div className="site-container grid min-h-[calc(100dvh-72px)] grid-cols-1 items-center gap-8 py-8 lg:grid-cols-12 lg:gap-12 lg:py-10">
        {/* Left Column: Staggered Fade-in */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="order-1 space-y-6 lg:col-span-5"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-sand-light/80">
            <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
            <span>Alfonso, Cavite • Tagaytay Highlands</span>
          </div>

          <h1 className="max-w-[12ch] font-serif text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-cream">
            Your whole group. One private resort.
          </h1>

          <p className="max-w-[52ch] text-base leading-7 text-sand-light/85 sm:text-lg">
            Pool, games, dining, and sleeping space for up to 40 guests, all reserved for your group.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={PROPERTY_INFO.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white shadow-warm-md transition-[background-color,box-shadow,transform] duration-200 hover:bg-whatsapp-hover hover:shadow-warm-lg active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
              <span>Inquire Dates on WhatsApp</span>
            </a>
            <Link
              href="/rates"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-sand/35 bg-cream/10 px-6 py-3 text-sm font-bold text-cream transition-[background-color,border-color,transform] duration-200 hover:border-sand/60 hover:bg-cream/15 active:scale-[0.98]"
            >
              <span>View rates</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Cinematic Image Deck */}
        <div className="order-2 lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-soft shadow-warm-xl sm:aspect-[16/10]">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={currentView.id}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
                transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={currentView.src}
                  alt={currentView.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 z-10">
              <div className="grid grid-cols-4 gap-2 rounded-2xl bg-ink/[0.82] p-2 backdrop-blur-md sm:gap-3 sm:p-3">
                {HERO_VIEWS.map((view, index) => (
                  <button
                    key={view.id}
                    type="button"
                    aria-pressed={activeView === index}
                    onClick={() => setActiveView(index)}
                    className={`relative min-h-11 overflow-hidden rounded-xl px-2 py-2 text-[11px] font-bold transition-[color,transform] duration-200 active:scale-[0.98] sm:text-xs ${
                      activeView === index
                        ? 'text-ink'
                        : 'text-sand-light/80 hover:bg-cream/10 hover:text-cream'
                    }`}
                  >
                    {activeView === index && (
                      <motion.span
                        layoutId="hero-view-indicator"
                        className="absolute inset-0 rounded-xl bg-cream"
                        transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{view.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static Proof Points Bar */}
      <div className="border-t border-sand/15 bg-[#160f0b]">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4">
          {PROOF_POINTS.map(({ value, label, detail, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3 py-5 sm:py-6 ${
                index % 2 === 0 ? 'pr-3' : 'border-l border-sand/15 pl-3'
              } ${index > 1 ? 'border-t border-sand/15 lg:border-t-0' : ''} ${
                index > 0 ? 'lg:border-l lg:border-sand/15 lg:pl-6' : 'lg:pr-6'
              }`}
            >
              <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
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

'use client'

import { type KeyboardEvent, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import { getLocalImageUrl } from '@/content/gallery'
import { PROPERTY_INFO } from '@/content/property'

const HERO_VIEWS = [
  {
    id: 'pool',
    label: 'Pool deck',
    detail: 'Private pool · open-air deck',
    alt: 'Private swimming pool and waterfall deck at Santiagos Resort',
    src: getLocalImageUrl('pool1'),
  },
  {
    id: 'dining',
    label: 'Dining hall',
    detail: 'Acacia table · group dining',
    alt: 'Group dining hall and kitchen at Santiagos Resort',
    src: getLocalImageUrl('din1'),
  },
  {
    id: 'games',
    label: 'Games lounge',
    detail: 'Billiards · retro arcades',
    alt: 'Billiards and games lounge at Santiagos Resort',
    src: getLocalImageUrl('bill2'),
  },
  {
    id: 'estate',
    label: 'The compound',
    detail: 'One gated property · exclusively yours',
    alt: 'Industrial container compound at Santiagos Resort',
    src: getLocalImageUrl('ext3'),
  },
] as const

const PROOF_POINTS = [
  { value: '40', label: 'guests', detail: 'One private booking' },
  { value: '20', label: 'beds', detail: 'Across four zones' },
  { value: '8', label: 'bathrooms', detail: 'Built for groups' },
  { value: '100%', label: 'private', detail: 'No shared spaces' },
] as const

type SceneSelectorProps = {
  activeView: number
  pendingView: number | null
  onSelect: (index: number) => void
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>, index: number) => void
}

function DesktopSceneSelector({ activeView, pendingView, onSelect, onKeyDown }: SceneSelectorProps) {
  return (
    <div className="hidden lg:block">
      <div className="mb-4 flex items-end justify-between border-b border-cream/25 pb-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sand-light/70">Explore the stay</p>
        <p className="font-display text-xs font-semibold tabular-nums text-gold-light">
          {String(activeView + 1).padStart(2, '0')} / {String(HERO_VIEWS.length).padStart(2, '0')}
        </p>
      </div>

      <div role="tablist" aria-label="Explore Santiagos Resort" aria-orientation="vertical">
        {HERO_VIEWS.map((view, index) => {
          const isActive = activeView === index

          return (
            <button
              key={view.id}
              id={`hero-scene-desktop-${view.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="hero-scene-panel"
              aria-busy={pendingView === index}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`group relative grid w-full grid-cols-[3rem_5.5rem_1fr] items-center gap-3 border-b border-cream/15 py-3 text-left transition-colors duration-200 focus-visible:z-10 ${
                isActive ? 'text-cream' : 'text-sand-light/65 hover:text-cream'
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="hero-scene-marker"
                  className="absolute inset-y-0 -left-4 w-1 bg-terra"
                  transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.65 }}
                  data-motion="spatial"
                  aria-hidden="true"
                />
              ) : null}

              <span className={`font-display text-xs font-semibold tabular-nums ${isActive ? 'text-gold-light' : ''}`}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="relative h-14 overflow-hidden bg-ink-soft">
                <Image
                  src={view.src}
                  alt=""
                  fill
                  sizes="88px"
                  className={`object-cover transition-transform duration-500 [transition-timing-function:var(--ease-out)] ${
                    isActive ? 'scale-[1.035]' : 'scale-100 group-hover:scale-[1.035]'
                  }`}
                />
                <span className={`absolute inset-0 bg-ink transition-opacity duration-200 ${isActive ? 'opacity-0' : 'opacity-25'}`} />
              </span>

              <span className="min-w-0">
                <span className="block text-sm font-bold">{view.label}</span>
                <span className={`mt-1 block truncate text-[11px] leading-4 ${isActive ? 'text-sand-light/70' : 'text-sand-light/45'}`}>
                  {view.detail}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function MobileSceneSelector({ activeView, pendingView, onSelect, onKeyDown }: SceneSelectorProps) {
  return (
    <div className="min-w-0 lg:hidden">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand-light/60">Explore the stay</p>
        <p className="font-display text-[11px] font-semibold tabular-nums text-gold-light">
          {String(activeView + 1).padStart(2, '0')} / {String(HERO_VIEWS.length).padStart(2, '0')}
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Explore Santiagos Resort"
        aria-orientation="horizontal"
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8"
      >
        {HERO_VIEWS.map((view, index) => {
          const isActive = activeView === index

          return (
            <button
              key={view.id}
              id={`hero-scene-mobile-${view.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="hero-scene-panel"
              aria-busy={pendingView === index}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`relative grid min-w-[12.25rem] snap-start grid-cols-[4.25rem_1fr] items-center gap-3 border px-2 py-2 text-left transition-[background-color,border-color,color] duration-200 sm:min-w-[13.5rem] ${
                isActive
                  ? 'border-terra bg-terra text-white'
                  : 'border-cream/15 bg-cream/[0.04] text-sand-light/70'
              }`}
            >
              <span className="relative h-12 overflow-hidden bg-ink-soft">
                <Image src={view.src} alt="" fill sizes="68px" className="object-cover" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold">
                  <span className={`mr-2 font-display tabular-nums ${isActive ? 'text-white/70' : 'text-gold-light'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {view.label}
                </span>
                <span className={`mt-1 block truncate text-[10px] ${isActive ? 'text-white/75' : 'text-sand-light/45'}`}>
                  {view.detail}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function Hero() {
  const [activeView, setActiveView] = useState(0)
  const [pendingView, setPendingView] = useState<number | null>(null)
  const loadedViews = useRef(new Set([0]))
  const requestedView = useRef<number | null>(null)

  const selectView = (index: number) => {
    requestedView.current = index

    if (loadedViews.current.has(index)) {
      setActiveView(index)
      setPendingView(null)
      return
    }

    setPendingView(index)
  }

  const markViewReady = (index: number) => {
    loadedViews.current.add(index)

    if (requestedView.current === index) {
      setActiveView(index)
      setPendingView(null)
    }
  }

  const handleSceneKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % HERO_VIEWS.length
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + HERO_VIEWS.length) % HERO_VIEWS.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = HERO_VIEWS.length - 1

    if (nextIndex === null) return

    event.preventDefault()
    const tablist = event.currentTarget.closest('[role="tablist"]')
    const tabs = tablist?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    tabs?.[nextIndex]?.focus()
    selectView(nextIndex)
  }

  const activeScene = HERO_VIEWS[activeView]

  return (
    <section className="overflow-hidden bg-ink text-cream">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#160f0b] shadow-warm-xl sm:rounded-2xl lg:h-[calc(100svh-120px)] lg:min-h-[720px] lg:max-h-[920px]">
          <div className="hero-media-reveal relative h-[52svh] min-h-[390px] max-h-[560px] overflow-hidden lg:absolute lg:inset-0 lg:h-auto lg:min-h-0 lg:max-h-none">
            <div
              id="hero-scene-panel"
              role="tabpanel"
              aria-label={`${activeScene.label}: ${activeScene.detail}`}
              aria-live="polite"
              className="absolute inset-0"
            >
              {HERO_VIEWS.map((view, index) => {
                const isActive = activeView === index

                return (
                  <div
                    key={view.id}
                    className="hero-scene absolute inset-0"
                    data-active={isActive}
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={view.src}
                      alt={isActive ? view.alt : ''}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 1800px"
                      className="object-cover"
                      onLoad={() => markViewReady(index)}
                    />
                  </div>
                )
              })}
            </div>

            <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-ink/50 via-transparent to-ink/55 lg:bg-gradient-to-r lg:from-ink/85 lg:via-ink/30 lg:to-ink/20" />
            <div className="pointer-events-none absolute inset-0 z-[3] hidden bg-gradient-to-t from-[#160f0b] via-transparent to-ink/15 lg:block" />
          </div>

          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 px-5 py-5 text-[10px] font-bold uppercase tracking-[0.16em] text-sand-light/80 sm:px-8 sm:py-7 sm:text-xs lg:px-12 xl:px-16">
            <span className="flex items-center gap-2 normal-case tracking-normal">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              Alfonso, Cavite
            </span>
            <span className="text-right">
              Private compound<span className="hidden sm:inline"> · Tagaytay Highlands</span>
            </span>
          </div>

          <div className="relative z-10 bg-[#160f0b] px-5 pb-7 pt-7 sm:px-8 sm:pb-9 lg:flex lg:h-full lg:min-h-[720px] lg:items-end lg:bg-transparent lg:px-12 lg:pb-12 lg:pt-28 xl:px-16 xl:pb-14">
            <div className="grid min-w-0 w-full items-end gap-9 lg:grid-cols-12 lg:gap-10 xl:gap-14">
              <div className="min-w-0 lg:col-span-8 xl:col-span-7">
                <motion.div
                  key={activeScene.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-light sm:text-xs"
                  data-motion="spatial"
                >
                  <span>{String(activeView + 1).padStart(2, '0')}</span>
                  <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
                  <span>{activeScene.label}</span>
                </motion.div>

                <h1 className="font-serif text-[clamp(3rem,13vw,4rem)] font-bold leading-[0.9] tracking-[-0.045em] text-cream lg:text-[clamp(3.35rem,5.35vw,7rem)]">
                  <span className="block lg:inline">Your whole </span>
                  <span className="block lg:inline">
                    group. <span className="lg:hidden">One</span>
                  </span>
                  <span className="block">
                    <span className="hidden lg:inline">One </span>private resort.
                  </span>
                </h1>

                <p className="mt-5 max-w-[46ch] text-sm leading-6 text-sand-light/85 sm:text-base sm:leading-7 xl:text-lg xl:leading-8">
                  Pool, games, dining, and sleeping space for up to 40 guests—all reserved for your group.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={PROPERTY_INFO.contacts.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white shadow-warm-md transition-[background-color,box-shadow,transform] duration-200 hover:bg-whatsapp-hover hover:shadow-warm-lg"
                    data-motion="feedback"
                  >
                    <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
                    <span>Check dates on WhatsApp</span>
                  </a>
                  <Link
                    href="/rates"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/30 bg-ink/30 px-6 py-3 text-sm font-bold text-cream transition-[background-color,border-color,transform] duration-200 hover:border-cream/60 hover:bg-ink/55"
                    data-motion="feedback"
                  >
                    <span>View rates</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-7 grid grid-cols-2 border-y border-cream/15 sm:grid-cols-4 lg:mt-8">
                  {PROOF_POINTS.map(({ value, label, detail }, index) => (
                    <div
                      key={label}
                      className={`py-3.5 sm:py-4 ${index % 2 === 1 ? 'border-l border-cream/15 pl-4' : 'pr-4'} ${
                        index > 1 ? 'border-t border-cream/15 sm:border-t-0' : ''
                      } ${index > 0 ? 'sm:border-l sm:border-cream/15 sm:pl-4' : ''}`}
                    >
                      <p className="font-display text-xl font-semibold tabular-nums text-cream xl:text-2xl">
                        {value} <span className="font-sans text-[11px] font-semibold text-sand-light/65 xl:text-xs">{label}</span>
                      </p>
                      <p className="mt-0.5 hidden text-[10px] text-sand-light/45 xl:block">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="min-w-0 lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10">
                <MobileSceneSelector
                  activeView={activeView}
                  pendingView={pendingView}
                  onSelect={selectView}
                  onKeyDown={handleSceneKeyDown}
                />
                <DesktopSceneSelector
                  activeView={activeView}
                  pendingView={pendingView}
                  onSelect={selectView}
                  onKeyDown={handleSceneKeyDown}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

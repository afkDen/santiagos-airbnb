'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getLocalImageUrl } from '@/content/gallery'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { UtensilsCrossed, Mic, Waves, ArrowRight, Maximize2, CheckCircle2, ChevronRight } from 'lucide-react'

export function InteractiveBento() {
  const [activeTilt, setActiveTilt] = useState<{ x: number; y: number } | null>(null)
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const [lightboxImage, setLightboxImage] = useState<{
    src: string
    title: string
    subtitle: string
    desc: string
    badge: string
    features: string[]
  } | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return
    const card = cardRefs.current[index]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setActiveTilt({ x, y })
    setActiveCardIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveTilt(null)
    setActiveCardIndex(null)
  }

  const bentoCards = [
    {
      title: 'Solid Acacia Banquet Dining & Chef Kitchen',
      subtitle: 'The Social Gathering Space',
      description:
        'Dine together around the solid acacia live-edge hardwood banquet table with a fully equipped chef kitchen, heavy-duty gas cooktops, refrigeration, and zero corkage on outside food, catering, or lechon.',
      badge: 'Group Feasts & ₱0 Corkage',
      image: getLocalImageUrl('din1'),
      icon: UtensilsCrossed,
      href: '/amenities',
      features: [
        'Solid live-edge acacia hardwood slab dining table',
        'Heavy-duty gas cooktops & cookware included',
        'Large 2-door refrigerator for group groceries & drinks',
        'Zero corkage fees on outside food, drinks, and catering',
      ],
    },
    {
      title: 'Acoustic Videoke Lounge',
      subtitle: 'Soundproofed Entertainment Wing',
      description:
        'Sing without curfew in our air-conditioned videoke room with framed music poster gallery walls, dual wireless microphones, and deep sectional seating.',
      badge: 'Zero Curfew Singing',
      image: getLocalImageUrl('kara1'),
      icon: Mic,
      href: '/amenities',
      features: [
        'Updated digital songbook with OPM and global hits',
        '2 professional wireless microphones',
        'Framed music poster wall gallery & mood lighting',
        'Air-conditioned comfort with deep sectional sofa',
      ],
    },
    {
      title: 'Private Pool & Waterfall',
      subtitle: '100% Exclusive Compound Swimming',
      description:
        'Pristine crystal-clear swimming with natural cascading stone waterfall soundscapes, ambient underwater night lighting, and dedicated poolside loungers.',
      badge: '100% Private Swimming',
      image: getLocalImageUrl('pool1'),
      icon: Waves,
      href: '/amenities',
      features: [
        'Gradual slope from 4ft to 5.5ft depth',
        'Ambient underwater LED night illumination for evening swims',
        'Cascading stone waterfall soundscape',
        'Direct poolside garden shower & adjacent restroom',
      ],
    },
  ]

  const getTiltStyle = (index: number) => {
    if (activeCardIndex === index && activeTilt) {
      return {
        transform: `perspective(1000px) rotateX(${activeTilt.y * -6}deg) rotateY(${activeTilt.x * 6}deg) scale3d(1.01, 1.01, 1.01)`,
        transition: 'transform 0.15s ease-out',
      }
    }
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s ease-out',
    }
  }

  return (
    <>
      {/* 1. DESKTOP BENTO GRID (8-Col + 4-Col Stacked Layout) */}
      <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch">
        {/* Left Column (8 Cols): Large Banquet Dining */}
        {(() => {
          const card = bentoCards[0]
          const Icon = card.icon
          return (
            <div
              key={card.title}
              ref={(el) => {
                cardRefs.current[0] = el
              }}
              onMouseMove={(e) => handleMouseMove(0, e)}
              onMouseLeave={handleMouseLeave}
              onClick={() =>
                setLightboxImage({
                  src: card.image,
                  title: card.title,
                  subtitle: card.subtitle,
                  desc: card.description,
                  badge: card.badge,
                  features: card.features,
                })
              }
              style={getTiltStyle(0)}
              className="col-span-8 group relative rounded-3xl overflow-hidden shadow-warm-md border border-sand bg-ink cursor-pointer hover:shadow-warm-xl transition-all duration-300 min-h-[540px] flex flex-col justify-between p-8 lg:p-10"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-65 group-hover:opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-sand/30 text-gold-light text-xs font-bold tracking-wide">
                  <Icon className="w-4 h-4 text-gold-light" />
                  <span>{card.badge}</span>
                </span>
                <div className="p-2.5 rounded-full bg-ink/75 text-cream backdrop-blur-md hover:bg-terra transition-colors group-hover:scale-110 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-gold-light" />
                </div>
              </div>

              <div className="relative z-10 space-y-3 max-w-2xl pt-8">
                <span className="text-xs font-bold text-gold-light uppercase tracking-wider block">
                  {card.subtitle}
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl font-bold text-cream leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-sand-light/90 leading-relaxed font-sans max-w-xl">
                  {card.description}
                </p>
                <div className="pt-3 flex items-center justify-between gap-3 border-t border-sand/20">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-light group-hover:text-white transition-colors">
                    <span>Click to enlarge HD view & specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <Link
                    href={card.href}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-cream hover:text-gold-light bg-cream/15 hover:bg-cream/25 border border-sand/30 px-3.5 py-1.5 rounded-full transition-all"
                  >
                    View in Catalog →
                  </Link>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Right Stacked Column (4 Cols): Videoke & Pool Cards */}
        <div className="col-span-4 flex flex-col gap-6 justify-between">
          {bentoCards.slice(1).map((card, idx) => {
            const cardActualIndex = idx + 1
            const Icon = card.icon
            return (
              <div
                key={card.title}
                ref={(el) => {
                  cardRefs.current[cardActualIndex] = el
                }}
                onMouseMove={(e) => handleMouseMove(cardActualIndex, e)}
                onMouseLeave={handleMouseLeave}
                onClick={() =>
                  setLightboxImage({
                    src: card.image,
                    title: card.title,
                    subtitle: card.subtitle,
                    desc: card.description,
                    badge: card.badge,
                    features: card.features,
                  })
                }
                style={getTiltStyle(cardActualIndex)}
                className="group relative rounded-3xl overflow-hidden shadow-warm-md border border-sand bg-ink cursor-pointer hover:shadow-warm-xl transition-all duration-300 min-h-[255px] flex flex-col justify-between p-6 lg:p-7"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/15 backdrop-blur-md border border-sand/30 text-gold-light text-xs font-bold tracking-wide">
                    <Icon className="w-3.5 h-3.5 text-gold-light" />
                    <span>{card.badge}</span>
                  </span>
                  <div className="p-2 rounded-full bg-ink/75 text-cream backdrop-blur-md hover:bg-terra transition-colors group-hover:scale-110 flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                  </div>
                </div>

                <div className="relative z-10 space-y-1.5 pt-4">
                  <span className="text-[11px] font-bold text-gold-light uppercase tracking-wider block">
                    {card.subtitle}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-cream leading-tight">
                    {card.title}
                  </h4>
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-sand/20 text-xs">
                    <span className="text-gold-light font-bold flex items-center gap-1">
                      <span>Click for specifications</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-cream hover:text-gold-light bg-cream/15 hover:bg-cream/25 border border-sand/30 px-3 py-1 rounded-full transition-all"
                    >
                      Catalog →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 2. MOBILE SNAP CAROUSEL (< lg Viewports) */}
      <div className="lg:hidden space-y-3">
        <div className="flex items-center justify-between text-xs text-ink-muted px-1">
          <span className="font-semibold">Featured Spaces</span>
          <span className="text-[11px] text-terra flex items-center gap-1 font-bold">
            <span>Swipe to explore</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 -mx-4 px-4 pb-2 items-stretch">
          {bentoCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={`mobile-${card.title}`}
                onClick={() =>
                  setLightboxImage({
                    src: card.image,
                    title: card.title,
                    subtitle: card.subtitle,
                    desc: card.description,
                    badge: card.badge,
                    features: card.features,
                  })
                }
                className="w-[86vw] max-w-[360px] shrink-0 snap-center group relative rounded-2xl overflow-hidden shadow-warm-md border border-sand bg-ink cursor-pointer min-h-[380px] flex flex-col justify-between p-5 active:scale-[0.98] transition-all"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="86vw"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-sand/30 text-gold-light text-xs font-bold tracking-wide">
                    <Icon className="w-3.5 h-3.5 text-gold-light" />
                    <span>{card.badge}</span>
                  </span>
                  <div className="p-2 rounded-full bg-ink/75 text-cream backdrop-blur-md flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                  </div>
                </div>

                <div className="relative z-10 space-y-2 pt-4">
                  <span className="text-[11px] font-bold text-gold-light uppercase tracking-wider block">
                    {card.subtitle}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-cream leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-xs text-sand-light/90 leading-relaxed font-sans line-clamp-2">
                    {card.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-sand/20 text-xs">
                    <span className="text-gold-light font-bold flex items-center gap-1">
                      <span>Tap for specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-cream bg-cream/15 px-3 py-1 rounded-full"
                    >
                      Catalog →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Fullscreen Modal Lightbox */}
      <FullscreenLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage?.src ?? null}
        title={lightboxImage?.title}
        category={lightboxImage?.badge}
        actionButton={
          <Link
            href="/amenities"
            className="px-4 py-2 bg-terra hover:bg-terra-dark text-white rounded-full text-xs font-bold transition-colors inline-flex items-center gap-1.5"
          >
            <span>Explore All 22+ Amenities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      >
        {lightboxImage && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-sand-light leading-relaxed font-sans">
              {lightboxImage.desc}
            </p>
            <div className="space-y-2">
              <h5 className="text-xs font-bold text-gold-light uppercase tracking-wider">
                Included Highlights:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {lightboxImage.features.map((feat, fidx) => (
                  <div
                    key={fidx}
                    className="flex items-center gap-2 text-xs text-sand-light/90 bg-white/5 border border-sand/15 p-2 rounded-xl"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest-light shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </FullscreenLightbox>
    </>
  )
}

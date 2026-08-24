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
    // Only apply 3D tilt on fine pointer (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) return
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
      title: '10-Seater Banquet Dining & Chef’s Kitchen',
      subtitle: 'The Social Gathering Space',
      description:
        'Dine together around the solid 10-seater glass table with fully equipped heavy-duty gas cooktops and zero corkage on outside food.',
      badge: 'Group Feasts & Dining',
      image: getLocalImageUrl('din1'),
      icon: UtensilsCrossed,
      href: '/amenities',
      features: [
        '10 comfortable rattan dining armchairs',
        'Heavy-duty gas cooktops & cookware included',
        'Large 2-door refrigerator for food & drinks',
        'Zero corkage fees on outside food & catering',
      ],
    },
    {
      title: 'Acoustic Videoke Lounge',
      subtitle: 'Soundproofed Entertainment Hub',
      description:
        'Sing without curfew in our air-conditioned videoke room with music poster walls, dual wireless mics, and deep sectional seating.',
      badge: 'Zero Curfew Singing',
      image: getLocalImageUrl('kara1'),
      icon: Mic,
      href: '/amenities',
      features: [
        'Updated digital songbook (OPM & Global Hits)',
        '2 professional wireless microphones',
        'Framed music poster wall gallery',
        'Air-conditioned with deep sectional sofa',
      ],
    },
    {
      title: 'Private Pool & Waterfall',
      subtitle: '100% Whole-Property Privacy',
      description:
        'Enjoy crystal clear swimming with natural stone waterfall sounds, underwater night lighting, and dedicated poolside loungers.',
      badge: 'Exclusive Swimming',
      image: getLocalImageUrl('pool1'),
      icon: Waves,
      href: '/amenities',
      features: [
        'Depth: 4ft to 5.5ft gradual slope',
        'Ambient underwater LED night illumination',
        'Cascading stone waterfall soundscape',
        'Direct poolside garden shower & bathroom',
      ],
    },
  ]

  return (
    <>
      {/* Mobile Swipe Hint */}
      <div className="flex items-center justify-between text-xs text-ink-muted lg:hidden px-1">
        <span className="font-semibold">Featured Spaces</span>
        <span className="text-[11px] text-terra flex items-center gap-1 font-bold">
          <span>Swipe to explore</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Desktop 12-Col Bento Grid + Mobile Apple Horizontal Snap Carousel */}
      <div className="flex lg:grid lg:grid-cols-12 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0 items-stretch">
        {/* Card 1: Banquet Dining (8 Cols on Desktop, Full Snap Card on Mobile) */}
        {bentoCards.slice(0, 1).map((card, idx) => {
          const Icon = card.icon
          const isHovered = activeCardIndex === idx
          const tiltStyle =
            isHovered && activeTilt
              ? {
                  transform: `perspective(1000px) rotateX(${
                    activeTilt.y * -6
                  }deg) rotateY(${activeTilt.x * 6}deg) scale3d(1.01, 1.01, 1.01)`,
                  transition: 'transform 0.15s ease-out',
                }
              : {
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: 'transform 0.4s ease-out',
                }

          return (
            <div
              key={card.title}
              ref={(el) => {
                cardRefs.current[idx] = el
              }}
              onMouseMove={(e) => handleMouseMove(idx, e)}
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
              style={tiltStyle}
              className="lg:col-span-8 w-[86vw] max-w-[360px] sm:max-w-[420px] lg:w-auto shrink-0 snap-center lg:snap-none group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm-md border border-sand bg-ink cursor-pointer hover:shadow-warm-xl transition-all duration-300 min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex flex-col justify-between p-5 sm:p-8 lg:p-10 active:scale-[0.98]"
            >
              {/* Background Photography */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 88vw, 66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-65 group-hover:opacity-55"
              />

              {/* Gradient Overlay for 100% Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20 pointer-events-none" />

              {/* Top Row: Badge & Zoom Icon */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-sand/30 text-gold-light text-xs font-bold uppercase tracking-wider">
                  <Icon className="w-3.5 h-3.5 text-gold-light" />
                  <span>{card.badge}</span>
                </span>
                <div className="p-2.5 rounded-full bg-ink/75 text-cream backdrop-blur-md hover:bg-terra transition-colors group-hover:scale-110 flex items-center justify-center">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </div>
              </div>

              {/* Bottom Row: Text Content & Actions */}
              <div className="relative z-10 space-y-2.5 sm:space-y-3 max-w-2xl pt-6">
                <span className="text-[11px] sm:text-xs font-bold text-gold-light uppercase tracking-wider block">
                  {card.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-cream leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-sand-light/90 leading-relaxed font-sans max-w-xl line-clamp-3 sm:line-clamp-none">
                  {card.description}
                </p>
                <div className="pt-2.5 sm:pt-3 flex items-center justify-between gap-3 border-t border-sand/20">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-light group-hover:text-white transition-colors">
                    <span>Tap to view HD photo & specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <Link
                    href={card.href}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-cream hover:text-gold-light bg-cream/15 hover:bg-cream/25 border border-sand/30 px-3 py-1.5 rounded-full transition-all shrink-0"
                  >
                    Catalog →
                  </Link>
                </div>
              </div>
            </div>
          )
        })}

        {/* Right Cards: Videoke & Pool (4 Cols on Desktop, Snap Cards on Mobile) */}
        {bentoCards.slice(1).map((card, idx) => {
          const cardActualIndex = idx + 1
          const Icon = card.icon
          const isHovered = activeCardIndex === cardActualIndex
          const tiltStyle =
            isHovered && activeTilt
              ? {
                  transform: `perspective(1000px) rotateX(${
                    activeTilt.y * -6
                  }deg) rotateY(${activeTilt.x * 6}deg) scale3d(1.01, 1.01, 1.01)`,
                  transition: 'transform 0.15s ease-out',
                }
              : {
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: 'transform 0.4s ease-out',
                }

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
              style={tiltStyle}
              className="lg:col-span-4 w-[86vw] max-w-[360px] sm:max-w-[420px] lg:w-auto shrink-0 snap-center lg:snap-none group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm-md border border-sand bg-ink cursor-pointer hover:shadow-warm-xl transition-all duration-300 min-h-[380px] sm:min-h-[320px] lg:min-h-[255px] flex flex-col justify-between p-5 sm:p-6 lg:p-7 active:scale-[0.98]"
            >
              {/* Background Photography */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 88vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-50"
              />

              {/* Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20 pointer-events-none" />

              {/* Top Row: Badge & Zoom Icon */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-sand/30 text-gold-light text-xs font-bold uppercase tracking-wider">
                  <Icon className="w-3.5 h-3.5 text-gold-light" />
                  <span>{card.badge}</span>
                </span>
                <div className="p-2 rounded-full bg-ink/75 text-cream backdrop-blur-md hover:bg-terra transition-colors group-hover:scale-110 flex items-center justify-center">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </div>
              </div>

              {/* Bottom Row: Text Content & Actions */}
              <div className="relative z-10 space-y-2 pt-4">
                <span className="text-[11px] sm:text-xs font-bold text-gold-light uppercase tracking-wider block">
                  {card.subtitle}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-cream leading-tight">
                  {card.title}
                </h4>
                <p className="text-xs text-sand-light/90 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                  {card.description}
                </p>
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-sand/20 text-xs">
                  <span className="text-gold-light font-bold flex items-center gap-1">
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <Link
                    href={card.href}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-cream hover:text-gold-light bg-cream/15 px-3 py-1 rounded-full"
                  >
                    Catalog →
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
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

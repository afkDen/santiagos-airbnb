'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getLocalImageUrl } from '@/content/gallery'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { UtensilsCrossed, Mic, Waves, ArrowRight, Maximize2, CheckCircle2 } from 'lucide-react'

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
      image: getLocalImageUrl('din1'), // 379.2 KB High-Res Dining Setup
      icon: UtensilsCrossed,
      href: '/amenities',
      className: 'lg:col-span-8 min-h-[340px] sm:min-h-[480px] lg:min-h-[540px]',
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
      image: getLocalImageUrl('kara1'), // 421.6 KB High-Res
      icon: Mic,
      href: '/amenities',
      className: 'lg:col-span-4 min-h-[260px] sm:min-h-[320px] lg:min-h-[260px]',
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
      image: getLocalImageUrl('pool1'), // 408.6 KB High-Res
      icon: Waves,
      href: '/amenities',
      className: 'lg:col-span-4 min-h-[260px] sm:min-h-[320px] lg:min-h-[260px]',
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Large Card: Banquet Dining (8 Cols on Desktop) */}
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
              className="lg:col-span-8 group relative rounded-3xl overflow-hidden shadow-warm-md border border-sand bg-ink cursor-pointer hover:shadow-warm-xl transition-all duration-300 min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col justify-between p-6 sm:p-8 lg:p-10"
            >
              {/* Background Photography */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-65 group-hover:opacity-55"
              />

              {/* Gradient Overlay for 100% Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20 pointer-events-none" />

              {/* Top Row: Badge & Zoom Icon */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-sand/30 text-gold-light text-xs font-bold uppercase tracking-wider">
                  <Icon className="w-4 h-4 text-gold-light" />
                  <span>{card.badge}</span>
                </span>
                <div className="p-2.5 rounded-full bg-ink/75 text-cream backdrop-blur-md hover:bg-terra transition-colors group-hover:scale-110 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-gold-light" />
                </div>
              </div>

              {/* Bottom Row: Text Content & Actions */}
              <div className="relative z-10 space-y-3 max-w-2xl pt-8">
                <span className="text-xs font-bold text-gold-light uppercase tracking-wider block">
                  {card.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-cream leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-sand-light/90 leading-relaxed font-sans max-w-xl">
                  {card.description}
                </p>
                <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-sand/20">
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
        })}

        {/* Right Stacked Column: Videoke & Pool Cards (4 Cols on Desktop) */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
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
                className="group relative rounded-3xl overflow-hidden shadow-warm-md border border-sand bg-ink cursor-pointer hover:shadow-warm-xl transition-all duration-300 min-h-[280px] sm:min-h-[300px] lg:min-h-[258px] flex flex-col justify-between p-6 flex-1"
              >
                {/* Background Photography */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-65 group-hover:opacity-55"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20 pointer-events-none" />

                {/* Top Row: Badge & Zoom */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/15 backdrop-blur-md border border-sand/30 text-gold-light text-[11px] font-bold uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5 text-gold-light" />
                    <span>{card.badge}</span>
                  </span>
                  <div className="p-2 rounded-full bg-ink/75 text-cream backdrop-blur-md hover:bg-terra transition-colors group-hover:scale-110 flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                  </div>
                </div>

                {/* Bottom Row: Text Content */}
                <div className="relative z-10 space-y-1.5 pt-4">
                  <span className="text-[10px] font-bold text-gold-light uppercase tracking-wider block">
                    {card.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-sand-light/85 line-clamp-2 leading-relaxed font-sans">
                    {card.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-sand/20">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-gold-light group-hover:text-white transition-colors">
                      <span>Enlarge Photo</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] font-bold text-cream hover:text-gold-light underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Fullscreen Portal Lightbox (immune to stacking contexts) */}
      <FullscreenLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage ? lightboxImage.src : null}
        title={lightboxImage?.title}
        subtitle={lightboxImage?.subtitle}
        category={lightboxImage?.badge}
        caption={lightboxImage?.desc}
        actionButton={
          <Link
            href="/amenities"
            onClick={() => setLightboxImage(null)}
            className="px-4 py-2 bg-terra hover:bg-terra-dark text-white font-bold rounded-full transition-colors active:scale-95 text-xs inline-block"
          >
            Explore All 22+ Amenities →
          </Link>
        }
      />
    </>
  )
}

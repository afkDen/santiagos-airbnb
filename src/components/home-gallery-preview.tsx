'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getLocalImageUrl } from '@/content/gallery'
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

export function HomeGalleryPreview() {
  const previewImages = [
    {
      key: 'pool1',
      category: 'Pool',
      label: 'Swimming Pool Main View & Waterfall',
      url: getLocalImageUrl('pool1'),
    },
    {
      key: 'din1',
      category: 'Dining',
      label: '10-Seater Banquet Glass Dining Table',
      url: getLocalImageUrl('din1'),
    },
    {
      key: 'kara1',
      category: 'Videoke',
      label: 'Air-Conditioned Videoke Lounge & Poster Gallery',
      url: getLocalImageUrl('kara1'),
    },
    {
      key: 'bill2',
      category: 'Billiards',
      label: 'Kangaroo Pool Table in Brick Gaming Hall',
      url: getLocalImageUrl('bill2'),
    },
    {
      key: 'ext1',
      category: 'Exterior',
      label: 'Resort Architecture & Container Design',
      url: getLocalImageUrl('ext1'),
    },
    {
      key: 'fir1',
      category: 'Bonfire',
      label: 'Sunken Outdoor Bonfire Pit Circle',
      url: getLocalImageUrl('fir1'),
    },
  ]

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) => (prev !== null && prev < previewImages.length - 1 ? prev + 1 : 0))
  }, [activeImageIndex, previewImages.length])

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : previewImages.length - 1))
  }, [activeImageIndex, previewImages.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return
      if (e.key === 'Escape') setActiveImageIndex(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    if (activeImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [activeImageIndex, handleNext, handlePrev])

  const currentActive = activeImageIndex !== null ? previewImages[activeImageIndex] : null

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terra/10 text-terra-dark text-xs font-bold uppercase tracking-wider mb-1">
            <Camera className="w-3.5 h-3.5 text-terra" />
            <span>Unfiltered Property Photography</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mt-1">
            Take a Peek Inside Santiagos
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted font-sans mt-1">
            Click any photograph below to open in full-screen HD.
          </p>
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-bold text-terra hover:text-terra-dark group self-start sm:self-auto"
        >
          <span>Explore all 59+ photos & videos</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid with Generous Proportions */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {previewImages.map((img, index) => (
          <div
            key={img.key}
            onClick={() => setActiveImageIndex(index)}
            className="group relative h-44 sm:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm-sm border border-sand bg-sand/20 cursor-pointer hover:shadow-warm-xl hover:-translate-y-1.5 transition-all duration-300"
          >
            <Image
              src={img.url}
              alt={img.label}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Hover Icon & Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
              <div className="self-end">
                <span className="p-2.5 rounded-full bg-ink/70 text-cream backdrop-blur-md inline-flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-gold-light" />
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-gold-light uppercase tracking-wider block">
                  {img.category}
                </span>
                <span className="text-xs sm:text-sm font-bold text-cream leading-tight mt-0.5 block">
                  {img.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enlargement Lightbox Modal (z-[100] covers screen completely) */}
      {currentActive && activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-6 animate-in fade-in-0 duration-200"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-6xl w-full h-full flex flex-col justify-between bg-ink-soft rounded-2xl sm:rounded-3xl overflow-hidden border border-sand/30 shadow-2xl p-3 sm:p-5 space-y-2 animate-in zoom-in-95 ease-[cubic-bezier(0.23,1,0.32,1)] duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-2 text-cream shrink-0">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-gold-light uppercase tracking-wider">
                  {currentActive.category} • Photo {activeImageIndex + 1} of {previewImages.length}
                </span>
                <h3 className="text-sm sm:text-base font-semibold truncate max-w-[240px] sm:max-w-none">{currentActive.label}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="p-2 text-sand-light hover:text-white rounded-full bg-cream/10 hover:bg-cream/20 transition-colors active:scale-95"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Viewport */}
            <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-black/70 flex items-center justify-center min-h-0">
              <Image
                src={currentActive.url}
                alt={currentActive.label}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />

              {/* Prev */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
                className="absolute left-2 sm:left-4 p-2.5 sm:p-3 rounded-full bg-ink/75 hover:bg-ink text-white backdrop-blur-md border border-sand/30 shadow-lg active:scale-95 transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-2 sm:right-4 p-2.5 sm:p-3 rounded-full bg-ink/75 hover:bg-ink text-white backdrop-blur-md border border-sand/30 shadow-lg active:scale-95 transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-2 flex items-center justify-between text-xs text-sand-light/70 font-sans shrink-0">
              <span>Swipe or use Arrow keys to navigate</span>
              <Link href="/gallery" className="text-gold-light hover:underline font-bold">
                View all 59 property photos →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

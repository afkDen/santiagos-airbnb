'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { GALLERY_REGISTRY, GalleryImage } from '@/content/gallery'
import { MessageCircle, Play, Camera, Filter, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const filterCategories = [
    'All',
    'Exterior',
    'Pool',
    'Videoke',
    'Billiards',
    'Arcade',
    'Dining',
    'Kitchen',
    'Bedroom',
    'Bathroom',
    'Outdoor',
  ]

  const filteredImages =
    selectedCategory === 'All'
      ? GALLERY_REGISTRY
      : GALLERY_REGISTRY.filter((img) => img.category === selectedCategory)

  const handleNextImage = useCallback(() => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) =>
      prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0
    )
  }, [activeImageIndex, filteredImages.length])

  const handlePrevImage = useCallback(() => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1
    )
  }, [activeImageIndex, filteredImages.length])

  // Lock body scroll and handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return
      if (e.key === 'Escape') setActiveImageIndex(null)
      if (e.key === 'ArrowRight') handleNextImage()
      if (e.key === 'ArrowLeft') handlePrevImage()
    }
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImageIndex, handleNextImage, handlePrevImage])

  const currentActiveImage =
    activeImageIndex !== null ? filteredImages[activeImageIndex] : null

  return (
    <div className="py-12 md:py-16 space-y-10 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/60 text-terra-dark text-xs font-bold uppercase tracking-wider">
          <Camera className="w-4 h-4 text-terra" />
          <span>Real Unfiltered Photography • 59 High-Res Photos</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Visual Tour of <span className="text-terra">Santiagos Resort</span>
        </h1>

        <p className="text-xs sm:text-lg text-ink-muted leading-relaxed font-sans">
          Browse all authentic photographs of the container architecture, pool deck, private suites, game areas, and outdoor gathering spaces.
        </p>
      </motion.div>

      {/* Interactive Category Filter Tabs with Morphing Spring Pill */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto pt-2">
        {filterCategories.map((cat) => {
          const count =
            cat === 'All'
              ? GALLERY_REGISTRY.length
              : GALLERY_REGISTRY.filter((img) => img.category === cat).length
          const isActive = selectedCategory === cat

          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setActiveImageIndex(null)
              }}
              className={`relative isolate overflow-hidden px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 active:scale-95 flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'text-white shadow-warm-sm border border-transparent'
                  : 'bg-white border border-sand text-ink hover:bg-sand/40'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-gallery-filter"
                  className="absolute inset-0 bg-terra rounded-full z-0 shadow-warm-sm"
                  transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
              <span
                className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-sand/60 text-ink-muted'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Photo Grid with Clean Authentic Presentation (No Distracting Overlay Pills) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {filteredImages.map((img, idx) => (
            <div
              key={img.key}
              onClick={() => setActiveImageIndex(idx)}
              className="bg-white rounded-2xl overflow-hidden border border-sand/80 shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              {/* Photo Viewport */}
              <div className="relative h-36 sm:h-64 w-full bg-sand/20 overflow-hidden">
                <Image
                  src={img.url}
                  alt={img.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-2.5 sm:p-3.5 border-t border-sand/30">
                <h4 className="font-serif text-[11px] sm:text-sm font-bold text-ink leading-snug line-clamp-2">
                  {img.label}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Video Tour Section Embed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-5 sm:p-10 space-y-4 sm:space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sand pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terra">
              <Play className="w-3.5 h-3.5 fill-terra text-terra" />
              <span>Video Walkthrough</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
              Official Resort Video Tour
            </h3>
          </div>
          <a
            href="https://drive.google.com/file/d/1f1u_JuPgRRNEjmTNMZfvg9KpugSRYgEO/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-terra hover:underline"
          >
            Open in Google Drive ↗
          </a>
        </div>

        <div className="relative h-64 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden bg-black shadow-inner">
          <iframe
            src="https://drive.google.com/file/d/1f1u_JuPgRRNEjmTNMZfvg9KpugSRYgEO/preview"
            title="Santiagos Private Resort Official Video Tour"
            className="w-full h-full border-0"
            allow="autoplay"
          />
        </div>
      </motion.div>

      {/* Fullscreen Lightbox Modal (z-[100] ensures total coverage over navbar and body) */}
      {currentActiveImage && activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-2 sm:p-6 animate-in fade-in-0 duration-200"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-6xl w-full h-full flex flex-col justify-between bg-ink-soft rounded-2xl sm:rounded-3xl overflow-hidden border border-sand/30 shadow-2xl p-3 sm:p-5 space-y-2 animate-in zoom-in-95 ease-[cubic-bezier(0.23,1,0.32,1)] duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-2 text-cream shrink-0">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-gold-light uppercase tracking-wider">
                  {currentActiveImage.category} • Photo {activeImageIndex + 1} of {filteredImages.length}
                </span>
                <h3 className="text-xs sm:text-base font-semibold truncate max-w-[240px] sm:max-w-none">
                  {currentActiveImage.label}
                </h3>
              </div>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-2 text-sand-light hover:text-white rounded-full bg-cream/10 hover:bg-cream/20 transition-colors active:scale-95"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Viewport with Previous/Next Arrows */}
            <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-black/70 flex items-center justify-center min-h-0">
              <Image
                src={currentActiveImage.url}
                alt={currentActiveImage.label}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevImage()
                }}
                className="absolute left-2 sm:left-4 p-2.5 sm:p-3 rounded-full bg-ink/75 hover:bg-ink text-white backdrop-blur-md border border-sand/30 shadow-lg active:scale-95 transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNextImage()
                }}
                className="absolute right-2 sm:right-4 p-2.5 sm:p-3 rounded-full bg-ink/75 hover:bg-ink text-white backdrop-blur-md border border-sand/30 shadow-lg active:scale-95 transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-2 flex items-center justify-between text-[11px] sm:text-xs text-sand-light/70 font-sans shrink-0">
              <span>Swipe or use Arrow keys to navigate</span>
              <span className="text-gold-light">Tap outside or press Escape to close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

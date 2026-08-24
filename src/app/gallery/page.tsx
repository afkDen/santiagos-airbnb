'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { GALLERY_REGISTRY } from '@/content/gallery'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { Play, Camera, Maximize2 } from 'lucide-react'

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

      {/* Interactive Category Filter Tabs with Morphing Spring Pill (Horizontal Swipe on Mobile) */}
      <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center items-center gap-1.5 sm:gap-2 max-w-4xl -mx-4 px-4 sm:mx-auto pt-2 pb-1">
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
              className={`relative isolate overflow-hidden px-3.5 sm:px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 active:scale-95 flex items-center gap-1.5 shrink-0 ${
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
                className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-bold tabular-nums ${
                  isActive ? 'bg-white/20 text-white' : 'bg-sand text-ink-muted'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Photo Grid */}
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

      {/* Fullscreen Portal Lightbox */}
      <FullscreenLightbox
        isOpen={currentActiveImage !== null && activeImageIndex !== null}
        onClose={() => setActiveImageIndex(null)}
        src={currentActiveImage ? currentActiveImage.url : null}
        title={currentActiveImage?.label}
        category={currentActiveImage?.category}
        index={activeImageIndex !== null ? activeImageIndex : undefined}
        total={filteredImages.length}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  )
}

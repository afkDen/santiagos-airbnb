'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { GALLERY_REGISTRY } from '@/content/gallery'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { PageIntro } from '@/components/page-intro'
import { Play, Maximize2 } from 'lucide-react'

const FILTER_GROUPS = [
  { label: 'All', categories: [] },
  { label: 'Sleep', categories: ['Bedroom', 'Bathroom'] },
  { label: 'Gather', categories: ['Dining', 'Kitchen', 'Living', 'Bonfire'] },
  { label: 'Play', categories: ['Pool', 'Videoke', 'Billiards', 'Arcade', 'Gym', 'Basketball'] },
  { label: 'Outdoors', categories: ['Exterior', 'Outdoor'] },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const activeGroup = FILTER_GROUPS.find((group) => group.label === selectedCategory) ?? FILTER_GROUPS[0]

  const filteredImages =
    selectedCategory === 'All'
      ? GALLERY_REGISTRY
      : GALLERY_REGISTRY.filter((img) => activeGroup.categories.includes(img.category))

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
      <PageIntro
        meta={`${GALLERY_REGISTRY.length} real property photos`}
        title="See the resort before you book."
        description="Browse the pool, sleeping areas, dining spaces, games, and container architecture your group will use."
      />

      {/* Interactive Category Filter Tabs with Morphing Spring Pill */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto pt-2">
        {FILTER_GROUPS.map((group) => {
          const count = group.label === 'All'
            ? GALLERY_REGISTRY.length
            : GALLERY_REGISTRY.filter((img) => group.categories.includes(img.category)).length
          const isActive = selectedCategory === group.label

          return (
            <button
              key={group.label}
              onClick={() => {
                setSelectedCategory(group.label)
                setActiveImageIndex(null)
              }}
              className={`relative isolate overflow-hidden px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-[background-color,border-color,color,transform] duration-200 active:scale-95 flex items-center gap-1.5 shrink-0 ${
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
              <span className="relative z-10">{group.label}</span>
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
            <figure key={img.key} className="group">
              <button
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className="media-button relative h-40 w-full bg-sand/20 sm:h-64"
                aria-label={`Open photo: ${img.label}`}
              >
                <Image
                  src={img.url}
                  alt={img.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute bottom-2 right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                </span>
              </button>

              <figcaption className="pt-2">
                <h3 className="text-[11px] font-bold leading-snug text-ink sm:text-sm">
                  {img.label}
                </h3>
              </figcaption>
            </figure>
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
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-normal text-terra">
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

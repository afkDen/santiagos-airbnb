'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Maximize2 } from 'lucide-react'
import { motion } from 'motion/react'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { GALLERY_REGISTRY, getLocalImageUrl } from '@/content/gallery'

const PREVIEW_IMAGES = [
  { key: 'pool1', label: 'Private pool and waterfall', url: getLocalImageUrl('pool1') },
  { key: 'din4', label: 'Covered group dining patio', url: getLocalImageUrl('din4') },
  { key: 'kara4', label: 'Air-conditioned videoke lounge', url: getLocalImageUrl('kara4') },
  { key: 'bill2', label: 'Billiards and games area', url: getLocalImageUrl('bill2') },
  { key: 'bed3', label: 'VIP master bedroom', url: getLocalImageUrl('bed3') },
  { key: 'arc4', label: 'Multiplayer arcade station', url: getLocalImageUrl('arc4') },
]

export function HomeGalleryPreview() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handleNext = useCallback(() => {
    setActiveImageIndex((current) =>
      current === null || current === PREVIEW_IMAGES.length - 1 ? 0 : current + 1
    )
  }, [])

  const handlePrev = useCallback(() => {
    setActiveImageIndex((current) =>
      current === null || current === 0 ? PREVIEW_IMAGES.length - 1 : current - 1
    )
  }, [])

  const currentImage = activeImageIndex === null ? null : PREVIEW_IMAGES[activeImageIndex]

  return (
    <div className="site-container space-y-7 sm:space-y-9">
      <div className="flex flex-col gap-5 border-b border-sand-dark/70 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="section-heading">
          <h2 className="section-title">See the spaces your group will use.</h2>
          <p className="section-copy">Real property photos, from the pool deck to the sleeping zones.</p>
        </div>
        <Link href="/gallery" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-terra hover:text-terra-dark">
          <span>View all {GALLERY_REGISTRY.length} photos</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-6 min-[600px]:grid-cols-12 min-[600px]:gap-x-5 min-[600px]:gap-y-8">
        {PREVIEW_IMAGES.map((image, index) => {
          const isFeatured = index === 0 || index === 5
          const span = isFeatured ? 'col-span-2 min-[600px]:col-span-6' : 'col-span-1 min-[600px]:col-span-3'
          return (
            <motion.figure
              key={image.key}
              initial={{ opacity: 0, transform: 'translateY(8px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className={span}
              data-motion="spatial"
            >
              <button
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className={`media-button group block w-full bg-sand/30 ${
                  isFeatured ? 'aspect-[2/1] min-[600px]:aspect-[16/10]' : 'aspect-square min-[600px]:aspect-[4/5]'
                }`}
                aria-label={`Open photo: ${image.label}`}
              >
                <Image
                  src={image.url}
                  alt={image.label}
                  fill
                  sizes={isFeatured ? '(max-width: 767px) calc(100vw - 2rem), 50vw' : '(max-width: 767px) 50vw, 25vw'}
                  className="media-image object-cover"
                />
                <span className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-cream opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
              <figcaption className="mt-2 text-xs font-semibold text-ink-muted sm:text-sm">{image.label}</figcaption>
            </motion.figure>
          )
        })}
      </div>

      <FullscreenLightbox
        isOpen={currentImage !== null}
        onClose={() => setActiveImageIndex(null)}
        src={currentImage?.url ?? null}
        title={currentImage?.label}
        index={activeImageIndex ?? undefined}
        total={PREVIEW_IMAGES.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  )
}

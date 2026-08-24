'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getLocalImageUrl } from '@/content/gallery'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import { ArrowRight, Maximize2, Camera } from 'lucide-react'

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
      label: 'Kangaroo Pool Table with Brick Accent Wall',
      url: getLocalImageUrl('bill2'),
    },
    {
      key: 'bed7',
      category: 'Suites',
      label: 'VIP Master Suite with Private Rainfall Ensuite',
      url: getLocalImageUrl('bed7'),
    },
    {
      key: 'fir1',
      category: 'Outdoor',
      label: 'Sunken Bonfire Pit & Evening Hearth Area',
      url: getLocalImageUrl('fir1'),
    },
  ]

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) =>
      prev !== null && prev < previewImages.length - 1 ? prev + 1 : 0
    )
  }, [activeImageIndex, previewImages.length])

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : previewImages.length - 1
    )
  }, [activeImageIndex, previewImages.length])

  const currentActive =
    activeImageIndex !== null ? previewImages[activeImageIndex] : null

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sand pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terra/10 text-terra-dark text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-terra" />
            <span>High-Definition Photography</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
            A Glimpse into the Compound
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted mt-1 font-sans">
            Real, unfiltered photos of what awaits you in Alfonso.
          </p>
        </div>

        <Link
          href="/gallery"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-terra hover:text-terra-dark transition-colors group self-start sm:self-auto"
        >
          <span>Explore all 59+ photos & videos</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid with Generous Proportions & Mobile-Friendly Captions */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {previewImages.map((img, index) => (
          <div
            key={img.key}
            onClick={() => setActiveImageIndex(index)}
            className="group relative h-40 sm:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm-sm border border-sand bg-sand/20 cursor-pointer hover:shadow-warm-xl hover:-translate-y-1.5 transition-all duration-300 active:scale-[0.98]"
          >
            <Image
              src={img.url}
              alt={img.label}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Always-Visible Subtle Mobile Gradient + Hover Desktop Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent p-3 sm:p-5 flex flex-col justify-end">
              <div className="flex items-center justify-between gap-1">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-gold-light uppercase tracking-wider block">
                    {img.category}
                  </span>
                  <span className="text-[11px] sm:text-sm font-bold text-cream leading-tight mt-0.5 block line-clamp-1">
                    {img.label}
                  </span>
                </div>
                <div className="p-1.5 sm:p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md shrink-0">
                  <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4 text-gold-light" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Portal Lightbox (immune to stacking contexts) */}
      <FullscreenLightbox
        isOpen={currentActive !== null && activeImageIndex !== null}
        onClose={() => setActiveImageIndex(null)}
        src={currentActive ? currentActive.url : null}
        title={currentActive?.label}
        category={currentActive?.category}
        index={activeImageIndex !== null ? activeImageIndex : undefined}
        total={previewImages.length}
        onPrev={handlePrev}
        onNext={handleNext}
        actionButton={
          <Link href="/gallery" className="text-gold-light hover:underline font-bold text-xs">
            View all 59 property photos →
          </Link>
        }
      />
    </section>
  )
}

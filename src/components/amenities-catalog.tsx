'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { AMENITIES_CATALOG, Amenity } from '@/content/amenities'
import { getLocalImageUrl } from '@/content/gallery'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import {
  Waves,
  Mic,
  CircleDot,
  Gamepad2,
  Flame,
  Dribbble,
  Dumbbell,
  ChefHat,
  Trees,
  Wifi,
  Tv,
  Car,
  CheckCircle2,
  Maximize2,
  ShieldCheck,
  Bed,
  Sparkles,
  LayoutGrid,
} from 'lucide-react'

function getIcon(name: string) {
  switch (name) {
    case 'Waves':
      return <Waves className="w-5 h-5" />
    case 'Mic':
      return <Mic className="w-5 h-5" />
    case 'CircleDot':
      return <CircleDot className="w-5 h-5" />
    case 'Gamepad2':
      return <Gamepad2 className="w-5 h-5" />
    case 'Flame':
      return <Flame className="w-5 h-5 text-terra" />
    case 'Dribbble':
      return <Dribbble className="w-5 h-5 text-terra" />
    case 'Dumbbell':
      return <Dumbbell className="w-5 h-5" />
    case 'ChefHat':
      return <ChefHat className="w-5 h-5" />
    case 'Trees':
      return <Trees className="w-5 h-5 text-forest" />
    case 'Wifi':
      return <Wifi className="w-5 h-5" />
    case 'Tv':
      return <Tv className="w-5 h-5" />
    case 'Car':
      return <Car className="w-5 h-5" />
    case 'Bed':
      return <Bed className="w-5 h-5" />
    case 'Droplets':
    case 'ShowerHead':
      return <Waves className="w-5 h-5 text-terra" />
    case 'UtensilsCrossed':
      return <ChefHat className="w-5 h-5" />
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5 text-forest" />
    default:
      return <Sparkles className="w-5 h-5 text-terra" />
  }
}

export function AmenitiesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [lightboxAmenity, setLightboxAmenity] = useState<Amenity | null>(null)
  const categoryRefs = useRef<Array<HTMLButtonElement | null>>([])

  const categories = [
    'All',
    'Entertainment',
    'Water & Relaxation',
    'Sports & Fitness',
    'Outdoor Gathering',
    'Dining & Cooking',
    'Connectivity & Utilities',
    'Accommodations',
  ]

  const filteredAmenities =
    selectedCategory === 'All'
      ? AMENITIES_CATALOG
      : AMENITIES_CATALOG.filter((item) => item.category === selectedCategory)

  const selectCategory = (index: number) => {
    setSelectedCategory(categories[index])
    categoryRefs.current[index]?.focus()
  }

  const handleCategoryKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % categories.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + categories.length) % categories.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = categories.length - 1
    if (nextIndex === null) return
    event.preventDefault()
    selectCategory(nextIndex)
  }

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Category Pills with Seamless Spring layoutId */}
      <div role="tablist" aria-label="Amenity categories" className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto">
        {categories.map((cat, index) => {
          const count =
            cat === 'All'
              ? AMENITIES_CATALOG.length
              : AMENITIES_CATALOG.filter((item) => item.category === cat).length
          const isActive = selectedCategory === cat

          return (
            <button
              key={cat}
              ref={(element) => { categoryRefs.current[index] = element }}
              type="button"
              role="tab"
              id={`amenity-filter-${index}`}
              aria-selected={isActive}
              aria-controls="amenities-grid"
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectCategory(index)}
              onKeyDown={(event) => handleCategoryKeyDown(event, index)}
              className={`relative isolate overflow-hidden px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-200 active:scale-95 flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'text-white shadow-warm-sm border border-transparent'
                  : 'bg-white border border-sand text-ink hover:bg-sand/40'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-amenity-filter"
                  className="absolute inset-0 bg-terra rounded-full z-0 shadow-warm-sm"
                  transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.65 }}
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

      {/* Grid of All 22+ Amenities */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          id="amenities-grid"
          role="tabpanel"
          aria-labelledby={`amenity-filter-${categories.indexOf(selectedCategory)}`}
          initial={{ opacity: 0, transform: 'translateY(8px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          exit={{ opacity: 0, transform: 'translateY(-6px)' }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredAmenities.map((item) => (
            <article
              key={item.name}
              className="bg-white rounded-3xl overflow-hidden border border-sand shadow-warm-sm hover:shadow-warm-md transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-300 flex flex-col justify-between group"
            >
              {/* Photo Preview Container */}
              {item.imageKey && (
                <button
                  type="button"
                  onClick={() => setLightboxAmenity(item)}
                  aria-label={`Open photo: ${item.name}`}
                  className="relative h-44 sm:h-56 w-full bg-sand/20 overflow-hidden text-left"
                >
                  <Image
                    src={getLocalImageUrl(item.imageKey)}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="media-image object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3.5">
                    <span className="text-[11px] font-bold text-cream flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                      <span>Open photo</span>
                    </span>
                    <span className="text-[10px] font-bold text-gold-light px-2 py-0.5 rounded-full bg-ink/70 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </button>
              )}

              {/* Amenity Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-sand/60 text-terra flex items-center justify-center shrink-0">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-[11px] font-bold text-terra-dark bg-terra/10 px-2.5 py-1 rounded-full tracking-normal">
                      Included in your stay
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink pt-1">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Specs List */}
                {item.specs && item.specs.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-sand/50">
                    {item.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-2 text-xs text-ink font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen Portal Lightbox (immune to stacking contexts) */}
      <FullscreenLightbox
        isOpen={!!lightboxAmenity && !!lightboxAmenity.imageKey}
        onClose={() => setLightboxAmenity(null)}
        src={lightboxAmenity && lightboxAmenity.imageKey ? getLocalImageUrl(lightboxAmenity.imageKey) : null}
        title={lightboxAmenity?.name}
        subtitle={lightboxAmenity?.description}
        category={lightboxAmenity?.category}
        actionButton={
          <span className="px-3 py-1 bg-forest/20 text-forest-light border border-forest/30 rounded-full font-bold text-xs">
            Included in Nightly Rate
          </span>
        }
      />
    </div>
  )
}

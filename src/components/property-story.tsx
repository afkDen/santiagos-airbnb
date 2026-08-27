'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { getLocalImageUrl } from '@/content/gallery'

const CHAPTERS = [
  {
    id: 'gather',
    title: 'Arrive and gather',
    copy: 'Settle into one gated compound with room for the whole group to meet, eat, and catch up.',
    image: getLocalImageUrl('out1'),
    alt: 'Outdoor gathering area at Santiagos Resort',
  },
  {
    id: 'play',
    title: 'Swim and play',
    copy: 'Move between the private pool, billiards, arcades, basketball, and videoke without leaving the property.',
    image: getLocalImageUrl('pool1'),
    alt: 'Private pool and waterfall at Santiagos Resort',
  },
  {
    id: 'dine',
    title: 'Cook and celebrate',
    copy: 'Prepare food in the group kitchen, bring outside catering with no corkage, then gather around the dining table.',
    image: getLocalImageUrl('din1'),
    alt: 'Banquet dining and kitchen at Santiagos Resort',
  },
  {
    id: 'rest',
    title: 'Sleep comfortably',
    copy: 'Twenty beds across four sleeping zones and eight bathrooms keep overnight stays practical for large groups.',
    image: getLocalImageUrl('bed1'),
    alt: 'Main bunk sleeping zone at Santiagos Resort',
  },
]

export function PropertyStory() {
  const [activeChapter, setActiveChapter] = useState(0)
  const current = CHAPTERS[activeChapter]

  return (
    <section className="section-space">
      <div className="site-container space-y-10">
        <div className="section-heading">
          <h2 className="section-title">One compound, from first arrival to lights out.</h2>
          <p className="section-copy">
            Every part of the stay is close enough for the group to stay together, with enough zones to spread out.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 grid gap-2 lg:order-1 lg:col-span-5 lg:self-center">
            {CHAPTERS.map((chapter, index) => {
              const active = activeChapter === index
              return (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => setActiveChapter(index)}
                  aria-pressed={active}
                  className={`group relative overflow-hidden rounded-2xl px-5 py-4 text-left transition-[color,transform] duration-200 sm:px-6 sm:py-5 ${
                    active ? 'text-cream' : 'bg-transparent text-ink hover:bg-sand/40'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="property-story-indicator"
                      className="absolute inset-0 rounded-2xl bg-ink"
                      transition={{ duration: 0.25, ease: [0.77, 0, 0.175, 1] }}
                      data-motion="spatial"
                      aria-hidden="true"
                    />
                  )}
                  <span className={`relative block text-lg font-bold ${active ? 'text-cream' : 'text-ink'}`}>
                    {chapter.title}
                  </span>
                  <span className={`relative mt-1 block text-sm leading-6 ${active ? 'text-sand-light/75' : 'text-ink-muted'}`}>
                    {chapter.copy}
                  </span>
                </button>
              )
            })}

            <Link href="/rooms" className="mt-3 inline-flex items-center gap-2 px-5 text-sm font-bold text-terra hover:text-terra-dark">
              <span>Explore rooms and baths</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand/30 shadow-warm-md sm:aspect-[16/11]">
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, transform: 'scale(1.02)' }}
                  animate={{ opacity: 1, transform: 'scale(1)' }}
                  exit={{ opacity: 0, transform: 'scale(0.99)' }}
                  transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0"
                  data-motion="feedback"
                >
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

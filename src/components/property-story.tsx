'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
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
    copy: 'Twenty beds across three primary sleeping zones and eight bathrooms keep overnight stays practical for large groups.',
    image: getLocalImageUrl('bed1'),
    alt: 'Main bunk sleeping zone at Santiagos Resort',
  },
]

export function PropertyStory() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [pendingChapter, setPendingChapter] = useState<number | null>(null)
  const loadedChapters = useRef(new Set([0]))
  const requestedChapter = useRef<number | null>(null)

  const selectChapter = (index: number) => {
    requestedChapter.current = index

    if (loadedChapters.current.has(index)) {
      setActiveChapter(index)
      setPendingChapter(null)
      return
    }

    setPendingChapter(index)
  }

  const markChapterReady = (index: number) => {
    loadedChapters.current.add(index)

    if (requestedChapter.current === index) {
      setActiveChapter(index)
      setPendingChapter(null)
    }
  }

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
          <div className="order-2 lg:order-1 lg:col-span-5 lg:self-center">
            {CHAPTERS.map((chapter, index) => {
              const active = activeChapter === index
              return (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => selectChapter(index)}
                  aria-pressed={active}
                  aria-busy={pendingChapter === index}
                  className={`group relative grid w-full grid-cols-[2rem_1fr] gap-3 border-t border-sand-dark/70 px-1 py-5 text-left transition-[background-color,color,transform] duration-200 sm:grid-cols-[2.5rem_1fr] sm:py-6 ${
                    active ? 'bg-cream-dark/70 text-ink' : 'text-ink hover:bg-sand/30'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="property-story-indicator"
                      className="absolute inset-y-0 left-0 w-px bg-terra"
                      transition={{ duration: 0.25, ease: [0.77, 0, 0.175, 1] }}
                      data-motion="spatial"
                      aria-hidden="true"
                    />
                  )}
                  <span className={`relative pt-0.5 font-display text-sm font-bold tabular-nums ${active ? 'text-terra-dark' : 'text-ink-muted'}`}>
                    0{index + 1}
                  </span>
                  <span className="relative">
                    <span className="block text-lg font-bold text-ink">{chapter.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-ink-muted transition-[color] duration-200">
                      {chapter.copy}
                    </span>
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
              {CHAPTERS.map((chapter, index) => {
                const active = activeChapter === index

                return (
                  <div
                    key={chapter.id}
                    className={`absolute inset-0 ${active ? 'visible opacity-100' : 'invisible opacity-0'}`}
                    aria-hidden={!active}
                  >
                    <Image
                      src={chapter.image}
                      alt={active ? chapter.alt : ''}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                      onLoad={() => markChapterReady(index)}
                    />
                  </div>
                )
              })}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-cream sm:p-7">
                <p className="max-w-[22ch] font-serif text-2xl font-bold leading-tight sm:text-3xl">
                  {CHAPTERS[activeChapter].title}
                </p>
                <p className="font-display text-sm font-bold tabular-nums text-sand-light/80">
                  0{activeChapter + 1} / 04
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

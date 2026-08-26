'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TESTIMONIALS, Testimonial } from '@/content/reviews'
import { PROPERTY_INFO } from '@/content/property'
import { Star, Quote, ExternalLink, CheckCircle2, ChevronRight, MessageSquareQuote } from 'lucide-react'

function PlatformBadge({ platform, className = '' }: { platform: 'Airbnb' | 'Google'; className?: string }) {
  if (platform === 'Airbnb') {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF385C]/20 border border-[#FF385C]/40 text-[#FF5A5F] text-[10px] font-bold tracking-wide ${className}`}
      >
        <span className="text-[11px] leading-none">★</span>
        <span>Airbnb Verified</span>
      </span>
    )
  }
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#4285F4]/20 border border-[#4285F4]/40 text-[#6BA5FF] text-[10px] font-bold tracking-wide ${className}`}
    >
      <span className="font-bold text-[11px] leading-none">G</span>
      <span>Google Review</span>
    </span>
  )
}

export function EditorialTestimonials() {
  const [activeIdx, setActiveIdx] = useState<number>(0)
  const current = TESTIMONIALS[activeIdx]

  return (
    <section className="bg-[#140D09] text-cream py-20 sm:py-24 border-y border-sand/15 relative overflow-hidden">
      {/* Subtle ambient glow background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-terra/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header with Verification Trust Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand/15 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-sand/20 text-xs font-semibold text-gold-light">
              <MessageSquareQuote className="w-3.5 h-3.5 text-gold" />
              <span>Real Verified Guest Reviews</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
              Loved by Barkadas, Families & Teams
            </h2>
            <p className="text-sm sm:text-base text-sand-light/80 font-sans max-w-xl">
              Authentic verified reviews from our Airbnb listing and Google Maps profile.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-sand/20 text-xs font-semibold text-gold-light">
              <div className="flex items-center text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span>5.0 / 5.0 Star Guest Rating</span>
            </div>

            <a
              href={PROPERTY_INFO.contacts.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF385C]/20 border border-[#FF385C]/40 text-cream hover:bg-[#FF385C]/30 text-xs font-bold transition-colors"
            >
              <span>Airbnb Listing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={PROPERTY_INFO.contacts.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4285F4]/20 border border-[#4285F4]/40 text-cream hover:bg-[#4285F4]/30 text-xs font-bold transition-colors"
            >
              <span>Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 50/50 Editorial Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Dominant Statement Quote */}
          <div className="lg:col-span-7 bg-[#1C130D] p-7 sm:p-10 lg:p-12 rounded-3xl border border-sand/20 shadow-2xl flex flex-col justify-between space-y-8 relative">
            <Quote className="w-16 h-16 text-gold/15 absolute top-6 right-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-6"
              >
                {/* Rating & Highlight Pill */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-gold">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <PlatformBadge platform={current.platform} />
                  </div>
                  <span className="text-[11px] font-bold text-terra-light bg-terra/20 border border-terra/30 px-3 py-1 rounded-full uppercase tracking-wider">
                    {current.highlight}
                  </span>
                </div>

                {/* Headline & Quote */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream leading-snug">
                    &ldquo;{current.headline}&rdquo;
                  </h3>
                  <div className="text-sm sm:text-base text-sand-light/90 font-sans leading-relaxed whitespace-pre-line space-y-2">
                    {current.quote}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Reviewer Footnote */}
            <div className="pt-6 border-t border-sand/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-gold-light">{current.name}</span>
                  {current.platformUrl && (
                    <a
                      href={current.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-sand-light/60 hover:text-gold-light flex items-center gap-0.5 underline decoration-sand/40"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
                <div className="text-sand-light/70">
                  {current.tenure ? `${current.tenure} • ` : ''}
                  {current.date}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-forest-light bg-forest/20 border border-forest/30 px-3 py-1.5 rounded-full self-start sm:self-auto font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Stay</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Story Navigator */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sand-light/60 px-1">
              Select verified review:
            </span>

            {TESTIMONIALS.map((t, idx) => {
              const isSelected = activeIdx === idx
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative isolate overflow-hidden p-4 sm:p-5 rounded-2xl border text-left transition-all active:scale-[0.98] flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-cream/15 border-gold/50 shadow-lg text-cream'
                      : 'bg-cream/5 border-sand/15 text-sand-light/80 hover:bg-cream/10 hover:border-sand/30'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-testimonial-indicator"
                      className="absolute inset-0 bg-gold/10 rounded-2xl z-0 border border-gold/40"
                      transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                    />
                  )}

                  <div className="relative z-10 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-sm text-cream">{t.name}</span>
                      <PlatformBadge platform={t.platform} />
                    </div>
                    <p className="text-xs text-sand-light/70 line-clamp-1">{t.headline}</p>
                  </div>

                  <ChevronRight
                    className={`relative z-10 w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-gold translate-x-1' : 'text-sand-light/40'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { calculateRate, MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'
import { buildWhatsAppLink } from '@/lib/whatsapp-link'
import { Users, Coins, MessageCircle, ArrowRight, CheckCircle2, Minus, Plus } from 'lucide-react'

export function CostSplitter() {
  const [headcount, setHeadcount] = useState<number>(20)
  const [isWeekend, setIsWeekend] = useState<boolean>(false)

  // 1 night sample calculation
  const sampleCheckIn = isWeekend ? new Date('2026-09-18') : new Date('2026-09-15')
  const sampleCheckOut = isWeekend ? new Date('2026-09-19') : new Date('2026-09-16')
  const totalRate = calculateRate(sampleCheckIn, sampleCheckOut, headcount)
  const perPersonCost = Math.round(totalRate / headcount)

  const whatsappUrl = buildWhatsAppLink({
    guestCount: headcount,
    checkIn: sampleCheckIn,
    checkOut: sampleCheckOut,
  })

  return (
    <div className="bg-sand/30 border border-sand-dark/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-warm-md space-y-6 sm:space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sand pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terra/10 text-terra-dark text-xs font-bold uppercase tracking-wider mb-1">
            <Coins className="w-3.5 h-3.5 text-terra" />
            <span>Group Value Calculator</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
            See How Affordable Exclusive Private Booking Is
          </h3>
        </div>

        {/* Weekday / Weekend Toggle with Spring layoutId */}
        <div className="flex items-center bg-cream rounded-full p-1 border border-sand shadow-inner w-full sm:w-auto justify-between sm:justify-start">
          <button
            type="button"
            onClick={() => setIsWeekend(false)}
            className={`relative isolate overflow-hidden px-4 py-2 min-h-[44px] rounded-full text-xs font-bold transition-all active:scale-95 flex-1 sm:flex-initial text-center ${
              !isWeekend ? 'text-white' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {!isWeekend && (
              <motion.div
                layoutId="cost-splitter-day-pill"
                className="absolute inset-0 bg-terra rounded-full z-0 shadow-sm"
                transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
              />
            )}
            <span className="relative z-10">Weekday</span>
          </button>
          <button
            type="button"
            onClick={() => setIsWeekend(true)}
            className={`relative isolate overflow-hidden px-4 py-2 min-h-[44px] rounded-full text-xs font-bold transition-all active:scale-95 flex-1 sm:flex-initial text-center ${
              isWeekend ? 'text-white' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {isWeekend && (
              <motion.div
                layoutId="cost-splitter-day-pill"
                className="absolute inset-0 bg-terra rounded-full z-0 shadow-sm"
                transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
              />
            )}
            <span className="relative z-10">Weekend</span>
          </button>
        </div>
      </div>

      {/* Headcount Slider & Splitter Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Slider Control with Stepper */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4 text-terra" />
              <span>Group Size</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setHeadcount((prev) => Math.max(10, prev - 1))}
                disabled={headcount <= 10}
                className="w-8 h-8 rounded-full bg-white border border-sand text-ink disabled:opacity-30 flex items-center justify-center active:scale-90 transition-all"
                aria-label="Decrease headcount"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-display text-xl sm:text-2xl font-bold text-terra-dark tabular-nums min-w-[90px] text-center">
                {headcount} Guests
              </span>
              <button
                type="button"
                onClick={() => setHeadcount((prev) => Math.min(40, prev + 1))}
                disabled={headcount >= 40}
                className="w-8 h-8 rounded-full bg-white border border-sand text-ink disabled:opacity-30 flex items-center justify-center active:scale-90 transition-all"
                aria-label="Increase headcount"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <input
            type="range"
            min={10}
            max={40}
            step={1}
            value={headcount}
            onChange={(e) => setHeadcount(parseInt(e.target.value))}
            className="w-full accent-terra h-3 bg-sand rounded-lg appearance-none cursor-pointer"
          />

          <div className="flex justify-between text-[11px] sm:text-xs text-ink-muted font-semibold">
            <span>10</span>
            <span className={headcount === 20 ? 'text-terra-dark font-bold' : ''}>20 (Base)</span>
            <span className={headcount === 30 ? 'text-terra-dark font-bold' : ''}>30</span>
            <span className={headcount === 40 ? 'text-terra-dark font-bold' : ''}>40 (Max)</span>
          </div>

          <div className="p-3.5 sm:p-4 bg-white/70 rounded-2xl border border-sand/70 text-xs text-ink-muted leading-relaxed font-sans space-y-1">
            <p className="font-bold text-ink flex items-center gap-1.5 text-forest">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Private Whole Compound Included</span>
            </p>
            <p className="text-[11px] sm:text-xs">
              Base rate covers up to 20 guests; transparent scaled tiers up to 40 guests. Zero stranger interference.
            </p>
          </div>
        </div>

        {/* Right Output Display Box */}
        <div className="lg:col-span-6 bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-sand shadow-warm-sm space-y-4 sm:space-y-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 divide-x divide-sand">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-muted">
                Per Person / Night
              </span>
              <div className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-terra mt-1 tabular-nums">
                ₱{perPersonCost.toLocaleString()}
              </div>
              <span className="text-[10px] sm:text-[11px] text-forest font-semibold mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-forest shrink-0" />
                <span>Split {headcount} guests</span>
              </span>
            </div>

            <div className="pl-3 sm:pl-6">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-muted">
                Total Nightly Rate
              </span>
              <div className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-ink mt-1 tabular-nums">
                ₱{totalRate.toLocaleString()}
              </div>
              <span className="text-[10px] sm:text-[11px] text-ink-muted font-semibold mt-1 inline-block">
                Whole Private Resort
              </span>
            </div>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-sand/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-sm active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire for {headcount} Guests</span>
            </a>

            <Link
              href="/rates"
              className="text-xs font-bold text-terra hover:underline flex items-center justify-center gap-1 py-1"
            >
              <span>View Full Pricing Table</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

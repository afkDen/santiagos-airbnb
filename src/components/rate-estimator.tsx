'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { calculateRate, MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'
import { buildWhatsAppLink } from '@/lib/whatsapp-link'
import { getUpcomingWeekendDefaults } from '@/lib/date-utils'
import { AnimatedNumber } from '@/components/animated-number'
import {
  Calendar,
  Users,
  MessageCircle,
  Coins,
  Info,
  CheckCircle2,
} from 'lucide-react'

export function RateEstimator() {
  const [dates] = useState(() => getUpcomingWeekendDefaults())
  const [guests, setGuests] = useState<number>(20)
  const [checkInDate, setCheckInDate] = useState<string>(dates.checkInString)
  const [checkOutDate, setCheckOutDate] = useState<string>(dates.checkOutString)
  const [occasion, setOccasion] = useState<string>('Barkada Getaway')

  const checkIn = new Date(checkInDate)
  const checkOut = new Date(checkOutDate)
  
  // Calculate nights and rate
  const nights = Math.max(1, Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)))
  const estimatedPrice = calculateRate(checkIn, checkOut, guests)
  const dayOfWeek = checkIn.getDay()
  const isWeekendStay = dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6

  const whatsappUrl = buildWhatsAppLink({
    checkIn,
    checkOut,
    guestCount: guests,
    occasion,
  })

  return (
    <div className="bg-white border-2 border-terra/30 rounded-3xl p-5 sm:p-10 lg:p-12 shadow-warm-lg space-y-6 sm:space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-sand pb-4 sm:pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terra/10 text-terra-dark text-xs font-bold tracking-normal">
            <Coins className="w-3.5 h-3.5 text-terra" />
            <span>Direct Booking Rate Engine</span>
          </div>
          <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-ink">
            Interactive Stay Cost Estimator
          </h3>
        </div>
        <div className="text-xs font-semibold text-ink-muted bg-sand/40 px-4 py-2 rounded-full self-start sm:self-auto">
          Entire 40-Guest Compound
        </div>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Check-In */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-ink tracking-normal flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-terra" />
              <span>Check-in Date</span>
            </span>
            <span className="text-[10px] text-terra font-semibold">
              {isWeekendStay ? 'Weekend Tier' : 'Weekday Tier'}
            </span>
          </label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full px-4 py-3 bg-cream/40 border border-sand rounded-xl text-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-terra"
          />
          <p className="text-[11px] text-ink-muted font-sans">Check-in time after 3:00 PM</p>
        </div>

        {/* Check-Out */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-ink tracking-normal flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-terra" />
            <span>Check-out Date</span>
          </label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full px-4 py-3 bg-cream/40 border border-sand rounded-xl text-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-terra"
          />
          <p className="text-[11px] text-ink-muted font-sans">Check-out time before 12:00 PM</p>
        </div>

        {/* Headcount Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-ink tracking-normal">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-terra" />
              <span>Declared Guests</span>
            </span>
            <span className="text-sm font-display font-bold text-terra-dark tabular-nums">
              {guests} {guests === 1 ? 'Guest' : 'Guests'}
            </span>
          </div>

          <input
            type="range"
            min={1}
            max={40}
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full accent-terra mt-2 cursor-pointer"
          />

          <div className="flex justify-between text-[10px] sm:text-[11px] text-ink-muted font-semibold pt-0.5">
            <span className={guests <= 20 ? 'text-terra-dark font-bold' : ''}>Base (1-20)</span>
            <span className={guests > 20 && guests <= 30 ? 'text-terra-dark font-bold' : ''}>Tier 2 (21-30)</span>
            <span className={guests > 30 ? 'text-terra-dark font-bold' : ''}>Max (31-40)</span>
          </div>
        </div>
      </div>

      {/* Occasion Selector with Spring layoutId */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-ink tracking-normal">
          Trip Type / Occasion
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {['Birthday Party', 'Barkada Getaway', 'Family Reunion', 'Corporate Outing'].map((occ) => {
            const isSelected = occasion === occ
            return (
              <button
                key={occ}
                type="button"
                onClick={() => setOccasion(occ)}
                className={`relative isolate overflow-hidden p-3 rounded-xl border text-xs font-bold text-center transition-[background-color,border-color,color,box-shadow,opacity,transform] active:scale-95 ${
                  isSelected
                    ? 'text-white border-transparent shadow-sm scale-[1.02]'
                    : 'bg-cream/40 border-sand text-ink hover:bg-cream'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-estimator-occasion"
                    className="absolute inset-0 bg-terra rounded-xl z-0 shadow-sm"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{occ}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Estimated Output Result Box with Animated Digits */}
      <div className="bg-cream-dark/60 p-6 sm:p-8 lg:p-10 rounded-2xl border border-sand flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center lg:text-left">
          <span className="text-xs font-bold tracking-normal text-terra-dark">
            Direct Booking Rate (No Hidden Usage Fees)
          </span>

          <div className="flex items-baseline justify-center lg:justify-start gap-2">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-terra-dark transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-300 tabular-nums">
              <AnimatedNumber value={estimatedPrice} prefix="₱" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-ink-muted font-sans">
              total for {nights} {nights === 1 ? 'night' : 'nights'} ({guests} guests)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-ink-muted font-sans">
            {guests > 20
              ? `Base 20 guests covered + scaled tier for ${guests - 20} extra guest(s). Up to 3 toddlers ≤3 y/o stay free.`
              : 'Standard base tier covering up to 20 declared guests with all 22+ amenities included.'}
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm sm:text-base rounded-full shadow-warm-md hover:shadow-warm-lg active:scale-95 transition-[background-color,border-color,color,box-shadow,opacity,transform] group"
        >
          <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
          <span>Inquire on WhatsApp (Pre-Filled)</span>
        </a>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="border-t border-sand/50 pt-4 text-xs text-ink-muted leading-relaxed font-sans italic flex items-start gap-2">
        <Info className="w-4 h-4 text-terra shrink-0 mt-0.5" />
        <p>{MANDATORY_PRICE_DISCLAIMER}</p>
      </div>
    </div>
  )
}

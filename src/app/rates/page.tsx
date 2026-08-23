'use client'

import { motion } from 'motion/react'
import { PRICING_TIERS, PRICING_RULES } from '@/content/pricing'
import { RateEstimator } from '@/components/rate-estimator'
import { MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'
import {
  Coins,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Building,
  Home,
} from 'lucide-react'

export default function RatesPage() {
  return (
    <div className="py-12 md:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/60 text-terra-dark text-xs font-bold uppercase tracking-wider">
          <Coins className="w-4 h-4 text-terra" />
          <span>Direct-Booking Rates • No Hidden Usage Charges</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Clear, Simple <span className="text-terra">Group Rates</span>
        </h1>

        <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
          Whole-property private rental starting at ₱25,000/night for up to 20 guests. Includes exclusive access to all 22+ amenities.
        </p>
      </motion.div>

      {/* Interactive Rate Estimator Signature Component */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <RateEstimator />
      </motion.div>

      {/* Comparison Matrix: Hotel Rooms vs. Santiagos Private Resort */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-white rounded-3xl p-6 sm:p-10 border border-sand shadow-warm-lg space-y-6"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-terra">Why Direct Private Rental Wins</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Santiagos Private Resort vs. Booking Multiple Tagaytay Hotel Rooms
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted font-sans">
            Here is how booking an entire private compound compares to booking 8–10 commercial hotel rooms for a 20–40 guest group:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Hotel Option */}
          <div className="p-6 rounded-2xl bg-sand/20 border border-sand space-y-4">
            <div className="flex items-center gap-2.5 text-ink-muted">
              <Building className="w-5 h-5" />
              <h3 className="font-serif text-lg font-bold text-ink">
                Booking 8–10 Hotel Rooms in Tagaytay
              </h3>
            </div>
            <div className="font-display text-2xl font-bold text-ink-muted tabular-nums">
              ₱50,000 – ₱80,000+ <span className="text-xs font-sans font-normal">/ night total</span>
            </div>
            <ul className="space-y-2.5 text-xs text-ink-muted font-sans">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-terra shrink-0 mt-0.5" />
                <span>Crowded shared swimming pool with unfamiliar hotel guests</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-terra shrink-0 mt-0.5" />
                <span>Strict 10:00 PM quiet hours & no private videoke lounge</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-terra shrink-0 mt-0.5" />
                <span>Heavy corkage fees on outside food, drinks, and birthday cakes</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-terra shrink-0 mt-0.5" />
                <span>Rooms scattered across different hotel floors and corridors</span>
              </li>
            </ul>
          </div>

          {/* Santiagos Option */}
          <div className="p-6 rounded-2xl bg-cream border-2 border-terra/40 space-y-4 shadow-warm-sm hover:shadow-warm-md transition-shadow">
            <div className="flex items-center gap-2.5 text-terra-dark">
              <Home className="w-5 h-5" />
              <h3 className="font-serif text-lg font-bold text-ink">
                Santiagos 100% Private Whole Compound
              </h3>
            </div>
            <div className="font-display text-2xl font-bold text-terra-dark tabular-nums">
              ₱25,000 – ₱35,000 <span className="text-xs font-sans font-normal text-ink-muted">/ night base</span>
            </div>
            <ul className="space-y-2.5 text-xs text-ink font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span><strong>100% Private Pool:</strong> Zero strangers, swim anytime day or night</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span><strong>Air-Conditioned Videoke Lounge:</strong> Sing your heart out with no curfews</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span><strong>Zero Corkage Fees:</strong> Full kitchen, cooktops, barbecue & fridges included</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span><strong>8 Full Bathrooms:</strong> Zero morning queue rush for your entire group</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Pricing Tiers Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="space-y-6"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-terra">Standard Pricing Tiers</span>
          <h2 className="font-serif text-3xl font-bold text-ink mt-1">
            Group Headcount Pricing Matrix
          </h2>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-sand shadow-warm-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-cream-dark text-ink font-serif font-bold text-sm sm:text-base border-b border-sand">
              <tr>
                <th className="px-6 py-4">Headcount Tier</th>
                <th className="px-6 py-4">Weekday Rate (Mon–Thu)</th>
                <th className="px-6 py-4">Weekend Rate (Fri–Sun)</th>
                <th className="px-6 py-4 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/50 font-sans">
              {PRICING_TIERS.map((tier) => (
                <tr key={tier.headcount} className="hover:bg-cream/40 transition-colors">
                  <td className="px-6 py-4 font-bold text-ink">{tier.headcount}</td>
                  <td className="px-6 py-4 font-display font-semibold text-terra tabular-nums">
                    ₱{tier.weekdayRate.toLocaleString()} <span className="text-xs text-ink-muted">/ night</span>
                  </td>
                  <td className="px-6 py-4 font-display font-semibold text-terra-dark tabular-nums">
                    ₱{tier.weekendRate.toLocaleString()} <span className="text-xs text-ink-muted">/ night</span>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink-muted hidden md:table-cell">{tier.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-ink-muted bg-sand/30 p-4 rounded-xl border border-sand font-sans">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
            <span><strong>Child Policy:</strong> {PRICING_RULES.childPolicy}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
            <span><strong>Extra Head Fee:</strong> {PRICING_RULES.extraHeadFee}</span>
          </div>
        </div>
      </motion.div>

      {/* What is Included List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-ink text-cream rounded-3xl p-8 sm:p-12 space-y-6 shadow-warm-lg"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gold-light">All-Inclusive Value</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mt-1">
            Everything Included in Every Booking
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm text-sand-light/90">
          {PRICING_RULES.inclusions.map((inc) => (
            <div key={inc} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>{inc}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

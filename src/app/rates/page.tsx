'use client'

import { motion } from 'motion/react'
import { PRICING_TIERS, PRICING_RULES } from '@/content/pricing'
import { RateEstimator } from '@/components/rate-estimator'
import { PageIntro } from '@/components/page-intro'
import { StayEssentials } from '@/components/stay-essentials'
import { MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'
import {
  CheckCircle2,
} from 'lucide-react'

export default function RatesPage() {
  return (
    <div className="py-12 md:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageIntro
        meta="Whole-property pricing for up to 40 guests"
        title="Know the cost before you inquire."
        description="Use the estimator for your dates and group size, then review what the private booking includes."
      />

      {/* Interactive Rate Estimator Signature Component */}
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(18px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <RateEstimator />
      </motion.div>

      <StayEssentials contained={false} />

      {/* Pricing Tiers Table */}
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(18px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="space-y-6"
      >
        <div className="section-heading">
          <h2 className="section-title">Rates by group size.</h2>
          <p className="section-copy">Compare the published weekday and weekend tiers for your declared headcount.</p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-sand shadow-warm-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-sand bg-cream-dark text-sm font-bold text-ink sm:text-base">
              <tr>
                <th className="px-6 py-4">Headcount Tier</th>
                <th className="px-6 py-4">Weekday Rate (Mon-Thu)</th>
                <th className="px-6 py-4">Weekend Rate (Fri-Sun)</th>
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
                  <td className="hidden px-6 py-4 text-sm leading-6 text-ink-muted md:table-cell">{tier.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-xl border border-sand bg-sand/30 p-4 text-sm leading-6 text-ink-muted sm:grid-cols-2">
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
        initial={{ opacity: 0, transform: 'translateY(18px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-ink text-cream rounded-3xl p-8 sm:p-12 space-y-6 shadow-warm-lg"
      >
        <div className="max-w-2xl space-y-3">
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-cream sm:text-4xl">
            Included with every booking.
          </h2>
          <p className="text-base leading-7 text-sand-light/75">The compound and listed amenities are reserved for your group.</p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-base leading-7 text-sand-light/90 md:grid-cols-2">
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

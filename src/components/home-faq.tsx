'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react'
import { PROPERTY_INFO } from '@/content/property'

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const topQuestions = [
    {
      q: 'How many guests can stay and how does pricing work?',
      a: 'The resort accommodates up to 40 guests. The base rate starts at ₱25,000/night (weekday) and ₱35,000/night (weekend) covering up to 20 guests. For 21-40 guests, transparent scaled tiers apply. Up to 3 toddlers (≤3 y/o) stay completely free.',
    },
    {
      q: 'Which amenities are included?',
      a: 'The private pool, air-conditioned videoke lounge, Kangaroo billiards, retro arcade machines, basketball court, bonfire pit, and full kitchen are included with no separate usage fees.',
    },
    {
      q: 'Can we bring our own food, drinks, and celebration cakes?',
      a: 'Absolutely! There are zero corkage fees. You have full access to our chef-grade cooktops, refrigerator, prep counters, and long indoor dining table.',
    },
  ]

  return (
    <div className="site-container max-w-5xl space-y-8">
      <div className="section-heading">
        <h2 className="section-title">Questions groups usually ask first.</h2>
        <p className="section-copy">Capacity, inclusions, and what you can bring to the resort.</p>
      </div>

      <div className="border-y border-sand-dark/70">
        {topQuestions.map((item, idx) => {
          const isOpen = openIndex === idx
          const panelId = `home-faq-panel-${idx}`

          return (
            <div
              key={item.q}
              className="border-b border-sand last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold text-ink transition-colors duration-200 hover:text-terra sm:py-6 sm:text-lg"
              >
                <span>{item.q}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                    data-motion="feedback"
                  >
                    <div className="max-w-[72ch] pb-6 text-sm leading-7 text-ink-muted">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/faq"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-terra hover:text-terra-dark"
        >
          <span>Browse all questions</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={PROPERTY_INFO.contacts.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-whatsapp hover:text-whatsapp-hover"
        >
          <MessageCircle className="h-4 w-4 fill-current" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

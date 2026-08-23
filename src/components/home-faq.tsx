'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react'
import { PROPERTY_INFO } from '@/content/property'

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const topQuestions = [
    {
      q: 'How many guests can stay and how does pricing work?',
      a: 'The resort accommodates up to 40 guests. The base rate starts at ₱25,000/night (weekday) and ₱35,000/night (weekend) covering up to 20 guests. For 21–40 guests, transparent scaled tiers apply. Up to 3 toddlers (≤3 y/o) stay completely free.',
    },
    {
      q: 'Are all 22+ amenities included with zero hidden charges?',
      a: 'Yes — private pool, air-conditioned videoke lounge, Kangaroo billiards, retro arcade machines, basketball court, bonfire pit, and full kitchen are all included with zero extra usage fees.',
    },
    {
      q: 'Can we bring our own food, drinks, and celebration cakes?',
      a: 'Absolutely! There are zero corkage fees. You have full access to our chef-grade cooktops, refrigerator, prep counters, and long indoor dining table.',
    },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terra/10 text-terra-dark text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-terra" />
          <span>Quick Answers</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {topQuestions.map((item, idx) => {
          const isOpen = openIndex === idx

          return (
            <div
              key={item.q}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                isOpen ? 'border-terra/40 shadow-warm-md' : 'border-sand shadow-warm-sm'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-ink hover:text-terra transition-colors focus:outline-none"
              >
                <span>{item.q}</span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-terra text-white' : 'bg-sand/40 text-ink'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed font-sans border-t border-sand/30 animate-in fade-in-50 duration-200">
                  {item.a}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-terra hover:underline"
        >
          <span>Read all Q1–Q8 FAQs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <span className="text-sand-dark">•</span>
        <a
          href={PROPERTY_INFO.contacts.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-whatsapp hover:underline"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-whatsapp" />
          <span>Ask custom question on WhatsApp</span>
        </a>
      </div>
    </section>
  )
}

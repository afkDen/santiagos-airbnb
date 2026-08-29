'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { AmenitiesSpotlight } from '@/components/amenities-spotlight'
import { AmenitiesCatalog } from '@/components/amenities-catalog'
import { AmenitiesChecklist } from '@/components/amenities-checklist'
import { PageIntro } from '@/components/page-intro'
import { PROPERTY_INFO } from '@/content/property'
import { MessageCircle, ArrowRight, Sparkles, UtensilsCrossed } from 'lucide-react'

export default function AmenitiesPage() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-12 lg:py-14">
      <div className="site-container">
        <PageIntro
          meta="22+ included amenities"
          title="Plenty to do, all inside your private compound."
          description="Swim, sing, play, cook, and gather without sharing the spaces with another booking."
        />
      </div>

      {/* 2. Flagship 4-Facility Spotlight Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <AmenitiesSpotlight />
      </motion.div>

      {/* 4. Full 22+ Categorized Amenity Catalog with Specs & Lightboxes */}
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Everything included, sorted by how you&apos;ll use it.
          </h2>
          <p className="max-w-[65ch] text-sm leading-6 text-ink-muted sm:text-base sm:leading-7">
            Choose a category to compare the spaces, equipment, and practical details that matter to your group.
          </p>
        </motion.div>

        <AmenitiesCatalog />

        {/* 5. What's Provided vs What to Bring Master Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <AmenitiesChecklist />
        </motion.div>

        {/* 6. Zero Corkage Guarantee Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="interactive-card flex flex-col items-start justify-between gap-6 rounded-3xl border border-sand-dark/50 bg-sand/30 p-6 sm:p-10 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-terra text-white flex items-center justify-center shrink-0 shadow-warm-sm">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                Bring food and drinks—no corkage.
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted font-sans mt-0.5">
                Bring your own food, beverages, liquor, outside catering, and celebration cakes with zero surcharge.
              </p>
            </div>
          </div>
          <a
            href={PROPERTY_INFO.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-sm active:scale-95 transition-[background-color,border-color,color,box-shadow,opacity,transform]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Confirm Booking Details</span>
          </a>
        </motion.div>

        {/* 7. Final Inquiry CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="bg-ink text-cream rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-warm-lg"
        >
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
              Planning your group stay?
            </h2>
            <p className="text-sm text-sand-light/80 font-sans">
              Reserve whole-property privacy for your group today. Check real-time weekend and holiday availability directly on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={PROPERTY_INFO.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm rounded-full shadow-lg active:scale-95 transition-[background-color,border-color,color,box-shadow,opacity,transform] group"
            >
              <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Inquire Dates on WhatsApp</span>
            </a>
            <Link
              href="/rates"
              className="inline-flex items-center gap-2 px-7 py-4 bg-cream/15 hover:bg-cream/25 border border-sand/40 text-cream font-semibold text-sm rounded-full active:scale-95 transition-[background-color,border-color,color,box-shadow,opacity,transform]"
            >
              <span>View Pricing & Capacity Calculator</span>
              <ArrowRight className="w-4 h-4 text-gold-light" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

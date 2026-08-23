'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { AmenityMarquee } from '@/components/amenity-marquee'
import { AmenitiesSpotlight } from '@/components/amenities-spotlight'
import { AmenitiesCatalog } from '@/components/amenities-catalog'
import { AmenitiesChecklist } from '@/components/amenities-checklist'
import { StickyBookingBar } from '@/components/sticky-booking-bar'
import { PROPERTY_INFO } from '@/content/property'
import { ShieldCheck, MessageCircle, ArrowRight, Sparkles, UtensilsCrossed } from 'lucide-react'

export default function AmenitiesPage() {
  return (
    <div className="py-12 md:py-16 space-y-16 sm:space-y-24">
      {/* 1. Page Display Header with Hearth Warmth Glow */}
      <div className="relative text-center max-w-3xl mx-auto space-y-4 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/60 text-terra-dark text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-forest" />
            <span>All 22+ Amenities Included • Zero Hidden Usage Fees</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
            Every Facility You Need for an <span className="text-terra">Epic Group Stay</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
            From full-size Kangaroo billiards and multiplayer arcades to late-night videoke and outdoor fireside chilling, every corner is private to your group.
          </p>
        </motion.div>
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

      {/* 3. Infinite Marquee Ticker */}
      <AmenityMarquee />

      {/* 4. Full 22+ Categorized Amenity Catalog with Specs & Lightboxes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-2 text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-terra">
            Complete Compound Equipment & Features
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Browse All 22+ Amenities by Category
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted font-sans">
            Filter below to view equipment specifications, photos, and inclusions.
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
          className="bg-sand/30 border border-sand-dark/50 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-warm-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-terra text-white flex items-center justify-center shrink-0 shadow-warm-sm">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                ₱0 Corkage Policy on Food & Drinks
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
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-sm active:scale-95 transition-all"
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
              Ready to Experience Santiagos Resort?
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm rounded-full shadow-lg active:scale-95 transition-all group"
            >
              <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Inquire Dates on WhatsApp</span>
            </a>
            <Link
              href="/rates"
              className="inline-flex items-center gap-2 px-7 py-4 bg-cream/15 hover:bg-cream/25 border border-sand/40 text-cream font-semibold text-sm rounded-full active:scale-95 transition-all"
            >
              <span>View Pricing & Capacity Calculator</span>
              <ArrowRight className="w-4 h-4 text-gold-light" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Sticky Booking Quick-Action Pill */}
      <StickyBookingBar />
    </div>
  )
}

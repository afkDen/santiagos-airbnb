'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Hero } from '@/components/hero'
import { AmenityMarquee } from '@/components/amenity-marquee'
import { InteractiveBento } from '@/components/interactive-bento'
import { EstateZoneExplorer } from '@/components/estate-zone-explorer'
import { OccasionSwitcher } from '@/components/occasion-switcher'
import { CostSplitter } from '@/components/cost-splitter'
import { HomeGalleryPreview } from '@/components/home-gallery-preview'
import { HomeFAQ } from '@/components/home-faq'
import { EditorialTestimonials } from '@/components/editorial-testimonials'
import { PROPERTY_INFO } from '@/content/property'
import { AMENITIES_CATALOG } from '@/content/amenities'
import { MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'
import { getLocalImageUrl } from '@/content/gallery'
import {
  Waves,
  Mic,
  CircleDot,
  Gamepad2,
  Flame,
  ShieldCheck,
  ThermometerSnowflake,
  Users,
  UtensilsCrossed,
  Coins,
  ArrowRight,
  MessageCircle,
  Phone,
  ChefHat,
  Dribbble,
  Dumbbell,
  Bed,
  Droplets,
  Wifi,
  Car,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

function getAmenityIcon(iconName: string) {
  switch (iconName) {
    case 'Waves':
      return <Waves className="w-6 h-6 text-terra" />
    case 'Mic':
      return <Mic className="w-6 h-6 text-terra" />
    case 'CircleDot':
      return <CircleDot className="w-6 h-6 text-terra" />
    case 'Gamepad2':
      return <Gamepad2 className="w-6 h-6 text-terra" />
    case 'Flame':
      return <Flame className="w-6 h-6 text-terra" />
    case 'ChefHat':
    case 'UtensilsCrossed':
      return <ChefHat className="w-6 h-6 text-terra" />
    case 'Dribbble':
      return <Dribbble className="w-6 h-6 text-terra" />
    case 'Dumbbell':
      return <Dumbbell className="w-6 h-6 text-terra" />
    case 'Bed':
      return <Bed className="w-6 h-6 text-terra" />
    case 'Droplets':
    case 'ShowerHead':
      return <Droplets className="w-6 h-6 text-terra" />
    case 'Wifi':
      return <Wifi className="w-6 h-6 text-terra" />
    case 'Car':
      return <Car className="w-6 h-6 text-terra" />
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-forest" />
    default:
      return <Sparkles className="w-6 h-6 text-terra" />
  }
}

export default function HomePage() {
  const featuredAmenities = AMENITIES_CATALOG.filter((a) => a.featured)

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. Hero Section with Interactive Multi-View Dock */}
      <Hero />

      {/* 2. Continuous Marquee Ticker */}
      <AmenityMarquee />

      {/* 3. 3D Perspective Card Bento Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
            Where Industrial Chic Meets <span className="text-terra">Highland Warmth</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
            Engineered from real shipping containers with exposed brick, ambient golden lighting, and breezy verandas designed for effortless group gatherings.
          </p>
        </div>

        <InteractiveBento />
      </motion.section>

      {/* 4. Interactive Estate Zone & Architectural Layout Navigator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <EstateZoneExplorer />
      </motion.div>

      {/* 5. Interactive Occasion Switcher */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <OccasionSwitcher />
      </motion.section>

      {/* 6. Group Cost Splitter */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <CostSplitter />
      </motion.section>

      {/* 7. Real Property Photo Preview Grid with Click-to-Enlarge Lightbox */}
      <HomeGalleryPreview />

      {/* 8. Amenity Standout Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-cream-dark/60 py-20 border-y border-sand/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-terra">
                Everything Included • No Hidden Fees
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mt-1">
                22+ Amenities to Play, Sing & Chill
              </h2>
            </div>
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cream hover:bg-white border border-sand text-ink text-xs sm:text-sm font-bold rounded-full transition-all shadow-sm hover:shadow active:scale-95"
            >
              <span>See Full 22+ Amenity Catalog</span>
              <ArrowRight className="w-4 h-4 text-terra" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredAmenities.map((amenity) => (
              <div
                key={amenity.name}
                className="bg-white rounded-3xl p-7 border border-sand/80 shadow-warm-sm hover:shadow-warm-lg hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-13 h-13 rounded-2xl bg-sand/40 text-terra flex items-center justify-center p-3 group-hover:scale-110 group-hover:bg-terra/15 transition-all duration-300">
                    {getAmenityIcon(amenity.iconName)}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">{amenity.name}</h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                    {amenity.description}
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-sand/40 text-[11px] font-bold text-terra-dark uppercase tracking-wider">
                  {amenity.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 9. The Core Differentiators (Asymmetric 50/50 Anchor-and-River Layout) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
            Why Groups Choose Us for Their Big Days
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
            Engineered from the ground up to eliminate the friction points of group vacations in the Philippines.
          </p>
        </div>

        {/* Asymmetric 50/50 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Anchor: Cast-Iron Dark Hero Slab */}
          <div className="lg:col-span-5 bg-[#1C130D] text-cream p-8 sm:p-10 rounded-3xl border border-sand/20 shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden group">
            <Image
              src={getLocalImageUrl('out1')}
              alt="Santiago Resort Compound Evening"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C130D] via-[#1C130D]/70 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-terra/25 border border-terra/40 text-gold-light text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-light" />
                <span>100% Whole-Property Privacy</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-cream leading-tight">
                Zero Shared Pools. Zero Stranger Interference.
              </h3>
            </div>

            <div className="relative z-10 space-y-4 pt-6 border-t border-sand/20">
              <p className="text-xs sm:text-sm text-sand-light/90 font-sans leading-relaxed">
                When you book Santiagos, the entire gated estate belongs exclusively to your party. Your group gets private reign over all 20 beds, the swimming pool, videoke lounge, and dining hall.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-gold-light">
                <CheckCircle2 className="w-4 h-4 text-forest-light shrink-0" />
                <span>Guaranteed single-party compound booking</span>
              </div>
            </div>
          </div>

          {/* Right River: Unboxed Feature Stack with Hairline Dividers */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-sand/70 shadow-warm-sm flex flex-col justify-between divide-y divide-sand/60">
            {/* Item 1 */}
            <div className="pb-6 flex items-start gap-4 sm:gap-5">
              <div className="w-11 h-11 rounded-2xl bg-sand/50 text-terra flex items-center justify-center shrink-0 mt-0.5">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-ink">
                  Cool 18–24°C Highland Weather
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Located in Alfonso, Cavite at ~600 meters elevation, enjoy refreshing mountain temperatures just 15 minutes past Tagaytay Twin Lakes and 90 minutes from Metro Manila.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="py-6 flex items-start gap-4 sm:gap-5">
              <div className="w-11 h-11 rounded-2xl bg-sand/50 text-terra flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-ink">
                  8 Full Bathrooms — Zero Morning Lines
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  No waiting in line for showers. With 8 rainfall bathrooms spread across the Master Suites and bunk corridors, 40 guests can get ready simultaneously.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="py-6 flex items-start gap-4 sm:gap-5">
              <div className="w-11 h-11 rounded-2xl bg-sand/50 text-terra flex items-center justify-center shrink-0 mt-0.5">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-ink">
                  Full Chef Kitchen & ₱0 Corkage Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Bring your own food, drinks, outside catering, and birthday cakes with zero corkage fees. Heavy-duty gas cooktops, refrigerators, and cookware are all included.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="pt-6 flex items-start gap-4 sm:gap-5">
              <div className="w-11 h-11 rounded-2xl bg-sand/50 text-terra flex items-center justify-center shrink-0 mt-0.5">
                <Coins className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-ink">
                  Transparent Group Value (~₱1,250/Head)
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Starting at ₱25,000/night for up to 20 guests on weekdays. Split across a full group, that is less than a single hotel room in Tagaytay with 10x the space and amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 10. Editorial Guest Reviews & Testimonials Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <EditorialTestimonials />
      </motion.div>

      {/* 11. Landing Mini-FAQ Accordion */}
      <HomeFAQ />

      {/* 12. Final Direct Booking Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4"
      >
        <div className="bg-sand/30 border border-sand-dark/50 rounded-3xl p-8 sm:p-12 lg:p-16 space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
              Ready to Secure Your Group&apos;s Dates?
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
              Weekend and holiday dates fill up fast. Connect directly with our team on WhatsApp to check real-time calendar availability or place a temporary date hold.
            </p>
            <p className="text-xs text-ink-muted italic border-t border-sand/50 pt-4">
              {MANDATORY_PRICE_DISCLAIMER}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PROPERTY_INFO.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-base rounded-full shadow-warm-lg hover:shadow-xl transition-all active:scale-95 group"
            >
              <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              <span>Chat Directly on WhatsApp ({PROPERTY_INFO.contacts.phone2.display})</span>
            </a>

            <a
              href={PROPERTY_INFO.contacts.phone1.tel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-cream-dark hover:bg-sand text-ink font-bold text-base rounded-full border border-sand-dark transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-terra" />
              <span>Call {PROPERTY_INFO.contacts.phone1.display}</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

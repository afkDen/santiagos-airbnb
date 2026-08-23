'use client'

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
import { StickyBookingBar } from '@/components/sticky-booking-bar'
import { PROPERTY_INFO } from '@/content/property'
import { AMENITIES_CATALOG } from '@/content/amenities'
import { TESTIMONIALS } from '@/content/reviews'
import { MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'
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
  Star,
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

  const whyReasons = [
    {
      title: '100% Whole-Property Privacy',
      desc: 'No shared pool, no stranger noise. Your group enjoys exclusive access to the entire gated container estate.',
      icon: ShieldCheck,
    },
    {
      title: 'Cool 18–24°C Highland Breeze',
      desc: 'Sitting at ~600m elevation in Alfonso, Cavite, enjoy refreshing mountain weather just 90 minutes from Metro Manila.',
      icon: ThermometerSnowflake,
    },
    {
      title: 'Engineered for 40 Guests',
      desc: '20 comfortable beds across 4 dedicated room zones, plus 8 full bathrooms so morning rushes are completely eliminated.',
      icon: Users,
    },
    {
      title: '22+ Included Amenities',
      desc: 'Private pool, air-conditioned videoke room, Kangaroo billiards, retro arcades, basketball court, and bonfire pit with zero extra usage fees.',
      icon: Waves,
    },
    {
      title: 'Full Kitchen & No Corkage',
      desc: 'Bring your own food, drinks, and celebration cakes. Fully-equipped cooktop, refrigerator, cookware, and long dining table included.',
      icon: UtensilsCrossed,
    },
    {
      title: 'Smart Group Value',
      desc: 'Starting at ₱25,000/night for up to 20 guests — split across a full group, that’s as low as ~₱1,250/person.',
      icon: Coins,
    },
  ]

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. Hero Section with Interactive Multi-View Dock & Video Tour Trigger */}
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
          <span className="text-xs font-bold uppercase tracking-wider text-terra">
            Authentic Container Architecture
          </span>
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

      {/* 9. The 6 Core Reasons */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-terra">The Santiagos Difference</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
            Why Groups Choose Us for Their Big Days
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyReasons.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-white p-7 sm:p-8 rounded-3xl border border-sand/70 shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1.5 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-terra/15 text-terra-dark flex items-center justify-center group-hover:scale-110 group-hover:bg-terra group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink">{item.title}</h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </motion.section>

      {/* 10. Guest Reviews & Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-ink text-cream py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-light">
              Verified Guest Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
              Loved by Barkadas, Families & Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-ink-soft/90 p-7 sm:p-8 rounded-3xl border border-sand/20 flex flex-col justify-between space-y-5 shadow-warm-lg hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base italic text-sand-light/95 font-serif leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-sand/15">
                  <div className="font-bold text-sm text-gold-light">{t.name}</div>
                  <div className="text-xs text-sand-light/70">{t.origin} • {t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

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
              Dates for weekends and holidays fill quickly. Message us directly on WhatsApp to check real-time availability, request date holds, or ask questions.
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
              <span>Chat Directly on WhatsApp (0922 830 5320)</span>
            </a>

            <a
              href={PROPERTY_INFO.contacts.phone1.tel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-cream-dark hover:bg-sand text-ink font-bold text-base rounded-full border border-sand-dark transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-terra" />
              <span>Call 0917 800 5320</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Floating Sticky Booking Quick-Action Pill */}
      <StickyBookingBar />
    </div>
  )
}

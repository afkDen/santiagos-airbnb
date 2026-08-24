'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { getLocalImageUrl } from '@/content/gallery'
import { buildWhatsAppLink } from '@/lib/whatsapp-link'
import { FullscreenLightbox } from '@/components/fullscreen-lightbox'
import {
  PartyPopper,
  Gamepad2,
  Users,
  Briefcase,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  CalendarCheck,
  Maximize2,
} from 'lucide-react'

export function OccasionSwitcher() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const occasions = [
    {
      id: 'birthday',
      label: 'Birthdays & Debuts',
      icon: PartyPopper,
      title: 'Milestone 18th, 25th, 30th & 50th Celebrations',
      description:
        'Celebrate with no stranger interference. Gather around the solid acacia live-edge banquet dining table for celebratory toasts, transition seamlessly from an afternoon pool dip to late-night videoke, and cut your birthday cake with zero corkage fees.',
      image: getLocalImageUrl('din1'), // 379.2 KB High-Res Banquet Table
      features: [
        'Solid acacia live-edge banquet dining table for toasts',
        'Air-conditioned soundproofed videoke lounge with no curfew',
        'No cake or food corkage — commercial kitchen included',
        'Evening bonfire pit for cake cutting & late cocktails',
      ],
      suggestedHeadcount: '15–35 Guests',
    },
    {
      id: 'barkada',
      label: 'Barkada Getaways',
      icon: Gamepad2,
      title: 'Competitive Gaming, Billiards & Night Swimming',
      description:
        'The ultimate weekend escape for friend groups. Challenge each other on the Kangaroo pool table, battle on classic retro arcade machines, play pickup basketball on the half-court, and gather around the sunken bonfire pit under the stars.',
      image: getLocalImageUrl('bill2'),
      features: [
        'Kangaroo Billiards Table & Retro Arcades',
        'Regulation Basketball Half-Court',
        'Night swimming in the illuminated private pool',
        'Sunken bonfire circle for marshmallow roasting & drinks',
      ],
      suggestedHeadcount: '20–40 Guests',
    },
    {
      id: 'family',
      label: 'Family Reunions',
      icon: Users,
      title: 'Multi-Generational Vacations with Zero Queues',
      description:
        'Finally, a private resort where everyone has space. Elders relax in quiet air-conditioned VIP master suites, kids splash safely in the pool and arcade room, and 8 full bathrooms ensure morning routines are completely stress-free.',
      image: getLocalImageUrl('out1'),
      features: [
        '8 Full Bathrooms — Zero morning queues for 40 people',
        '2 VIP Master Suites with private ensuite baths for elders',
        'Full chef-grade kitchen with no corkage fees',
        'Up to 3 toddlers (≤3 y/o) stay 100% FREE',
      ],
      suggestedHeadcount: '25–40 Guests',
    },
    {
      id: 'corporate',
      label: 'Corporate Team Retreats',
      icon: Briefcase,
      title: 'Executive Planning & High-Energy Team Outings',
      description:
        'Bring your entire company or department together in an inspiring, secluded setting. Host strategic fireside sessions, pool relay games, and bonding tournaments in a private compound with high-speed Wi-Fi and ample parking.',
      image: getLocalImageUrl('bbl1'),
      features: [
        'Exclusive whole-property access with zero outsiders',
        'High-speed Wi-Fi and multiple presentation spaces',
        'Gated secure parking for multiple team vans and SUVs',
        'Dedicated quarters for drivers and support staff',
      ],
      suggestedHeadcount: '20–40 Team Members',
    },
  ]

  const current = occasions[activeTab]
  const whatsappUrl = buildWhatsAppLink({ occasion: current.title })

  return (
    <div className="bg-white border border-sand rounded-3xl p-6 sm:p-10 lg:p-12 shadow-warm-lg space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sand pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terra/10 text-terra-dark text-xs font-bold uppercase tracking-wider">
            <CalendarCheck className="w-3.5 h-3.5 text-terra" />
            <span>Tailored Experience Finder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            What Kind of Group Stay Are You Planning?
          </h2>
        </div>
        <div className="text-xs font-semibold text-ink-muted bg-sand/40 px-3.5 py-1.5 rounded-full self-start md:self-auto">
          Click any event type to preview
        </div>
      </div>

      {/* Interactive Tabs with Spring layoutId */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {occasions.map((occ, idx) => {
          const Icon = occ.icon
          const isActive = activeTab === idx

          return (
            <button
              key={occ.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`relative isolate overflow-hidden p-3 sm:p-4 rounded-2xl border text-left transition-all duration-200 active:scale-95 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 ${
                isActive
                  ? 'text-cream border-transparent shadow-warm-md scale-[1.02]'
                  : 'bg-cream/40 border-sand text-ink hover:bg-cream hover:border-terra/40'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-occasion-tab"
                  className="absolute inset-0 bg-ink rounded-2xl z-0 shadow-warm-md"
                  transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                />
              )}
              <div
                className={`relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isActive ? 'bg-terra text-white' : 'bg-sand/60 text-terra-dark'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="relative z-10">
                <div className="text-xs sm:text-sm font-bold leading-tight line-clamp-1">{occ.label}</div>
                <div className={`text-[10px] sm:text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-gold-light' : 'text-ink-muted'}`}>
                  {occ.suggestedHeadcount}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Tab Content Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-2"
        >
          {/* Photo Container (Clean without floating tag pills) */}
          <div
            onClick={() => setLightboxImage(current.image)}
            className="lg:col-span-6 relative h-72 sm:h-84 md:h-96 lg:h-[440px] rounded-3xl overflow-hidden shadow-warm-md border border-sand bg-sand/20 cursor-pointer group"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-3 right-3 p-2 rounded-full bg-ink/70 text-cream backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-gold-light" />
            </div>
          </div>

          {/* Details & Action */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-terra">
                Recommended for {current.suggestedHeadcount}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                {current.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2.5 pt-2 border-t border-sand/60">
              {current.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm rounded-full shadow-warm-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire for {current.label.split('&')[0].trim()}</span>
              </a>

              <Link
                href="/occasions"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-cream hover:bg-cream-dark border border-sand text-ink text-xs sm:text-sm font-semibold rounded-full active:scale-95 transition-all"
              >
                <span>View Full Packages</span>
                <ArrowRight className="w-3.5 h-3.5 text-terra" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen Portal Lightbox (immune to stacking contexts) */}
      <FullscreenLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage}
        title={current.title}
        subtitle={`Recommended for ${current.suggestedHeadcount}`}
        category={current.label}
      />
    </div>
  )
}

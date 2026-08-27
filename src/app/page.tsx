import Link from 'next/link'
import { ArrowRight, CircleDot, ChefHat, Gamepad2, Mic, Waves } from 'lucide-react'
import { Hero } from '@/components/hero'
import { PropertyStory } from '@/components/property-story'
import { CostSplitter } from '@/components/cost-splitter'
import { HomeGalleryPreview } from '@/components/home-gallery-preview'
import { HomeFAQ } from '@/components/home-faq'
import { EditorialTestimonials } from '@/components/editorial-testimonials'
import { StayEssentials } from '@/components/stay-essentials'
import { AmenityMosaic } from '@/components/amenity-mosaic'
import { BookingCallout } from '@/components/booking-callout'

const AMENITY_GROUPS = [
  {
    title: 'Swim',
    detail: 'Private pool, waterfall, and sun deck',
    icon: Waves,
  },
  {
    title: 'Sing',
    detail: 'Air-conditioned videoke lounge',
    icon: Mic,
  },
  {
    title: 'Play',
    detail: 'Billiards, arcades, and basketball',
    icon: Gamepad2,
  },
  {
    title: 'Gather',
    detail: 'Kitchen, dining, barbecue, and bonfire',
    icon: ChefHat,
  },
]

export default function HomePage() {
  return (
    <div className="pb-20">
      <Hero />

      <PropertyStory />

      <section className="section-space bg-cream-dark/70">
        <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8">
          <div className="section-heading lg:col-span-5 lg:self-end">
            <h2 className="section-title">Plenty to do without leaving the gate.</h2>
            <p className="section-copy">
              The compound is set up for groups that want active afternoons, long dinners, and late-night catch-ups in one place.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            <AmenityMosaic />
          </div>

          <div className="space-y-6 lg:col-span-5 lg:self-start">
            <div className="grid gap-x-6 sm:grid-cols-2">
              {AMENITY_GROUPS.map(({ title, detail, icon: Icon }) => (
                <div key={title} className="flex gap-3 border-t border-sand-dark/70 py-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-terra" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-bold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/amenities" className="button-primary">
                <span>See all amenities</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/occasions" className="button-secondary">
                <CircleDot className="h-4 w-4 text-terra" aria-hidden="true" />
                <span>Plan an occasion</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container space-y-10">
          <div className="section-heading">
            <h2 className="section-title">Know the group cost before you inquire.</h2>
            <p className="section-copy">
              Adjust the group size and stay type to see how a whole-property booking can split across your guests.
            </p>
          </div>
          <CostSplitter />
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <StayEssentials />
      </section>

      <section className="section-space bg-cream-dark/45">
        <HomeGalleryPreview />
      </section>

      <EditorialTestimonials />

      <section className="section-space">
        <HomeFAQ />
      </section>

      <BookingCallout />
    </div>
  )
}

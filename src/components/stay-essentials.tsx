import Link from 'next/link'
import { ArrowRight, CarFront, Clock3, ShieldCheck, UtensilsCrossed } from 'lucide-react'
import { PROPERTY_INFO } from '@/content/property'

const STAY_FACTS = [
  {
    label: 'Arrival',
    value: PROPERTY_INFO.stayDetails.checkIn,
    detail: 'Message ahead if you need to ask about an earlier arrival.',
    icon: Clock3,
  },
  {
    label: 'Departure',
    value: PROPERTY_INFO.stayDetails.checkOut,
    detail: 'Plan group packing and room checks before noon.',
    icon: Clock3,
  },
  {
    label: 'Parking',
    value: 'Inside the gated compound',
    detail: PROPERTY_INFO.stayDetails.parking,
    icon: CarFront,
  },
  {
    label: 'Food and drinks',
    value: 'Bring your own with zero corkage',
    detail: 'Use the group kitchen, refrigerator, and outdoor barbecue station.',
    icon: UtensilsCrossed,
  },
]

export function StayEssentials({ contained = true }: { contained?: boolean }) {
  return (
    <div className={contained ? 'site-container' : undefined}>
      <div className="grid gap-10 border-y border-sand-dark/70 py-10 md:py-12 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-4 lg:col-span-4">
          <h2 className="font-serif text-3xl font-bold leading-[1.08] tracking-[-0.025em] text-ink sm:text-4xl">
            Plan the practical details.
          </h2>
          <p className="max-w-[44ch] text-base leading-7 text-ink-muted">
            The essentials your group organizer needs before confirming dates and transport.
          </p>
          <div className="flex items-start gap-3 text-sm leading-6 text-ink-muted">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
            <span>{PROPERTY_INFO.stayDetails.petPolicy}</span>
          </div>
          <Link href="/faq" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-terra hover:text-terra-dark">
            Read booking answers
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <dl className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
          {STAY_FACTS.map(({ label, value, detail, icon: Icon }) => (
            <div key={label} className="grid grid-cols-[auto_1fr] gap-x-4 border-t border-sand-dark/70 py-5 sm:py-6">
              <Icon className="mt-1 h-5 w-5 text-terra" aria-hidden="true" />
              <div>
                <dt className="text-sm font-bold text-ink-muted">{label}</dt>
                <dd>
                  <span className="mt-1 block text-base font-bold leading-6 text-ink">{value}</span>
                  <span className="mt-2 block text-sm leading-6 text-ink-muted">{detail}</span>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

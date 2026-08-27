import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { PROPERTY_INFO } from '@/content/property'
import { getLocalImageUrl } from '@/content/gallery'
import { MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'

export function BookingCallout() {
  return (
    <section className="site-container pt-4">
      <div className="relative min-h-[430px] overflow-hidden rounded-2xl bg-ink text-cream shadow-warm-lg sm:min-h-[500px]">
        <Image
          src={getLocalImageUrl('ext3')}
          alt="Night aerial view of the private Santiagos Resort compound"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="relative z-10 flex min-h-[430px] flex-col justify-end p-7 sm:min-h-[500px] sm:p-10 lg:p-14">
          <div className="max-w-3xl space-y-5">
            <h2 className="max-w-[11ch] font-serif text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-cream sm:text-5xl lg:text-6xl">
              Have dates in mind?
            </h2>
            <p className="max-w-[58ch] text-base leading-7 text-sand-light/85 sm:text-lg sm:leading-8">
              Send your preferred dates, group size, and occasion. The team will confirm availability directly.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-whatsapp-hover hover:shadow-warm-md"
              >
                <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
                <span>Check dates on WhatsApp</span>
              </a>
              <Link href="/contact" className="inline-flex min-h-11 items-center text-sm font-bold text-gold-light underline-offset-4 hover:underline">
                Send detailed inquiry
              </Link>
            </div>
            <p className="max-w-[75ch] text-xs leading-5 text-sand-light/70">{MANDATORY_PRICE_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

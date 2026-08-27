import Link from 'next/link'
import { ExternalLink, Facebook, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PROPERTY_INFO } from '@/content/property'
import { MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'

const EXPLORE_LINKS = [
  { href: '/amenities', label: 'Amenities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/rooms', label: 'Rooms & baths' },
  { href: '/rates', label: 'Rates & pricing' },
  { href: '/occasions', label: 'Occasions' },
  { href: '/location', label: 'Location & map' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-sand/15 bg-charcoal pb-24 pt-14 text-sand-light md:pb-14">
      <div className="site-container">
        <div className="grid gap-10 border-b border-sand/15 pb-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <div>
              <p className="font-script text-5xl leading-none text-gold-light">Santiago&apos;s</p>
              <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-sand-light/60">
                PRIVATE RESORT, ALFONSO
              </p>
            </div>
            <p className="max-w-md text-sm leading-7 text-sand-light/75">
              One private compound for up to 40 guests, with the pool, games, dining areas, sleeping zones, and eight bathrooms reserved for your group.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-xs font-bold text-white transition-[background-color,transform] duration-200 hover:bg-whatsapp-hover"
              >
                <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
                WhatsApp
              </a>
              <a href={PROPERTY_INFO.contacts.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20" aria-label="Santiagos Resort on Facebook">
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={PROPERTY_INFO.contacts.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20" aria-label="Santiagos Resort on Instagram">
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={PROPERTY_INFO.contacts.airbnb} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-airbnb/40 bg-airbnb/15 px-4 py-2 text-xs font-bold text-airbnb hover:bg-airbnb/25">
                Airbnb
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer navigation">
            <h2 className="text-sm font-bold text-cream">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-sand-light/75 lg:grid-cols-1">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-5 lg:col-span-4">
            <h2 className="text-sm font-bold text-cream">Direct contact</h2>
            <div className="flex items-start gap-3 text-sm leading-6 text-sand-light/75">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-terra-light" aria-hidden="true" />
              <p>{PROPERTY_INFO.address.full}</p>
            </div>
            <div className="grid gap-3 text-sm">
              <a href={PROPERTY_INFO.contacts.phone1.tel} className="inline-flex min-h-11 items-center gap-3 text-cream hover:text-gold-light">
                <Phone className="h-4 w-4 text-terra-light" aria-hidden="true" />
                {PROPERTY_INFO.contacts.phone1.display}
              </a>
              <a href={PROPERTY_INFO.contacts.phone2.tel} className="inline-flex min-h-11 items-center gap-3 text-cream hover:text-gold-light">
                <Phone className="h-4 w-4 text-terra-light" aria-hidden="true" />
                {PROPERTY_INFO.contacts.phone2.display}
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-5 pt-7">
          <p className="max-w-4xl text-xs leading-6 text-sand-light/60">{MANDATORY_PRICE_DISCLAIMER}</p>
          <div className="flex flex-col gap-2 text-xs text-sand-light/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Santiagos Private Resort. All rights reserved.</p>
            <p>Kaytitinga II, Alfonso, Cavite</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

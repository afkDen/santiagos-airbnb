import Link from 'next/link'
import { PROPERTY_INFO } from '@/content/property'
import { MANDATORY_PRICE_DISCLAIMER } from '@/lib/calculate-rate'
import { MapPin, Phone, MessageCircle, Facebook, Instagram, ExternalLink, ShieldCheck } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal text-sand-light border-t border-sand/20 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sand/15">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-script text-4xl sm:text-5xl text-gold-light tracking-wide leading-none">
                Santiago&apos;s
              </span>
              <span className="font-display text-xs uppercase tracking-[0.24em] text-sand-light/70 font-semibold mt-1">
                Private Resort • Alfonso, Tagaytay
              </span>
            </div>
            <p className="text-sm text-sand-light/80 leading-relaxed font-sans max-w-sm">
              Whole-property 40-guest industrial chic container resort in the cool Alfonso highlands. 22+ included amenities, private pool, videoke lounge, and 8 zero-queue bathrooms.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-whatsapp flex items-center justify-center text-white hover:scale-105 transition-transform"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
              <a
                href={PROPERTY_INFO.contacts.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream hover:scale-105 transition-transform"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PROPERTY_INFO.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream hover:scale-105 transition-transform"
                title="Instagram @santiagos.to"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PROPERTY_INFO.contacts.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-airbnb/20 border border-airbnb/40 text-airbnb text-xs font-bold hover:bg-airbnb/30 transition-colors flex items-center gap-1"
                title="Airbnb Listing"
              >
                <span>Airbnb Listing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold text-cream mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/amenities" className="hover:text-gold-light transition-colors">
                  22+ Included Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-light transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-gold-light transition-colors">
                  Rooms & Bedding Setup
                </Link>
              </li>
              <li>
                <Link href="/rates" className="hover:text-gold-light transition-colors">
                  Pricing & Rate Estimator
                </Link>
              </li>
              <li>
                <Link href="/occasions" className="hover:text-gold-light transition-colors">
                  Occasions & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practical Info */}
          <div>
            <h4 className="font-serif text-base font-semibold text-cream mb-4">Information</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/location" className="hover:text-gold-light transition-colors">
                  Driving Directions & Waze
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-light transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light transition-colors">
                  Pre-Arrival Packing Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light transition-colors">
                  House Rules & Policies
                </Link>
              </li>
              <li className="pt-2 text-xs text-sand-light/60 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-forest" />
                <span>Strict Pet-Free Property</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="font-serif text-base font-semibold text-cream mb-4">Direct Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terra-light shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-sand-light/80">
                  {PROPERTY_INFO.address.full}
                  <br />
                  <span className="text-gold-light font-medium">{PROPERTY_INFO.elevation}</span>
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <a
                  href={PROPERTY_INFO.contacts.phone1.tel}
                  className="flex items-center gap-2 text-xs font-semibold text-cream hover:text-gold-light transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-terra-light" />
                  <span>{PROPERTY_INFO.contacts.phone1.display} (Primary)</span>
                </a>
                <a
                  href={PROPERTY_INFO.contacts.phone2.tel}
                  className="flex items-center gap-2 text-xs font-semibold text-cream hover:text-gold-light transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-terra-light" />
                  <span>{PROPERTY_INFO.contacts.phone2.display} (Sun/Globe)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Legal Price Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-ink/60 border border-sand/15 text-xs text-sand-light/75 leading-relaxed font-sans">
            <p>{MANDATORY_PRICE_DISCLAIMER}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-sand-light/60 gap-3">
            <p>© {new Date().getFullYear()} Santiagos Private Resort. All rights reserved.</p>
            <p>Kaytitinga II, Alfonso, Cavite 4123, Philippines</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { PROPERTY_INFO } from '@/content/property'
import { buildWhatsAppLink } from '@/lib/whatsapp-link'
import { PageIntro } from '@/components/page-intro'
import {
  MessageCircle,
  Phone,
  Facebook,
  Instagram,
  MapPin,
  Clock,
  ShieldCheck,
  CheckSquare,
  Square,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '20',
    occasion: 'Birthday Party',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Pre-Arrival Packing Checklist Items from §9
  const initialChecklist = [
    { label: 'Food & cooking ingredients / snacks', checked: false },
    { label: 'Alcoholic & non-alcoholic beverages / drinks', checked: false },
    { label: 'Birthday cake & celebration party decor', checked: false },
    { label: 'Swimwear, goggles & pool towels', checked: false },
    { label: 'Personal toiletries & bath towels', checked: false },
    { label: 'Extra clothes & sleepwear', checked: false },
    { label: 'Light jacket or sweater (Alfonso evenings drop to 18°C)', checked: false },
    { label: 'Phone chargers, powerbanks & selfie sticks', checked: false },
    { label: 'Cooler & extra ice bags', checked: false },
    { label: 'Marshmallows & hotdogs for the bonfire pit', checked: false },
    { label: 'Board games / card games', checked: false },
    { label: 'Personal maintenance medications', checked: false },
  ]

  const [checklist, setChecklist] = useState(initialChecklist)

  const toggleChecklist = (index: number) => {
    setChecklist((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    )
  }

  const packedCount = checklist.filter((i) => i.checked).length
  const progressPercent = Math.round((packedCount / checklist.length) * 100)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        setSubmitError('We could not save your inquiry. Your details are still here, so you can try again or open WhatsApp directly.')
      }
    } catch (err) {
      console.error('Error submitting form to API:', err)
      setSubmitError('We could not connect to the inquiry service. Your details are still here, so you can try again or open WhatsApp directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12 md:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageIntro
        meta="Direct booking with the Santiagos team"
        title="Check your dates directly."
        description="Message us now on WhatsApp or send the details your group already knows. We will confirm availability and next steps."
      />

      {/* Main Grid: Form + Direct Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Col: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-sand shadow-warm-md space-y-6"
        >
          <div className="space-y-1 border-b border-sand pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Send a booking inquiry
            </h2>
            <p className="text-sm leading-6 text-ink-muted">
              Share the details that will help us answer your availability question.
            </p>
          </div>

          {isSuccess ? (
            <div className="p-6 bg-forest/10 border border-forest/30 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-forest font-bold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Inquiry received</span>
              </div>
              <p className="text-sm leading-6 text-ink-muted">
                Your details were saved. Open WhatsApp when you are ready to continue with the reservations team.
              </p>
              <button
                type="button"
                onClick={() => {
                  const checkIn = formData.checkIn ? new Date(formData.checkIn) : undefined
                  const checkOut = formData.checkOut ? new Date(formData.checkOut) : undefined
                  const guests = parseInt(formData.guests) || 20
                  window.open(buildWhatsAppLink({ checkIn, checkOut, guestCount: guests, occasion: formData.occasion }), '_blank')
                }}
                className="px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold rounded-full flex items-center gap-2 active:scale-95 transition-[background-color,transform] duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open WhatsApp Chat</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
              {submitError ? (
                <div role="alert" className="flex gap-3 rounded-xl border border-terra/30 bg-terra/10 p-4 text-sm leading-6 text-ink">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-terra" aria-hidden="true" />
                  <p>{submitError}</p>
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-sm font-bold text-ink">
                    Your name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Maria Santos"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-cream/40 border border-sand rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-terra"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-sm font-bold text-ink">
                    Email address <span className="font-normal text-ink-muted">(optional)</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="maria@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-cream/40 border border-sand rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-terra"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-check-in" className="text-sm font-bold text-ink">
                    Check-in date
                  </label>
                  <input
                    id="contact-check-in"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3 py-3 bg-cream/40 border border-sand rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-terra text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-check-out" className="text-sm font-bold text-ink">
                    Check-out date
                  </label>
                  <input
                    id="contact-check-out"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3 py-3 bg-cream/40 border border-sand rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-terra text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-guests" className="text-sm font-bold text-ink">
                    Estimated guests
                  </label>
                  <input
                    id="contact-guests"
                    name="guests"
                    type="number"
                    min={1}
                    max={40}
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 bg-cream/40 border border-sand rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-terra text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-occasion" className="text-sm font-bold text-ink">
                  Occasion or trip type
                </label>
                <select
                  id="contact-occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-4 py-3 bg-cream/40 border border-sand rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-terra text-sm"
                >
                  <option value="Birthday Party">Birthday Party / Milestone</option>
                  <option value="Barkada Getaway">Barkada Trip / Weekend Escape</option>
                  <option value="Family Reunion">Family Reunion</option>
                  <option value="Corporate Team Building">Corporate Team Outing / Retreat</option>
                  <option value="General Vacation">General Group Vacation</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-sm font-bold text-ink">
                  Questions or requests
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us what your group needs"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-cream/40 border border-sand rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-terra text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm sm:text-base rounded-full shadow-warm-md hover:shadow-warm-lg active:scale-95 transition-[background-color,box-shadow,opacity,transform] duration-200 disabled:opacity-75 group"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                )}
                <span>{isSubmitting ? 'Sending inquiry...' : 'Send inquiry details'}</span>
              </button>
            </form>
          )}
        </motion.div>

        {/* Right Col: Direct Channels & Stay Policies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Direct Channels Box */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-warm-md space-y-5">
            <h3 className="font-serif text-xl font-bold text-ink">All Direct Booking Channels</h3>

            <div className="space-y-3 font-sans text-sm">
              {/* WhatsApp Direct */}
              <a
                href={PROPERTY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-whatsapp/10 border border-whatsapp/30 flex items-center justify-between hover:bg-whatsapp/15 transition-colors group active:scale-95"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-whatsapp flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <div className="font-bold text-ink flex items-center gap-1.5">
                      <span>WhatsApp Direct</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-whatsapp/20 text-whatsapp-dark">
                        Instant
                      </span>
                    </div>
                    <div className="text-xs text-ink-muted">0922 830 5320 • Fast response</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-whatsapp group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Official Airbnb Listing */}
              <a
                href={PROPERTY_INFO.contacts.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-[#FF385C]/10 border border-[#FF385C]/30 flex items-center justify-between hover:bg-[#FF385C]/15 transition-colors group active:scale-95"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FF385C] flex items-center justify-center text-white group-hover:scale-110 transition-transform font-bold text-xs">
                    ★
                  </div>
                  <div>
                    <div className="font-bold text-ink flex items-center gap-1.5">
                      <span>Airbnb Official Listing</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#FF385C]/20 text-[#D70466]">
                        Verified
                      </span>
                    </div>
                    <div className="text-xs text-ink-muted">Reserve via Airbnb Platform</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#FF385C] group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Primary Phone */}
              <a
                href={PROPERTY_INFO.contacts.phone1.tel}
                className="p-3.5 rounded-2xl bg-sand/30 border border-sand flex items-center justify-between hover:bg-sand/50 transition-colors active:scale-95"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-terra flex items-center justify-center text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-ink">Call Smart Line</div>
                    <div className="text-xs text-ink-muted">{PROPERTY_INFO.contacts.phone1.display}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-terra">Call Now</span>
              </a>

              {/* Secondary Phone */}
              <a
                href={PROPERTY_INFO.contacts.phone2.tel}
                className="p-3.5 rounded-2xl bg-sand/30 border border-sand flex items-center justify-between hover:bg-sand/50 transition-colors active:scale-95"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-terra-dark flex items-center justify-center text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-ink">Call Globe Line</div>
                    <div className="text-xs text-ink-muted">{PROPERTY_INFO.contacts.phone2.display}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-terra">Call Now</span>
              </a>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={PROPERTY_INFO.contacts.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-sand/30 border border-sand text-center hover:bg-sand/50 transition-colors active:scale-95"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2] mx-auto mb-1" />
                  <span className="text-xs font-bold text-ink">Facebook</span>
                </a>

                <a
                  href={PROPERTY_INFO.contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-sand/30 border border-sand text-center hover:bg-sand/50 transition-colors active:scale-95"
                >
                  <Instagram className="w-4 h-4 text-[#E4405F] mx-auto mb-1" />
                  <span className="text-xs font-bold text-ink">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* House Rules & Policies Summary from §5 */}
          <div className="space-y-4 rounded-2xl border border-sand-dark/40 bg-sand/30 p-6 text-sm leading-6 sm:p-8">
            <h4 className="font-serif text-lg font-bold text-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-forest" />
              <span>House rules and key policies</span>
            </h4>

            <ul className="space-y-2.5 text-ink-muted">
              <li className="flex items-start gap-2">
                <span className="font-bold text-terra">•</span>
                <span><strong>Strictly Pet-Free Property:</strong> No pets allowed to ensure pristine cleanliness for all guests.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terra">•</span>
                <span><strong>Check-in / Check-out:</strong> Check-in after 3:00 PM; checkout before 12:00 PM (Noon).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terra">•</span>
                <span><strong>Food & Cooking:</strong> Guests are welcome to bring food, groceries, and celebration cakes (No corkage fees).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terra">•</span>
                <span><strong>Registered Guests:</strong> Sleeping spaces are strictly for declared guests up to 40 max.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Pre-Arrival Packing Checklist with Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-white border border-sand rounded-3xl p-6 sm:p-10 shadow-warm-md space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sand pb-4">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Pre-arrival packing checklist
            </h2>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-1 sm:text-right">
            <div className="text-xs font-bold text-terra-dark tabular-nums">
              {packedCount} of {checklist.length} Packed ({progressPercent}%)
            </div>
            <div className="w-44 h-2 bg-sand rounded-full overflow-hidden">
              <div
                style={{ width: `${progressPercent}%` }}
                className="h-full bg-forest transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full"
              />
            </div>
          </div>
        </div>

        <p className="max-w-[65ch] text-base leading-7 text-ink-muted">
          The resort provides all major appliances, kitchenware, and entertainment facilities. Tap items as you pack them:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-sans text-xs sm:text-sm">
          {checklist.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => toggleChecklist(index)}
              className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-[background-color,border-color,color,box-shadow,opacity,transform] active:scale-[0.97] duration-200 ${
                item.checked
                  ? 'bg-forest/10 border-forest/30 text-forest shadow-sm'
                  : 'bg-cream/40 border-sand text-ink hover:bg-cream hover:border-sand-dark'
              }`}
            >
              <div className={`shrink-0 mt-0.5 transition-transform duration-200 ${item.checked ? 'scale-110' : 'scale-100'}`}>
                {item.checked ? (
                  <CheckSquare className="w-4 h-4 text-forest" />
                ) : (
                  <Square className="w-4 h-4 text-ink-muted" />
                )}
              </div>
              <span className={`transition-opacity duration-200 ${item.checked ? 'line-through opacity-80 font-medium' : 'font-semibold'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

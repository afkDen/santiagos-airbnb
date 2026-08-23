'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FAQ_ITEMS } from '@/content/faq'
import { PROPERTY_INFO } from '@/content/property'
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Phone,
  Search,
} from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-12 md:py-16 space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/60 text-terra-dark text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-terra" />
          <span>Frequently Asked Questions</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-tight">
          Everything You Need to Know Before <span className="text-terra">Booking</span>
        </h1>

        <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
          Answers to common questions regarding guest capacity, included amenities, check-in schedules, policies, and booking channels.
        </p>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. pets, curfew, pool, kitchen)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-sand rounded-full text-xs sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-terra shadow-warm-sm"
            />
          </div>
        </div>
      </motion.div>

      {/* Accordion List with Motion */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl border border-sand p-6 space-y-3">
            <p className="text-sm text-ink-muted">No matching questions found for &ldquo;{searchQuery}&rdquo;.</p>
            <a
              href={PROPERTY_INFO.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp text-white text-xs font-bold rounded-full"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask Directly on WhatsApp</span>
            </a>
          </div>
        ) : (
          filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03, ease: [0.23, 1, 0.32, 1] }}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-terra/40 shadow-warm-md' : 'border-sand shadow-warm-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-bold text-ink hover:text-terra transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-terra text-white' : 'bg-sand/40 text-ink'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-ink-muted leading-relaxed font-sans border-t border-sand/30">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })
        )}
      </div>

      {/* Still Have Questions Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-sand/30 border border-sand-dark/40 rounded-3xl p-8 sm:p-10 text-center space-y-6"
      >
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="font-serif text-2xl font-bold text-ink">Still Have a Question?</h3>
          <p className="text-sm text-ink-muted font-sans">
            Our team responds directly on WhatsApp to answer special requests, date availability, and headcount planning.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PROPERTY_INFO.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm rounded-full shadow-warm-sm active:scale-95 transition-all group"
          >
            <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={PROPERTY_INFO.contacts.phone1.tel}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-cream hover:bg-cream-dark border border-sand text-ink font-bold text-sm rounded-full active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-terra" />
            <span>Call 0917 800 5320</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { DRIVING_STEPS } from '@/content/directions'
import { PROPERTY_INFO } from '@/content/property'
import {
  Navigation,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Compass,
  ArrowRight,
} from 'lucide-react'

export function DirectionsStepper() {
  const [activeStep, setActiveStep] = useState<number>(1)

  return (
    <div className="bg-white border border-sand rounded-3xl p-5 sm:p-10 shadow-warm-md space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-sand pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/60 text-terra-dark text-xs font-bold uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5 text-terra" />
            <span>Interactive Driving Stepper • ~15 Minutes</span>
          </div>
          <h3 className="font-serif text-xl sm:text-3xl font-bold text-ink mt-0.5">
            Twin Lakes Tagaytay to Santiagos Resort Gate
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={PROPERTY_INFO.contacts.waze}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#33CCFF] hover:bg-[#2bb8e6] text-white text-xs font-bold rounded-full transition-all active:scale-95 flex items-center gap-1.5 shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5 fill-white" />
            <span>Open in Waze</span>
          </a>
          <a
            href={PROPERTY_INFO.contacts.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-cream hover:bg-cream-dark border border-sand text-ink text-xs font-bold rounded-full transition-all active:scale-95 flex items-center gap-1.5 shadow-xs"
          >
            <MapPin className="w-3.5 h-3.5 text-terra" />
            <span>Google Maps</span>
          </a>
        </div>
      </div>

      {/* Stepper Timeline with Motion */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-sand before:z-0">
        {DRIVING_STEPS.map((step) => {
          const isActive = activeStep === step.step

          return (
            <div
              key={step.step}
              onClick={() => setActiveStep(step.step)}
              className="relative z-10 flex items-start gap-4 sm:gap-6 cursor-pointer group transition-all"
            >
              {/* Step Number Circle */}
              <div
                className={`w-10 h-10 rounded-full font-display font-bold text-sm flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isActive
                    ? 'bg-terra text-white shadow-warm-md scale-110 ring-4 ring-terra/20'
                    : 'bg-cream text-ink-muted border border-sand group-hover:border-terra group-hover:text-terra'
                }`}
              >
                {step.step}
              </div>

              {/* Step Content Card with Animated Spring Border & Highlight */}
              <div
                className={`relative isolate overflow-hidden p-4 sm:p-5 rounded-2xl border flex-1 space-y-1.5 transition-all duration-200 ${
                  isActive
                    ? 'bg-cream border-terra/50 shadow-warm-sm scale-[1.01]'
                    : 'bg-cream/30 border-sand hover:bg-cream/60'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-ink flex items-center gap-2">
                    <span>{step.instruction}</span>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-forest" />}
                  </h4>
                  {step.landmark && (
                    <span className="text-[11px] font-bold text-terra-dark bg-terra/10 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-terra" />
                      <span>{step.landmark}</span>
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-ink-muted font-sans leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

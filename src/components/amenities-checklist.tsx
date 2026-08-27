import { CheckCircle2, Sparkles, AlertCircle, ShoppingBag, Utensils, Bed, Waves } from 'lucide-react'

export function AmenitiesChecklist() {
  const provided = [
    { title: 'Heavy-duty 2-burner gas stove', sub: 'LPG cooking gas included with zero fuel fees', icon: Utensils },
    { title: 'Kitchen cookware, pots & pans', sub: 'Woks, frying pans, ladles, knives & chopping boards', icon: Utensils },
    { title: '2-door refrigerator & microwave', sub: 'Ample cold storage for drinks, cakes & food prep', icon: Utensils },
    { title: 'Hot & cold water dispenser', sub: 'Includes initial 5-gallon purified mineral water container', icon: Waves },
    { title: 'Bed pillows & fresh bed linens', sub: 'Fitted sheets and pillows on all 20 beds', icon: Bed },
    { title: 'Billiards & arcade equipment', sub: 'Pool balls, cue sticks, chalk, triangle & free-play arcade', icon: Sparkles },
    { title: 'Soundproofed videoke & microphones', sub: 'Updated digital songbook and 2 wireless microphones', icon: Sparkles },
    { title: 'Basketball & half-court lighting', sub: 'Size 7 basketballs and evening court floodlights', icon: Sparkles },
  ]

  const toBring = [
    { title: 'Personal bath towels & toiletries', sub: 'Bath towels, soaps, shampoos, toothbrushes & toothpaste' },
    { title: 'Charcoal for the outdoor BBQ grill', sub: 'Charcoal briquettes and fire starter for grilling' },
    { title: 'Paper plates, cups & disposable utensils', sub: 'Disposable tableware for easy group cleanup (or bring own)' },
    { title: 'Food ingredients, condiments & cooking oil', sub: 'All groceries, seasoning, spices & outside catering' },
    { title: 'Extra drinking water containers', sub: 'Additional 5-gal mineral water if your group consumes >5 gallons' },
    { title: 'Swimwear & poolside footwear', sub: 'Proper swimming attire and non-slip slippers for pool deck' },
  ]

  return (
    <section className="bg-sand/30 rounded-3xl p-6 sm:p-10 lg:p-12 border border-sand-dark/50 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold tracking-normal text-terra">
          Pre-Arrival Packing Transparency
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          What&apos;s Provided vs. What to Bring
        </h2>
        <p className="text-xs sm:text-sm text-ink-muted font-sans">
          We believe in 100% upfront clarity so your group arrives fully prepared with zero surprise shortages.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* What's Provided Column */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand shadow-warm-sm space-y-5">
          <div className="flex items-center gap-2.5 text-forest border-b border-sand pb-4">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Provided by Santiagos (Free of Charge)
            </h3>
          </div>

          <div className="space-y-3.5">
            {provided.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink leading-tight">{item.title}</h4>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Bring Column */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand shadow-warm-sm space-y-5">
          <div className="flex items-center gap-2.5 text-terra-dark border-b border-sand pb-4">
            <ShoppingBag className="w-5 h-5 shrink-0 text-terra" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Recommended for Your Group to Bring
            </h3>
          </div>

          <div className="space-y-3.5">
            {toBring.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-terra shrink-0 mt-1.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink leading-tight">{item.title}</h4>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

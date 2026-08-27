import { ExternalLink, Star } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '@/content/reviews'
import { PROPERTY_INFO } from '@/content/property'

function ReviewBody({ review, featured = false }: { review: Testimonial; featured?: boolean }) {
  const excerpt = review.quote.split('\n')[0]

  return (
    <article className={`flex h-full flex-col justify-between ${featured ? 'gap-10 p-7 sm:p-10' : 'gap-6 p-6'}`}>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-gold-dark" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: review.rating }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
            ))}
          </div>
          <span className="text-xs font-semibold text-ink-muted">{review.platform}</span>
        </div>

        <blockquote className={`${featured ? 'font-serif text-2xl leading-9 sm:text-3xl sm:leading-10' : 'text-base leading-7'} line-clamp-3 text-ink`}>
          &ldquo;{excerpt}&rdquo;
        </blockquote>
      </div>

      <footer className="flex items-end justify-between gap-4 border-t border-sand pt-5">
        <div>
          <p className="font-bold text-ink">{review.name}</p>
          <p className="mt-1 text-xs text-ink-muted">Verified stay, {review.date}</p>
        </div>
        <a
          href={review.platformUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-sand text-terra transition-[background-color,border-color,transform] duration-200 hover:border-terra/40 hover:bg-cream-dark"
          aria-label={`Read ${review.name}'s review on ${review.platform}`}
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </footer>
    </article>
  )
}

export function EditorialTestimonials() {
  const [featured, ...supporting] = TESTIMONIALS.slice(0, 3)

  return (
    <section className="section-space border-y border-sand bg-white">
      <div className="site-container space-y-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="section-heading">
            <h2 className="section-title">What recent groups remember.</h2>
            <p className="section-copy">Verified feedback from guests who booked the property for their own group.</p>
          </div>
          <div className="flex gap-4 text-sm font-bold">
            <a href={PROPERTY_INFO.contacts.airbnb} target="_blank" rel="noopener noreferrer" className="text-terra hover:text-terra-dark">
              Airbnb reviews
            </a>
            <a href={PROPERTY_INFO.contacts.googleReviews} target="_blank" rel="noopener noreferrer" className="text-terra hover:text-terra-dark">
              Google reviews
            </a>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="rounded-2xl bg-cream-dark lg:col-span-7">
            <ReviewBody review={featured} featured />
          </div>
          <div className="grid gap-5 lg:col-span-5">
            {supporting.map((review) => (
              <div key={review.id} className="rounded-2xl border border-sand bg-cream">
                <ReviewBody review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

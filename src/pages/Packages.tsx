import React from 'react';
import { Link } from 'react-router-dom';
import { img } from '../assets/images';
import { RateEstimator } from '../components/RateEstimator';

export const Packages: React.FC = () => {
  return (
    <div>
      {/* Header Banner */}
      <div className="pg-hero">
        <div className="pg-hero-bg" style={{ backgroundImage: `url(${img('ext12')})` }} />
        <div className="pg-hero-vig" />
        <div className="pg-hero-body">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Rates &amp; Packages
          </div>
          <h1 className="font-headline text-[2.2rem] md:text-[4rem] font-bold text-white leading-[1.06] tracking-[-0.02em]">
            Rates &amp; <em>Packages</em>
          </h1>
          <p className="font-serif text-[1.08rem] text-white/50 max-w-[520px] font-light mt-[0.65rem] leading-[1.75]">
            Direct booking rates. All amenities included. Up to 40 guests.
          </p>
        </div>
      </div>

      {/* Base Rates Section */}
      <section className="bg-cream px-5 md:px-14 py-22">
        <div className="text-left max-w-[1200px] mx-auto">
          <p className="tag">Pricing</p>
          <h2 className="h2">Base <em>Rates</em></h2>
          
          <div className="bg-gold/8 border border-gold/22 rounded-lg p-[1.4rem_1.8rem] font-serif text-[0.97rem] text-ink-soft leading-[1.8] mb-12 flex gap-3.5 items-start">
            <span className="text-gold text-[1.3rem] leading-none">✦</span>
            <span>
              Base rates cover up to <strong>20 guests</strong>. Group rates apply for larger bookings. Base rates for direct bookings. Pricing may vary for Airbnb bookings. Not applicable on public holidays. Check-in 3:00 PM · Checkout 12:00 PM.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[960px] mx-auto">
            {/* Weekday Card */}
            <div className="rounded-lg overflow-hidden border-2 border-sand bg-cream hover:translate-y-[-6px] hover:shadow-sh-xl transition-all duration-300 flex flex-col text-left">
              <div className="p-8 border-b border-sand-lt">
                <div className="inline-block text-[0.6rem] tracking-[0.14em] uppercase font-bold px-3 py-1 bg-terra/12 text-terra-dark rounded-pill mb-3.5">
                  Weekday
                </div>
                <div className="font-serif text-[1.3rem] text-ink font-bold mb-1">Monday – Thursday</div>
                <div className="text-[0.78rem] text-ink-soft font-normal">Non-holiday weekdays only</div>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-[1.1rem] text-terra font-bold">₱</span>
                  <span className="font-serif text-[2.8rem] text-terra font-bold leading-none tracking-[-0.02em]">25,000</span>
                  <span className="text-[0.75rem] text-ink-soft">/night · up to 20 guests</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="font-sans text-[0.8rem] text-ink-soft font-semibold bg-cream-dk p-[0.6rem_0.9rem] rounded border-l-[3px] border-terra mb-4">
                  Good for up to 20 guests
                </div>
                <ul className="list-none flex flex-col gap-2.5">
                  {['All amenities fully included', 'Pool, videoke, game room, bonfire, gym', 'Half-court basketball · 3-car parking', 'Kids under 3 y/o: max 3 FREE', 'Additional guest: ₱1,000/head', 'Check-in 3PM · Checkout 12PM'].map((li, idx) => (
                    <li key={idx} className="flex gap-2.5 font-serif text-[1rem] text-ink-soft font-normal leading-[1.5]">
                      <span className="text-forest font-bold font-sans">✓</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact?occasion=weekday"
                className="block mx-8 mb-8 p-[0.85rem] text-center rounded text-[0.72rem] tracking-[0.1em] uppercase font-bold border-2 border-terra text-terra hover:bg-terra hover:text-white hover:shadow-[0_4px_16px_rgba(192,115,74,0.3)] transition-all duration-200"
              >
                Inquire for Weekday →
              </Link>
            </div>

            {/* Weekend Card (Featured) */}
            <div className="rounded-lg overflow-hidden border-2 border-terra bg-cream hover:translate-y-[-6px] hover:shadow-sh-xl transition-all duration-300 flex flex-col text-left">
              <div className="p-8 border-b border-sand-lt">
                <div className="inline-block text-[0.6rem] tracking-[0.14em] uppercase font-bold px-3 py-1 bg-gold text-ink rounded-pill mb-3.5">
                  Most Popular
                </div>
                <div className="font-serif text-[1.3rem] text-ink font-bold mb-1">Friday – Sunday</div>
                <div className="text-[0.78rem] text-ink-soft font-normal">Weekends · Eve of holidays</div>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-[1.1rem] text-terra font-bold">₱</span>
                  <span className="font-serif text-[2.8rem] text-terra font-bold leading-none tracking-[-0.02em]">35,000</span>
                  <span className="text-[0.75rem] text-ink-soft">/night · up to 20 guests</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="font-sans text-[0.8rem] text-ink-soft font-semibold bg-cream-dk p-[0.6rem_0.9rem] rounded border-l-[3px] border-terra mb-4">
                  Good for up to 20 guests
                </div>
                <ul className="list-none flex flex-col gap-2.5">
                  {['All amenities fully included', 'Pool, videoke, game room, bonfire, gym', 'Half-court basketball · 3-car parking', 'Kids under 3 y/o: max 3 FREE', 'Additional guest: ₱1,000/head', 'Check-in 3PM · Checkout 12PM'].map((li, idx) => (
                    <li key={idx} className="flex gap-2.5 font-serif text-[1rem] text-ink-soft font-normal leading-[1.5]">
                      <span className="text-forest font-bold font-sans">✓</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact?occasion=weekend"
                className="block mx-8 mb-8 p-[0.85rem] text-center rounded text-[0.72rem] tracking-[0.1em] uppercase font-bold border-2 border-terra text-white bg-terra hover:bg-terra-dk hover:translate-y-[-2px] hover:shadow-[0_4px_16px_rgba(192,115,74,0.3)] transition-all duration-200"
              >
                Inquire for Weekend →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Group Rates Grid */}
      <section className="bg-charcoal text-white/50 px-5 md:px-14 py-22 text-left">
        <div className="max-w-[1200px] mx-auto">
          <p className="tag text-terra-light before:bg-terra-light">Larger Groups</p>
          <h2 className="h2 text-cream">Group <em>Rates</em></h2>
          <p className="lead text-white/40 mb-10">All amenities included every night. Prices vary by day of week.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 select-none">
            {/* 20 guests */}
            <div className="bg-white/5 border border-white/8 rounded-lg p-8 text-center hover:bg-terra/10 hover:border-terra/30 hover:translate-y-[-5px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
              <div className="font-sans text-[2.2rem] text-gold font-semibold leading-none">20</div>
              <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/35 mt-1 font-semibold">Guests · Base Rate</div>
              <div className="font-sans text-[1.15rem] text-cream font-semibold mt-4">
                ₱25,000 <span className="text-[0.75rem] text-white/35 font-normal">Mon–Thu</span>
              </div>
              <div className="font-sans text-[1.15rem] text-cream font-semibold mt-1.5">
                ₱35,000 <span className="text-[0.75rem] text-white/35 font-normal">Fri–Sun</span>
              </div>
              <div className="font-sans text-[0.7rem] text-white/28 mt-4.5 tracking-[0.03em] font-normal uppercase">All amenities included</div>
            </div>
            
            {/* 30 guests */}
            <div className="bg-white/5 border border-white/8 rounded-lg p-8 text-center hover:bg-terra/10 hover:border-terra/30 hover:translate-y-[-5px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
              <div className="font-sans text-[2.2rem] text-gold font-semibold leading-none">30</div>
              <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/35 mt-1 font-semibold">Guests</div>
              <div className="font-sans text-[1.15rem] text-cream font-semibold mt-4">
                ₱35,000 <span className="text-[0.75rem] text-white/35 font-normal">Mon–Thu</span>
              </div>
              <div className="font-sans text-[1.15rem] text-cream font-semibold mt-1.5">
                ₱45,000 <span className="text-[0.75rem] text-white/35 font-normal">Fri–Sun</span>
              </div>
              <div className="font-sans text-[0.7rem] text-white/28 mt-4.5 tracking-[0.03em] font-normal uppercase">All amenities included</div>
            </div>

            {/* 40 guests */}
            <div className="bg-white/5 border border-white/8 rounded-lg p-8 text-center hover:bg-terra/10 hover:border-terra/30 hover:translate-y-[-5px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
              <div className="font-sans text-[2.2rem] text-gold font-semibold leading-none">40</div>
              <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/35 mt-1 font-semibold">Guests · Maximum</div>
              <div className="font-sans text-[1.15rem] text-cream font-semibold mt-4">
                ₱45,000 <span className="text-[0.75rem] text-white/35 font-normal">Mon–Thu</span>
              </div>
              <div className="font-sans text-[1.15rem] text-cream font-semibold mt-1.5">
                ₱55,000 <span className="text-[0.75rem] text-white/35 font-normal">Fri–Sun</span>
              </div>
              <div className="font-sans text-[0.7rem] text-white/28 mt-4.5 tracking-[0.03em] font-normal uppercase">All amenities included</div>
            </div>

            {/* Extra Guest cost */}
            <div className="bg-terra/8 border border-terra/30 rounded-lg p-8 text-center hover:bg-terra/12 hover:translate-y-[-5px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
              <div className="font-sans text-[1.4rem] text-gold mt-1.5 font-bold">₱1,000</div>
              <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/35 mt-1 font-semibold">Per Extra Guest</div>
              <div className="text-[0.8rem] text-white/50 mt-4 leading-normal font-sans font-medium">
                Added to any base rate
                <br />
                Max 40 guests total
              </div>
            </div>
          </div>

          <p className="text-[0.88rem] text-white/65 mt-8 italic">
            * Prices are subject to change without prior notice.
          </p>
        </div>
      </section>

      {/* Mid photo divider */}
      <div className="relative h-[25vw] min-h-[180px] max-h-[320px] overflow-hidden select-none">
        <img
          src={img('ext2')}
          alt="Resort containers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/15 to-transparent flex items-center px-14">
          <div className="text-left">
            <h3 className="font-sans text-[2.2rem] text-white leading-[1.18] font-normal">
              All amenities included,
              <br />
              every stay.
            </h3>
            <p className="font-sans text-[1.02rem] text-white/55 mt-2.5 font-light tracking-[0.02em]">
              Pool · Videoke · Game Room · Bonfire · Gym · Basketball · Wi-Fi · Parking
            </p>
          </div>
        </div>
      </div>

      {/* Guest Policies Section */}
      <section className="bg-cream-dk px-5 md:px-14 py-22 text-left">
        <div className="max-w-[1200px] mx-auto">
          <p className="tag">Policies</p>
          <h2 className="h2 mb-10">Guest <em>Policies</em></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 select-none">
            {/* Check-in */}
            <div className="p-7 bg-cream border border-sand rounded-lg hover:border-terra/40 hover:shadow-sh-sm transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-[1.1rem]">✦</span>
                <h4 className="font-headline text-[1.05rem] text-ink font-bold tracking-[-0.01em]">Check-in &amp; Checkout</h4>
              </div>
              <div className="flex flex-col gap-2.5">
                {['Check-in after 3:00 PM', 'Checkout before 12:00 PM (noon)', 'Early/late options available on request'].map((item, idx) => (
                  <div key={idx} className="font-serif text-[0.98rem] text-ink-soft flex items-start gap-2 leading-relaxed">
                    <span className="text-terra font-sans font-bold">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capacity */}
            <div className="p-7 bg-cream border border-sand rounded-lg hover:border-terra/40 hover:shadow-sh-sm transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-[1.1rem]">✦</span>
                <h4 className="font-headline text-[1.05rem] text-ink font-bold tracking-[-0.01em]">Capacity</h4>
              </div>
              <div className="flex flex-col gap-2.5">
                {['Base rate: up to 20 guests', 'Additional guests: ₱1,000/head', 'Maximum capacity: 40 guests', 'Kids under 3 y/o: max 3, FREE'].map((item, idx) => (
                  <div key={idx} className="font-serif text-[0.98rem] text-ink-soft flex items-start gap-2 leading-relaxed">
                    <span className="text-terra font-sans font-bold">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="p-7 bg-cream border border-sand rounded-lg hover:border-terra/40 hover:shadow-sh-sm transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-[1.1rem]">✦</span>
                <h4 className="font-headline text-[1.05rem] text-ink font-bold tracking-[-0.01em]">Important Notes</h4>
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  'Rates not applicable on public holidays',
                  'Pricing may vary vs Airbnb',
                  'Prices are subject to change without prior notice',
                  'For direct bookings only',
                  'Book via phone or social media',
                ].map((item, idx) => (
                  <div key={idx} className="font-serif text-[0.98rem] text-ink-soft flex items-start gap-2 leading-relaxed">
                    <span className="text-terra font-sans font-bold">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Estimator (Calculator Layout) */}
      <section className="bg-cream px-5 md:px-14 py-22 border-t border-sand/40">
        <div className="max-w-[1200px] mx-auto">
          <RateEstimator />
        </div>
      </section>

      {/* Direct Booking Notice Band */}
      <div className="bg-gradient-to-r from-charcoal via-[#2a1808] to-charcoal p-[3rem_3.5rem] flex flex-wrap gap-8 items-center border-t border-white/5">
        <div className="text-terra text-[2rem] flex-shrink-0">✦</div>
        <div className="text-left flex-1 min-w-[280px]">
          <h3 className="font-sans text-[1.6rem] text-cream font-normal mb-1">Book Directly with Us</h3>
          <p className="font-sans text-[0.98rem] text-white/48 leading-[1.7]">
            Message us on Facebook or Instagram <strong>@santiagos.to</strong> or call <strong>0917 800 5320 / 0922 830 5320</strong> for official bookings and inquiries.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Facebook →
          </a>
          <Link to="/contact" className="btn btn-ghost">Inquire Now</Link>
        </div>
      </div>
    </div>
  );
};

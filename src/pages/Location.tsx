import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { img, GalleryImage } from '../assets/images';
import { Lightbox } from '../components/Lightbox';

const POSTER_IMGS: GalleryImage[] = [
  { src: 'https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w2400', label: 'Map & Directions Guide — From Twin Lakes Tagaytay' }
];

export const Location: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [posterError, setPosterError] = useState(false);

  // Nearby Attractions details
  const NEARBY_PLACES = [
    {
      title: 'Taal Volcano & Lake',
      time: '~30 min away',
      tag: 'Nature',
      tags: ['Nature', 'Scenic View', 'Day Trip', 'Photography'],
      desc: "One of the world's most unique geological wonders — a volcano island within a lake, within a larger island. Take a boat across Taal Lake for breathtaking close-up views of the crater. A must-see Philippine landmark right in your backyard.",
      imgUrl: 'https://drive.google.com/thumbnail?id=1OGJyrH47pygVITjsf6QV6NGNmOus2F4p&sz=w800',
      fallbackImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Taal_Volcano_Island.jpg/1280px-Taal_Volcano_Island.jpg'
    },
    {
      title: 'Tagaytay City Ridge',
      time: '~15–20 min away',
      tag: 'Dining',
      tags: ['Dining', 'Scenic View', 'Shopping', 'Cool Climate'],
      desc: "Famous for its cool climate (18–24°C), panoramic views of Taal Lake, and a vibrant dining scene. Walk the ridge, dine at cliff-side restaurants, and enjoy Tagaytay's legendary bulalo and fresh strawberry taho.",
      imgUrl: 'https://drive.google.com/thumbnail?id=189rkrY-lBENvoB0qA4NhTmuGE8-XUWbZ&sz=w800',
      fallbackImg: img('pool2', 800)
    },
    {
      title: 'Sky Ranch Tagaytay',
      time: '~20 min away',
      tag: 'Family',
      tags: ['Family', 'Amusement Park', 'Views', 'All Ages'],
      desc: "A family-favorite amusement park perched above the Taal Ridge. Ride the iconic Sky Eye Ferris wheel for 360° views of the lake and volcano. Fun for all ages — great for large groups and celebrations.",
      imgUrl: 'https://drive.google.com/thumbnail?id=1Mq2yzNDtGJSP8nN69y6FfiehXslg5c-2&sz=w800',
      fallbackImg: img('ext8', 800)
    },
    {
      title: 'Alfonso Town Proper',
      time: '~5 min away',
      tag: 'Local',
      tags: ['Coffee', 'Local Food', 'Farm Visits', 'Chill Vibes'],
      desc: 'Known as the "Coffee Capital of Cavite" — a charming highland town with local coffee farms, farm-to-table restaurants, fresh produce markets, and quaint cafes. The perfect morning stroll during your stay.',
      imgUrl: 'https://drive.google.com/thumbnail?id=1o5xjyXtrcUe_h-a-bqw83L5B9V1QbMC2&sz=w800',
      fallbackImg: img('ext9', 800)
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
    e.currentTarget.src = fallback;
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="pg-hero">
        <div className="pg-hero-bg" style={{ backgroundImage: `url(${img('pool2')})` }} />
        <div className="pg-hero-vig" />
        <div className="pg-hero-body">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Location &amp; Nearby
          </div>
          <h1 className="font-headline text-[2.2rem] md:text-[4rem] font-bold text-white leading-[1.06] tracking-[-0.02em]">
            Location &amp; <em>Nearby</em>
          </h1>
          <p className="font-serif text-[1.08rem] text-white/50 max-w-[520px] font-light mt-[0.65rem] leading-[1.75]">
            Alfonso, Cavite — the highland heart of Tagaytay country.
          </p>
        </div>
      </div>

      {/* Map Segment (Dark theme matches dark-sec) */}
      <section className="bg-ink text-white/50 px-5 md:px-14 py-22 pb-14 text-left relative overflow-hidden">
        <p className="tag text-gold-light before:bg-gold-light">Find Us</p>
        <h2 className="h2 text-white">Our <em>Location</em></h2>
        <p className="font-serif text-[1.08rem] text-white/60 leading-[1.85] font-light max-w-[620px] mb-8 mt-3">
          Alfonso, Tagaytay, Cavite — about 1.5–2 hours from Metro Manila via SLEX or CAVITEX.
        </p>

        {/* Distance Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 my-8 select-none">
          {[
            { label: 'From EDSA / Manila', val: '~1.5–2 hrs' },
            { label: 'From Tagaytay City', val: '~15–20 min' },
            { label: 'From Cavite City', val: '~45 min' },
            { label: 'Best Route', val: 'Via STAR Tollway' },
            { label: 'Public Transport', val: 'Bus → tricycle' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/9 rounded-lg p-4.5 transition-all duration-200 hover:bg-terra/14 hover:border-terra/38 hover:-translate-y-0.5 text-left"
            >
              <div className="font-sans text-[0.52rem] text-white/35 tracking-[0.15em] uppercase font-bold mb-1.5">
                {item.label}
              </div>
              <div className="font-serif text-[1rem] text-cream font-semibold leading-snug">
                {item.val}
              </div>
            </div>
          ))}
        </div>

        {/* Map Wrapper */}
        <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] border border-white/7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] select-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.5!2d120.8199956!3d14.1093627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9d005b93125d%3A0x6c0a9094a9d4399b!2sSantiagos+Private+Resort!5e0!3m2!1sen!2sph!4v1712400000000!5m2!1sen!2sph"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-none block"
            title="Santiagos Resort on Google Maps"
          />
        </div>
      </section>

      {/* Directions Segment (Cream/Light theme) */}
      <section className="bg-cream px-5 md:px-14 py-22 text-left">
        <p className="tag">From Twin Lakes Tagaytay</p>
        <h2 className="h2">Map &amp; <em>Directions</em></h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start mt-9">
          
          {/* LEFT: Poster — click to enlarge */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="rounded-lg overflow-hidden shadow-sh-lg border border-sand/45 bg-cream-dk lg:sticky lg:top-[90px] cursor-zoom-in transition-all duration-300 hover:-translate-y-1 hover:shadow-sh-xl hover:border-terra/35 select-none"
            title="Click to enlarge map directions guide"
          >
            {!posterError ? (
              <img
                src="https://drive.google.com/thumbnail?id=1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH&sz=w1600"
                alt="Map and Directions Guide — Santiagos Resort from Twin Lakes Tagaytay"
                loading="lazy"
                onError={() => setPosterError(true)}
                className="w-full max-h-[480px] object-contain block bg-cream-dk"
              />
            ) : (
              <div className="w-full aspect-[3/4] bg-cream-dk">
                <iframe
                  src="https://drive.google.com/file/d/1B2SaOx-mvjyO2kjkGr1hmQe4HeiiV-OH/preview"
                  title="Map and Directions Guide Fallback"
                  allowFullScreen
                  className="w-full h-full border-none block"
                />
              </div>
            )}
            <div className="flex items-center justify-center gap-1.5 p-3.5 bg-ink text-white/55 font-sans text-[0.6rem] tracking-[0.12em] uppercase font-semibold">
              <svg className="w-[13px] h-[13px] fill-terra-light flex-shrink-0" viewBox="0 0 24 24">
                <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zM9 21l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zM21 15l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"/>
              </svg>
              Click to enlarge guide
            </div>
          </div>

          {/* RIGHT: Steps + Quick Reference */}
          <div className="flex flex-col gap-3.5">
            <p className="font-serif text-[0.97rem] text-ink-soft leading-[1.75] mb-2 text-left">
              Only 15 minutes from Twin Lakes. Screenshot the poster or follow the steps — everything you need to find us.
            </p>

            <div className="flex flex-col gap-2.5">
              {[
                { num: 1, text: <><strong>Start at Twin Lakes Tagaytay</strong> — your landmark reference point</> },
                { num: 2, text: <>Head <strong>west</strong> on Tagaytay-Laurel Rd toward Amuyong-Kaytitinga Road</> },
                { num: 3, text: <>Turn <strong>right</strong> onto Amuyong-Kaytitinga Road</> },
                { num: 4, text: <>Turn <strong>left</strong> onto Kaytitinga-Magallanes Rd</> },
                { num: 5, text: <>Turn <strong>right</strong> at the <strong>7-Eleven</strong> (it will be on your left)</> },
                { num: 6, text: <>Turn <strong>right</strong> at the Cell Repair Shop — small street straight to the resort</> },
              ].map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-3.5 p-3.5 px-4.5 bg-white rounded-lg border-[1.5px] border-sand transition-all duration-200 hover:border-terra hover:shadow-[0_4px_16px_rgba(192,115,74,0.1)] hover:translate-x-1 text-left"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terra text-white font-sans text-[0.62rem] font-bold flex items-center justify-center mt-0.5">
                    {step.num}
                  </span>
                  <div className="font-serif text-[0.94rem] text-ink leading-[1.5]">
                    {step.text}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3.5 p-3.5 px-4.5 bg-forest/5 rounded-lg border-[1.5px] border-forest text-left select-none">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest text-white font-sans text-[0.68rem] font-bold flex items-center justify-center mt-0.5">
                  ✓
                </span>
                <div className="font-serif text-[0.94rem] text-forest font-semibold leading-[1.5]">
                  You've arrived at Santiagos Resort! Kaytitinga II, Alfonso, Cavite
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-3 flex-wrap select-none">
              <a
                href="https://www.google.com/maps/place/Santiagos+Private+Resort/@14.1093627,120.8199956,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open in Google Maps →
              </a>
              <a
                href="https://ul.waze.com/ul?place=ChIJXRLUWwCdvdMRm0nUqZSQCmw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Open in Waze →
              </a>
              <a href="tel:+639228305320" className="btn btn-outline">
                Call Us for Help
              </a>
            </div>

            {/* Quick Reference Card */}
            <div className="mt-4 border-[1.5px] border-sand rounded-lg bg-gradient-to-br from-cream to-cream-dk overflow-hidden text-left">
              <div className="p-3 px-4 bg-ink flex items-center gap-2 select-none">
                <span className="text-terra-light text-[0.9rem] flex items-center">&#9432;</span>
                <span className="font-sans text-[0.58rem] tracking-[0.18em] uppercase text-terra-light font-bold">
                  Quick Reference
                </span>
              </div>
              <div className="p-4 px-5 flex flex-col gap-3">
                {[
                  {
                    icon: '📍',
                    text: <><strong>Full address:</strong> Kaytitinga II, Alfonso, Cavite 4123</>
                  },
                  {
                    icon: '⏱️',
                    text: <><strong>~15 min</strong> from Twin Lakes · <strong>~1.5–2 hrs</strong> from Manila</>
                  },
                  {
                    icon: '🚗',
                    text: <>Free on-site parking</>
                  },
                  {
                    icon: '📞',
                    text: <>Lost? Call us: <a href="tel:+639228305320" className="text-terra font-semibold hover:underline">0922 830 5320</a> / <a href="tel:+639178005320" className="text-terra font-semibold hover:underline">0917 800 5320</a></>
                  },
                  {
                    icon: '⛰️',
                    text: <>Key landmark before turn: <strong>Alfamart on Kaytitinga-Magallanes Rd</strong></>
                  }
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-serif text-[0.92rem] text-ink-soft leading-snug text-left">
                    <div className="w-7 h-7 rounded-lg bg-terra/12 text-terra flex items-center justify-center flex-shrink-0 select-none text-[0.88rem]">
                      {row.icon}
                    </div>
                    <div className="font-serif">
                      {row.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Navigation Walkthrough Video (Dark theme matches dark-sec) */}
      <section className="bg-ink text-white/50 px-5 md:px-14 py-22 text-left relative overflow-hidden border-t border-white/5">
        {/* Glow Backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(192,115,74,0.1)_0%,transparent_60%),radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(201,168,76,0.07)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-center relative z-10">
          <div className="text-left">
            <p className="tag text-gold-light before:bg-gold-light">Navigation Video</p>
            <h2 className="h2 text-white">Watch: How to <em className="italic text-terra-light font-normal">Find Us</em></h2>
            <p className="font-serif text-[1.05rem] text-white/55 leading-[1.88] font-light max-w-[420px] mb-7 mt-4">
              Starting from Alfamart on Kaytitinga-Magallanes Road — follow along as we drive the exact route to the resort. ~15 minutes from the 7-Eleven landmark.
            </p>
            <div className="flex flex-col gap-2.5 mb-7">
              {[
                { icon: '📍', text: <>Start: <strong className="text-white/80">Alfamart, Kaytitinga-Magallanes Rd</strong></> },
                { icon: '⏱️', text: <>Travel time: <strong className="text-white/80">~15 min from 7-Eleven Kaytitinga</strong></> },
                { icon: '📞', text: <>Lost? Call: <a href="tel:+639228305320" className="text-terra-light font-semibold hover:underline">0922 830 5320</a></> }
              ].map((row, idx) => (
                <div key={idx} className="flex items-center gap-3 font-serif text-[0.95rem] text-white/45 text-left">
                  <span className="w-7 h-7 rounded-full bg-terra/20 flex items-center justify-center flex-shrink-0 text-[0.7rem] select-none">
                    {row.icon}
                  </span>
                  <span>{row.text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/place/Santiagos+Private+Resort/@14.1093627,120.8199956,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden bg-black shadow-[0_28px_72px_rgba(0,0,0,0.55)] border border-gold/20 aspect-video select-none">
            <iframe
              src="https://drive.google.com/file/d/1ZWg_wszkmugcqoqiRSygm-rgKSxudyLm/preview"
              className="absolute inset-0 w-full h-full border-none rounded-lg"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Navigation walkthrough to Santiagos Resort"
              loading="lazy"
            />
            <div className="absolute inset-[-1px] rounded-lg border border-gold/20 pointer-events-none shadow-[inset_0_0_40px_rgba(201,168,76,0.05)]" />
          </div>
        </div>
      </section>

      {/* Nearby Segment */}
      <section className="bg-cream-dk px-5 md:px-14 py-22 text-left">
        <p className="tag">Explore the Area</p>
        <h2 className="h2">What's <em>Nearby</em></h2>
        <p className="font-serif text-[1.08rem] text-ink-soft max-w-[620px] mb-8 mt-3">
          Santiagos puts you right in the heart of Cavite's most scenic destinations — all within easy reach during your stay.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
          {NEARBY_PLACES.map((place, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden bg-white border border-sand shadow-sh-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-sh-lg group text-left"
            >
              <div className="relative h-[210px] overflow-hidden select-none">
                <img
                  src={place.imgUrl}
                  alt={place.title}
                  loading="lazy"
                  onError={(e) => handleImageError(e, place.fallbackImg)}
                  className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/30 to-transparent" />
                <span className="absolute top-3 left-3 bg-ink/78 backdrop-blur-[8px] border border-white/12 text-white/92 font-sans text-[0.54rem] tracking-[0.13em] uppercase font-bold py-1 px-3 rounded-pill">
                  {place.time}
                </span>
                <div className="absolute bottom-3.5 left-4 right-4 text-left">
                  <h3 className="font-serif text-[1.18rem] text-white font-bold leading-tight tracking-tight drop-shadow-md">
                    {place.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 bg-white">
                <p className="font-serif text-[0.97rem] text-ink-soft leading-[1.78]">
                  {place.desc}
                </p>
                <div className="flex gap-1.5 flex-wrap mt-3.5 select-none">
                  {place.tags.map((tagItem, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="p-[0.2rem_0.68rem] bg-sand/35 text-ink-soft rounded-pill font-sans text-[0.58rem] tracking-[0.04em] uppercase font-bold"
                    >
                      {tagItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips Segment */}
      <section className="bg-cream px-5 md:px-14 py-22 text-left">
        <p className="tag">Travel Tips</p>
        <h2 className="h2">Getting Here &amp; <em>Around</em></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
          {[
            {
              icon: '🚗',
              title: 'Best Way to Get Here',
              desc: 'Driving is most convenient. Take SLEX or CAVITEX then STAR Tollway to Alfonso. Use Waze/Google Maps for exact routing. Free on-premises parking for multiple vehicles.'
            },
            {
              icon: '⛰️',
              title: 'Weather & Climate',
              desc: "Alfonso sits at ~600m elevation — expect a refreshing 18–24°C year-round. Perfect for pool days without Metro Manila's heat. Bring a light jacket for cool evenings."
            },
            {
              icon: '🍳',
              title: 'Stocking Up',
              desc: 'Groceries and wet market are 5 minutes away in Alfonso town proper. Larger supermarkets (Robinsons, Walter Mart) are 20 minutes away in Tagaytay City.'
            }
          ].map((tip, idx) => (
            <div
              key={idx}
              className="p-6.5 bg-white border border-sand rounded-lg transition-all duration-200 hover:shadow-sh-md hover:-translate-y-0.5 text-left"
            >
              <span className="text-[1.4rem] block text-terra mb-2.5 leading-none select-none">
                {tip.icon}
              </span>
              <h4 className="font-serif text-[1.05rem] text-ink font-bold mb-1.5">
                {tip.title}
              </h4>
              <p className="font-serif text-[0.94rem] text-ink-soft leading-[1.72]">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap mt-11 select-none">
          <Link to="/contact" className="btn btn-primary">
            Book Your Stay →
          </Link>
          <a
            href="https://www.airbnb.com/rooms/1643466979772957530"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View on Airbnb
          </a>
        </div>
      </section>

      {/* Lightbox for Directions Poster */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={POSTER_IMGS}
        currentIndex={0}
        onIndexChange={() => {}}
      />
    </div>
  );
};

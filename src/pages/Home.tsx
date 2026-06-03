import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { img, GALLERY_IMGS } from '../assets/images';
import { Lightbox } from '../components/Lightbox';
import * as Icons from 'lucide-react';

interface StatItemProps {
  target: number;
  label: string;
  sub: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ target, label, sub, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (timestamp: number) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutCubic * target);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target]);

  return (
    <div ref={elementRef} className="p-12 md:p-8 text-center border-b md:border-b-0 md:border-r border-white/5 last:border-0 select-none">
      <div className="font-serif text-[3.2rem] font-semibold text-gold leading-none flex items-start justify-center">
        <span>{count}</span>
        {suffix && <span className="text-[1.5rem] align-self-end mb-1">{suffix}</span>}
      </div>
      <div className="font-sans text-[0.59rem] tracking-[0.2em] uppercase text-white/30 mt-2 font-semibold">
        {label}
      </div>
      <div className="text-[0.73rem] text-white/15 mt-1">{sub}</div>
    </div>
  );
};

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = [
    img('ext3'),
    img('pool1'),
    img('ext2'),
    img('din3'),
    img('ext12'),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const openLightbox = (imageSrc: string) => {
    const index = GALLERY_IMGS.findIndex((imgObj) => imgObj.src === imageSrc);
    if (index !== -1) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };

  const AMENITIES_PREVIEW = [
    { key: 'kara1', label: 'Videoke Room', sub: 'Dedicated videoke room', icon: 'mic' },
    { key: 'bill2', label: 'Billiards Room', sub: 'Full-size Kangaroo table', icon: 'billiards' },
    { key: 'pool1', label: 'Swimming Pool', sub: 'One of few in Alfonso', icon: 'pool' },
    { key: 'din3', label: 'Dining Area', sub: 'Santiago\'s signature space', icon: 'dining' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[660px] flex items-end overflow-hidden p-0">
        <div className="absolute inset-0">
          {slides.map((slide, idx) => (
            <div
              key={slide}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                idx === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-[1.03] z-0'
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
          {/* Luminous Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10 z-20 pointer-events-none" />
        </div>

        <div className="relative z-30 px-5 pb-20 md:px-14 md:pb-20 max-w-[860px] text-left">
          <div className="inline-flex items-center gap-2 bg-gold/15 backdrop-blur-[10px] border border-gold/30 px-4 py-1.5 rounded-pill font-sans text-[0.62rem] tracking-[0.2em] uppercase text-gold-light font-bold mb-4">
            <Icons.MapPin className="w-3.5 h-3.5 text-gold-light flex-shrink-0" /> Alfonso, Tagaytay, Cavite · Philippines
          </div>
          <h1 className="font-headline text-[3.2rem] md:text-[5.5rem] lg:text-[6.2rem] font-bold leading-[1.02] text-white tracking-[-0.02em] mb-4">
            Unwind &amp; <em className="italic text-terra-light font-normal">Play</em>
            <br />
            @ Santiagos
          </h1>
          <p className="font-serif text-[1.15rem] text-white/70 leading-[1.85] max-w-[520px] font-light mb-8">
            Industrial chic container resort in Alfonso, Tagaytay, Cavite — pool, videoke, game room, gym &amp; more. The ultimate group escape for up to 40 guests.
          </p>
          <div className="flex items-center gap-4.5 flex-wrap">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Reserve Your Dates →
            </Link>
            <Link
              to="/gallery"
              className="btn btn-ghost"
            >
              View Gallery
            </Link>
          </div>
          <div className="flex mt-11 pt-8 border-t border-white/12 gap-0 select-none">
            <div className="pr-9 mr-9 border-r border-white/10">
              <div className="font-serif text-[2rem] font-semibold text-gold-light leading-none">40</div>
              <div className="font-sans text-[0.58rem] tracking-[0.16em] uppercase text-white/38 mt-1 font-semibold">Max Guests</div>
            </div>
            <div className="pr-9 mr-9 border-r border-white/10">
              <div className="font-serif text-[2rem] font-semibold text-gold-light leading-none">2</div>
              <div className="font-sans text-[0.58rem] tracking-[0.16em] uppercase text-white/38 mt-1 font-semibold">VIP Rooms</div>
            </div>
            <div className="pr-9 mr-9 border-r border-white/10">
              <div className="font-serif text-[2rem] font-semibold text-gold-light leading-none">9</div>
              <div className="font-sans text-[0.58rem] tracking-[0.16em] uppercase text-white/38 mt-1 font-semibold">Deck Beds</div>
            </div>
            <div>
              <div className="font-serif text-[2rem] font-semibold text-gold-light leading-none">8</div>
              <div className="font-sans text-[0.58rem] tracking-[0.16em] uppercase text-white/38 mt-1 font-semibold">Bathrooms</div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-[7px] h-[7px] rounded-full border-none transition-all duration-300 ${
                i === currentSlide ? 'bg-terra-light scale-[1.5]' : 'bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        <div className="absolute right-14 bottom-10 z-30 hidden lg:block text-[0.65rem] tracking-[0.15em] text-white/38">
          <em className="text-terra-light font-normal not-italic">{currentSlide + 1}</em> / {slides.length}
        </div>
      </section>

      {/* Marquee Bar */}
      <div className="bg-gradient-to-r from-terra-dk via-terra to-terra-dk py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee select-none">
          {Array(3).fill([
            'Swimming Pool', 'Videoke Lounge', 'Billiards & Arcade', 'Gym', 
            'Basketball Court', 'Bonfire Area', 'Full Kitchen', 'Free Wi-Fi', 
            'Free Parking', '4 Bedrooms · 20 Beds · 8 Baths', 'Up to 40 Guests'
          ]).flat().map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-white/88 font-semibold px-9">
                {item}
              </span>
              <span className="text-gold-light px-0 text-[0.8rem] font-bold">&middot;</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Video Tour Section */}
      <section className="bg-ink text-white/50 relative overflow-hidden py-24 px-5 md:px-14">
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(192,115,74,0.12)_0%,transparent_60%),radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(201,168,76,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-center max-w-[1300px] mx-auto relative z-10">
          <div className="text-left">
            <div className="tag text-gold-light before:bg-gold-light">Resort Tour</div>
            <h2 className="h2 text-white">See Santiagos <em className="italic text-terra-light font-normal">Come Alive</em></h2>
            <p className="font-serif text-[1.05rem] text-white/60 leading-[1.88] font-light max-w-[500px] mb-7 mt-4">
              Get a full walk-through of the resort — the pool, rooms, game areas, and everything in between. Your group's next adventure starts here.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-primary">Reserve Your Dates →</Link>
              <Link to="/gallery" className="btn btn-ghost">View Gallery</Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black shadow-sh-xl border border-gold/25 select-none">
            <iframe
              src="https://drive.google.com/file/d/1f1u_JuPgRRNEjmTNMZfvg9KpugSRYgEO/preview"
              className="absolute inset-0 w-full h-full border-none rounded-lg"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Santiagos Resort Video Tour"
              loading="lazy"
            />
            <div className="absolute inset-[-1px] rounded-lg border border-gold/25 pointer-events-none shadow-[inset_0_0_40px_rgba(201,168,76,0.06)]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-cream px-5 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center max-w-[1200px] mx-auto">
          <div className="relative pb-16 lg:pb-16 text-left select-none">
            <img className="w-full aspect-[4/5] object-cover rounded-lg shadow-sh-xl" src={img('pool1')} alt="Resort Pool" />
            <img className="absolute bottom-0 right-[-2.5rem] hidden md:block w-[54%] aspect-[16/10] object-cover rounded-lg border-[5px] border-cream shadow-sh-lg z-20" src={img('ext3')} alt="Exterior container design" />
            <div className="absolute top-8 left-[-2rem] hidden md:block bg-terra text-white p-[1.3rem_1.5rem] rounded-lg text-center shadow-sh-md z-25">
              <div className="font-serif text-[2rem] font-semibold leading-none">40</div>
              <div className="font-sans text-[0.58rem] tracking-[0.14em] uppercase mt-1 opacity-80 font-semibold">Max Guests</div>
            </div>
          </div>
          <div className="text-left">
            <div className="tag">About the Resort</div>
            <h2 className="h2">Where Every <em className="italic font-normal">Group</em><br />Finds Its Story</h2>
            <p className="font-serif text-[1.08rem] leading-[1.95] text-ink-soft mb-4 mt-4">
              Inspired by <strong>industrial chic container design</strong>, Santiagos Resort is a one-of-a-kind retreat in Alfonso, Tagaytay, Cavite.
            </p>
            <p className="font-serif text-[1.08rem] leading-[1.95] text-ink-soft mb-4">
              Whether it's a barkada getaway, birthday blowout, family reunion, or corporate team-building — we have <strong>everything your group needs</strong> to play hard and relax harder, all under one roof.
            </p>
            <p className="font-serif text-[1.08rem] leading-[1.95] text-ink-soft mb-6">
              Comfortably accommodates your whole crew with <strong>2 VIP rooms, 9 double deck beds, a driver's room, and 8 bathrooms</strong>. Base rate (up to 20 guests) from ₱25,000/night; up to 40 at ₱1,000/extra head.
            </p>
            <div className="flex flex-wrap gap-2 my-5 select-none">
              <span className="px-3.5 py-1.5 bg-terra/12 text-terra-dark rounded-pill font-sans text-[0.7rem] font-semibold">✦ Industrial Chic</span>
              <span className="px-3.5 py-1.5 bg-sand text-ink-soft rounded-pill font-sans text-[0.7rem] font-semibold">✦ Cool Tagaytay Air</span>
              <span className="px-3.5 py-1.5 bg-sand text-ink-soft rounded-pill font-sans text-[0.7rem] font-semibold">Groups up to 40</span>
              <span className="px-3.5 py-1.5 bg-forest/10 text-forest rounded-pill font-sans text-[0.7rem] font-semibold">✦ Alfonso, Cavite</span>
              <span className="px-3.5 py-1.5 bg-terra/12 text-terra-dark rounded-pill font-sans text-[0.7rem] font-semibold">✦ Events &amp; Celebrations</span>
            </div>
            
            {/* Contact Alert strip */}
            <div className="flex items-center gap-3 p-[0.8rem_1.1rem] bg-terra/5 border border-terra/18 rounded font-sans text-[0.82rem] text-ink-soft mt-6">
              <span className="text-terra">
                <svg className="w-[1.2em] h-[1.2em] fill-currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span>
                Book directly: <strong>0917 800 5320</strong> / <strong>0922 830 5320</strong> &nbsp;·&nbsp;{' '}
                <a
                  href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terra hover:underline font-semibold"
                >
                  @santiagos.to
                </a>{' '}
                on FB &amp; IG
              </span>
            </div>
            <div className="flex gap-4.5 mt-6 flex-wrap">
              <Link to="/amenities" className="btn btn-primary">Explore Amenities →</Link>
              <Link to="/packages" className="btn btn-outline">View Rates</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats counter bar */}
      <div className="bg-charcoal grid grid-cols-2 lg:grid-cols-4 relative border-t border-white/10">
        <StatItem target={40} label="Guest Capacity" sub="Base rate up to 20 pax" suffix="+" />
        <StatItem target={2} label="VIP Rooms" sub="+ 9 double deck beds" />
        <StatItem target={8} label="Bathrooms" sub="Never a queue" />
        <StatItem target={22} label="Amenities" sub="All included, no extras" suffix="+" />
      </div>

      {/* Amenities Showcase Preview */}
      <section className="bg-cream-dk px-5 md:px-14">
        <div className="text-left mb-11">
          <p className="tag">What's Inside</p>
          <h2 className="h2">A Resort's Worth of <em className="italic font-normal">Fun</em></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {AMENITIES_PREVIEW.map((item) => (
            <Link
              key={item.key}
              to="/amenities"
              className="group relative rounded-lg overflow-hidden cursor-pointer shadow-sh-sm select-none"
            >
              <img
                src={img(item.key as any, 800)}
                alt={item.label}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-left">
                <div className="font-sans text-[1.05rem] text-white font-semibold flex items-center gap-1.5">
                  {item.label}
                </div>
                <div className="font-sans text-[0.68rem] text-white/58 mt-[0.18rem] tracking-[0.04em]">
                  {item.sub}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/amenities" className="btn btn-outline">See All 22+ Amenities →</Link>
        </div>
      </section>

      {/* Gallery Showcase Preview */}
      <section className="bg-cream px-5 md:px-14">
        <div className="text-left mb-10">
          <p className="tag">Photo Gallery</p>
          <h2 className="h2">See the <em className="italic font-normal">Full Picture</em></h2>
        </div>
        
        {/* Custom Metro Photo Grid Layout */}
        <div className="grid grid-cols-12 gap-2 mt-10 auto-rows-[200px] select-none">
          <div
            onClick={() => openLightbox(img('kara1'))}
            className="col-span-12 lg:col-span-7 row-span-2 overflow-hidden rounded cursor-zoom-in bg-sand group"
          >
            <img src={img('kara1')} alt="Videoke Room" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106" />
          </div>
          <div
            onClick={() => openLightbox(img('pool1'))}
            className="col-span-6 lg:col-span-5 overflow-hidden rounded cursor-zoom-in bg-sand group"
          >
            <img src={img('pool1')} alt="Swimming Pool" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106" />
          </div>
          <div
            onClick={() => openLightbox(img('bill2'))}
            className="col-span-6 lg:col-span-5 overflow-hidden rounded cursor-zoom-in bg-sand group"
          >
            <img src={img('bill2')} alt="Billiards Room" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106" />
          </div>
          <div
            onClick={() => openLightbox(img('bed1'))}
            className="col-span-4 overflow-hidden rounded cursor-zoom-in bg-sand group"
          >
            <img src={img('bed1')} alt="Bedroom" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106" />
          </div>
          <div
            onClick={() => openLightbox(img('ext5'))}
            className="col-span-4 overflow-hidden rounded cursor-zoom-in bg-sand group"
          >
            <img src={img('ext5')} alt="Resort view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106" />
          </div>
          <Link
            to="/gallery"
            className="col-span-4 overflow-hidden rounded bg-ink flex items-center justify-center cursor-pointer group"
          >
            <div className="font-serif text-[1.3rem] text-cream text-center leading-none">
              All Photos
              <small className="block font-sans text-[0.62rem] tracking-[0.14em] uppercase text-terra-light mt-[0.45rem] font-bold">
                Full Gallery →
              </small>
            </div>
          </Link>
        </div>
      </section>

      {/* Rooms At Glance Showcase */}
      <section className="bg-ink px-5 md:px-14 py-22 text-left">
        <p className="tag text-terra-light before:bg-terra-light">Rooms &amp; Spaces</p>
        <h2 className="h2 text-cream">Every Space <em className="italic text-terra-light font-normal">Considered</em></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 select-none">
          {[
            { key: 'bed1', name: 'Bedrooms', count: '4 rooms · 20 beds total' },
            { key: 'bat1', name: 'Bathrooms', count: '8 full bathrooms' },
            { key: 'lou4', name: 'Lounge Areas', count: 'Multiple chill spots' },
            { key: 'kit1', name: 'Full Kitchen', count: 'Fully equipped for groups' },
          ].map((item) => (
            <Link
              key={item.key}
              to="/amenities"
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:translate-y-[-4px]"
            >
              <img
                src={img(item.key as any, 800)}
                alt={item.name}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/5 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-left">
                <div className="font-serif text-[1.2rem] text-white font-semibold leading-none">{item.name}</div>
                <div className="font-sans text-[0.66rem] text-white/50 tracking-[0.04em] mt-1.5 font-bold uppercase">{item.count}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream px-5 md:px-14">
        <div className="text-left mb-10">
          <p className="tag">Why Santiagos</p>
          <h2 className="h2">Reasons Groups <em className="italic font-normal">Love</em> It Here</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            { iconName: 'Sparkles', title: 'All-in-One Resort', desc: 'Pool, videoke, game room, gym, basketball, bonfire — all included. No need to go anywhere else for a full day of fun.' },
            { iconName: 'CloudSun', title: 'Cool Tagaytay Climate', desc: 'Alfonso sits at ~600m elevation — refreshing 18–24°C year-round. Pool days without Manila\'s heat.' },
            { iconName: 'Home', title: 'Unique Container Design', desc: 'Industrial chic architecture unlike anything else in the Tagaytay-Alfonso area. Every corner is photogenic.' },
            { iconName: 'Users', title: 'Built for Big Groups', desc: '4 bedrooms, 20 beds, 8 bathrooms — your whole barkada sleeps comfortably. Base rate covers up to 20 guests.' },
            { iconName: 'Gift', title: 'Perfect for Any Event', desc: 'Birthdays, reunions, team buildings, outings — every amenity is designed to make group events unforgettable.' },
            { iconName: 'Coins', title: 'Smart Group Value', desc: 'Split the rate across your crew and the per-head cost is surprisingly affordable for a full resort experience.' },
          ].map((item, idx) => {
            const CardIcon = (Icons as any)[item.iconName] || Icons.Sparkles;
            return (
              <div
                key={idx}
                className="p-[2.2rem_1.8rem] bg-white rounded-lg border border-sand relative overflow-hidden transition-all duration-300 hover:shadow-sh-md hover:translate-y-[-4px] hover:before:scale-x-100 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2.5px] before:bg-terra before:scale-x-0 before:origin-left before:transition-transform before:duration-[350ms] text-left"
              >
                <span className="block text-terra mb-3.5">
                  <CardIcon className="w-6 h-6 text-terra" />
                </span>
                <h3 className="font-headline text-[1.15rem] font-bold text-ink mb-2 tracking-[-0.01em]">{item.title}</h3>
                <p className="font-serif text-[0.98rem] leading-[1.8] text-ink-soft font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Band */}
      <div className="bg-terra text-white px-5 md:px-14 py-20 flex flex-col md:flex-row justify-between items-center gap-12 text-left">
        <h2 className="font-serif text-[1.8rem] md:text-[3.2rem] font-normal leading-[1.15]">
          Ready for Your Next
          <br />
          <em className="italic text-white/65 font-normal">Group Adventure?</em>
        </h2>
        <div className="flex gap-4 flex-wrap w-full md:w-auto">
          <Link to="/contact" className="btn btn-dark w-full md:w-auto justify-center text-center">Inquire Now →</Link>
          <a
            href="https://www.airbnb.com/rooms/1643466979772957530"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full md:w-auto justify-center text-center"
          >
            Book on Airbnb
          </a>
        </div>
      </div>

      {/* Full Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={GALLERY_IMGS}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};

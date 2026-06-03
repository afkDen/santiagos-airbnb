import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { img, GALLERY_IMGS, GalleryImage } from '../assets/images';
import { Lightbox } from '../components/Lightbox';
import * as Icons from 'lucide-react';

export const Events: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'birthday' | 'barkada' | 'family' | 'teambuilding' | 'corporate'>('birthday');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>(GALLERY_IMGS);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Set active tab based on query param
  useEffect(() => {
    const occ = searchParams.get('occasion');
    if (occ && ['birthday', 'barkada', 'family', 'teambuilding', 'corporate'].includes(occ)) {
      setActiveTab(occ as any);
    }
  }, [searchParams]);

  // Tab configurations
  const TABS = [
    { id: 'birthday', label: 'Birthday Party', badge: 'Birthday Party', imgKey: 'din3' as const },
    { id: 'barkada', label: 'Barkada Trip', badge: 'Barkada Trip', imgKey: 'pool1' as const },
    { id: 'family', label: 'Family Reunion', badge: 'Family Reunion', imgKey: 'kara1' as const },
    { id: 'teambuilding', label: 'Team Building', badge: 'Team Building', imgKey: 'bbl1' as const },
    { id: 'corporate', label: 'Corporate Outing', badge: 'Corporate Outing', imgKey: 'fir1' as const },
  ];

  const TAB_DETAILS = {
    birthday: {
      title: <>Make it a <em className="italic text-terra-light font-normal">Birthday</em><br />They'll Never Forget</>,
      desc: "Pool parties, videoke nights, outdoor dining under the stars — Santiagos gives your birthday crew everything they need to celebrate in style. The iconic Santiago's sign wall is the ultimate birthday photo backdrop.",
      tags: ['Up to 40 guests', 'Videoke included', 'Pool party ready', 'Outdoor dining'],
    },
    barkada: {
      title: <>The Ultimate <em className="italic text-terra-light font-normal">Barkada</em><br />Getaway</>,
      desc: "Pool, videoke, billiards, arcade, basketball, bonfire — there's no such thing as a boring moment here. Split the cost across your crew and get full resort access that feels like a 5-star experience.",
      tags: ['Billiards & arcade', 'Bonfire nights', 'Basketball court', 'Pool all day'],
    },
    family: {
      title: <>Where the <em className="italic text-terra-light font-normal">Whole Family</em><br />Comes Together</>,
      desc: "From the grandparents to the kids — Santiagos has something for every generation. Kids love the arcade and pool, adults love the videoke and bonfire, and everyone loves the gorgeous outdoor dining area.",
      tags: ['All ages welcome', 'Kids-friendly arcade', 'Large dining table', 'Full kitchen'],
    },
    teambuilding: {
      title: <>Build Your Team the <em className="italic text-terra-light font-normal">Right Way</em></>,
      desc: "Pool relay races, billiards tournaments, basketball shootouts, videoke competitions — Santiagos is built for team activities. Break out of the office and into a space that actually gets your team talking, laughing, and connecting.",
      tags: ['Sports facilities', 'Competitive games', 'Meeting-friendly spaces', 'Overnight options'],
    },
    corporate: {
      title: <>Where Work <em className="italic text-terra-light font-normal">Meets</em><br />Play</>,
      desc: "Give your team the corporate outing they actually want to attend. Full resort access means everyone from the CEO to the interns finds their groove — gym, pool, games, or just relaxing by the bonfire.",
      tags: ['Full resort access', 'Up to 40 pax', 'Multiple activity zones', 'Overnight stay'],
    },
  };

  // Trigger Lightbox
  const triggerLightboxBySrc = (src: string, customGallery?: GalleryImage[]) => {
    const gallery = customGallery || GALLERY_IMGS;
    setLightboxImages(gallery);
    const index = gallery.findIndex((item) => item.src === src);
    setLightboxIndex(index !== -1 ? index : 0);
    setLightboxOpen(true);
  };

  // Share handler
  const handleShare = (platform: 'viber' | 'messenger' | 'copy') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out Santiagos Resort in Alfonso, Tagaytay — perfect for group events! Pool, Videoke, Billiards & more.');
    
    if (platform === 'viber') {
      window.open(`viber://forward?text=${text}%20${url}`);
    } else if (platform === 'messenger') {
      window.open(`https://www.facebook.com/dialog/send?link=${url}&app_id=123456`);
    } else if (platform === 'copy') {
      navigator.clipboard?.writeText(window.location.href).then(() => {
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 2500);
      });
    }
  };

  return (
    <div>
      {/* Hero Header */}
      <div className="relative min-h-[300px] md:min-h-[360px] bg-ink flex items-end overflow-hidden text-left pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-38 scale-[1.03] transition-transform duration-1000"
          style={{ backgroundImage: `url(${img('ext1')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/42 to-ink/8 pointer-events-none" />
        <div className="relative z-10 p-5 md:p-[3rem_3.5rem_4rem] w-full">
          <div className="font-sans text-[0.61rem] tracking-[0.2em] uppercase text-white/30 mb-3 flex items-center gap-2 before:content-[''] before:w-3.5 before:h-[1px] before:bg-white/20 before:flex-shrink-0">
            <Link to="/" className="text-terra-light hover:text-white/85 transition-colors duration-200">Home</Link> / Events &amp; Occasions
          </div>
          <h1 className="font-headline text-[2.2rem] md:text-[4rem] font-bold text-white leading-[1.06] tracking-[-0.02em]">
            Events &amp; <em>Occasions</em>
          </h1>
          <p className="font-serif text-[1.08rem] text-white/50 max-w-[520px] font-light mt-[0.65rem] leading-[1.75]">
            Whatever your group is celebrating — we have the perfect setup for it.
          </p>
        </div>
      </div>

      {/* Occasion Tabs */}
      <div className="bg-ink p-0">
        <div className="flex overflow-x-auto scrollbar-none border-b border-white/8 select-none">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-shrink-0 p-5 px-8 text-[0.72rem] tracking-[0.12em] uppercase transition-all duration-200 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-terra-light border-terra font-extrabold'
                  : 'text-white/40 border-transparent hover:text-white/70 font-bold'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        {TABS.map((tab) => {
          const isSelected = activeTab === tab.id;
          if (!isSelected) return null;
          const details = TAB_DETAILS[tab.id as keyof typeof TAB_DETAILS];

          return (
            <div key={tab.id} className="relative h-[480px] overflow-hidden text-left">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] scale-104"
                style={{ backgroundImage: `url(${img(tab.imgKey)})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10" />
              <div className="absolute inset-0 flex items-center p-8 md:p-14 max-w-[700px]">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/30 p-[0.28rem_0.85rem] rounded-pill font-sans text-[0.62rem] tracking-[0.15em] uppercase text-gold-light font-bold mb-3.5 select-none">
                    {tab.badge}
                  </div>
                  <h2 className="font-headline text-[2rem] md:text-[3.2rem] text-white font-bold leading-[1.08] mb-3.5 tracking-tight">
                    {details.title}
                  </h2>
                  <p className="font-serif text-[1.06rem] text-white/68 leading-[1.88] font-light mb-6 max-w-[460px]">
                    {details.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6 select-none">
                    {details.tags.map((tagText, idx) => (
                      <span key={idx} className="p-[0.28rem_0.8rem] bg-white/10 rounded-pill font-sans text-[0.68rem] text-white/70 font-semibold">
                        {tagText}
                      </span>
                    ))}
                  </div>
                  <Link to={`/contact?occasion=${tab.id}`} className="btn btn-primary">
                    Book for {tab.label} →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Birthday Detail Block */}
      <section className="bg-cream px-5 md:px-14 py-22 text-left">
        <p className="tag">Birthday Parties</p>
        <h2 className="h2">A Birthday Venue Like <em>No Other</em></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-9 items-center">
          
          {/* Photo Showcase */}
          <div className="grid grid-cols-2 gap-3 select-none">
            <div
              onClick={() => triggerLightboxBySrc(img('din3'))}
              className="col-span-2 rounded-lg overflow-hidden cursor-pointer shadow-sh-md group transition-all duration-300 hover:scale-102"
            >
              <img src={img('din3')} alt="Birthday dining layout" className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-104" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('kara1'))}
              className="rounded-lg overflow-hidden cursor-pointer shadow-sh-md group transition-all duration-300 hover:scale-102"
            >
              <img src={img('kara1')} alt="Videoke lounge" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-104" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('pool1'))}
              className="rounded-lg overflow-hidden cursor-pointer shadow-sh-md group transition-all duration-300 hover:scale-102"
            >
              <img src={img('pool1')} alt="Pool party view" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-104" />
            </div>
          </div>

          {/* Description & Checklist */}
          <div>
            <p className="font-serif text-[1.05rem] text-ink-soft leading-[1.88] mb-4">
              There's no better setting for a birthday than Santiagos Resort — your group gets the entire property to yourselves. Pool parties by day, videoke sessions by night, and a bonfire to close out the celebration under Tagaytay's cool night sky.
            </p>
            <p className="font-serif text-[1.05rem] text-ink-soft leading-[1.88] mb-4">
              The iconic <strong>Santiago's gold signature wall</strong> in the dining area has become one of the most photographed birthday backdrops in Alfonso.
            </p>
            <ul className="flex flex-col gap-2.5 my-6 text-left">
              {[
                "The Santiago's Sign — iconic birthday photo backdrop",
                "Pool for daytime swimming & water games",
                "Videoke lounge for birthday song sessions",
                "Billiards & arcade for non-stop entertainment",
                "Outdoor dining area for group meals",
                "Bonfire for intimate nighttime celebration",
                "Full kitchen — bring your own food & cake",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-serif text-[1rem] text-ink-soft leading-[1.5]">
                  <span className="text-forest font-bold select-none">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Price Callout */}
            <div className="bg-gradient-to-br from-terra/8 to-gold/6 border border-terra/20 rounded-lg p-6 px-8 flex items-center justify-between gap-4 flex-wrap text-left select-none">
              <div>
                <div className="font-sans text-[0.82rem] text-ink-soft font-bold">Starts from (up to 20 guests)</div>
                <div className="font-sans text-[1.8rem] text-terra font-bold leading-none mt-1">
                  ₱25,000 <span className="font-sans text-[0.9rem] text-ink-soft font-light">/night</span>
                </div>
              </div>
              <Link to="/contact?occasion=birthday" className="btn btn-primary">
                Inquire Now →
              </Link>
            </div>
            <p className="font-sans text-[0.75rem] text-ink-soft/70 mt-2.5 italic select-none">
              * Prices are subject to change without prior notice.
            </p>
          </div>
        </div>
      </section>

      {/* Team Building Hero + Detail Block */}
      <div className="bg-cream-dk">
        {/* Full-bleed photo hero with text overlay */}
        <div className="relative h-[480px] md:h-[580px] overflow-hidden bg-charcoal flex items-center text-left">
          <img
            src={img('bbl1')}
            alt="Basketball Court at Santiagos Resort"
            className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-[8000ms] scale-102 hover:scale-104 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/97 via-ink/72 to-ink/15" />
          <div className="relative z-10 p-8 md:p-14 max-w-[680px]">
            <p className="tag text-terra-light before:bg-terra-light">Team Building &amp; Corporate</p>
            <h2 className="font-headline text-[2.2rem] md:text-[3.2rem] text-white font-bold leading-none mb-3.5">
              Your Team Will <em className="italic text-terra-light font-normal">Actually</em> Want to Come
            </h2>
            <p className="font-serif text-[1.06rem] text-white/60 leading-[1.88] max-w-[460px] mb-6">
              The perfect team building venue isn't a hotel conference room — it's a resort with 10+ activity zones where your team can actually bond. Sports, games, cooking, and relaxing all in one exclusive private venue.
            </p>
            <div className="flex gap-3 flex-wrap select-none">
              <Link to="/contact?occasion=teambuilding" className="btn btn-primary">
                Book Team Building →
              </Link>
              <Link to="/contact?occasion=corporate" className="btn btn-ghost">
                Corporate Outing
              </Link>
            </div>
          </div>
        </div>

        {/* Detail strip below hero */}
        <div className="px-5 md:px-14 py-22 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-18 items-start">
            
            {/* Checklist */}
            <div>
              <p className="tag">What's Included</p>
              <p className="font-serif text-[1.04rem] text-ink-soft leading-[1.85] mb-4.5 mt-3">
                With <strong>basketball, billiards, arcade, pool, and gym</strong> all included, there's no shortage of organized team activities. Close the day with a bonfire and watch the conversations flow.
              </p>
              <ul className="flex flex-col gap-2.5 my-6 text-left">
                {[
                  "Basketball court — team games & competitions",
                  "Pool relay races & water activities",
                  "Billiards & arcade tournament formats",
                  "Gym for the fitness-focused team members",
                  "Bonfire — best team discussion setting ever",
                  "Full kitchen — catered meals or group cooking",
                  "Sleeps 20+ guests across 2 VIP rooms & 9 double deck beds",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-serif text-[1rem] text-ink-soft leading-[1.5]">
                    <span className="text-forest font-bold select-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Price Callout */}
              <div className="bg-gradient-to-br from-terra/8 to-gold/6 border border-terra/20 rounded-lg p-6 px-8 flex items-center justify-between gap-4 flex-wrap text-left select-none">
                <div>
                  <div className="font-sans text-[0.82rem] text-ink-soft font-bold">Starting from (up to 20 pax)</div>
                  <div className="font-sans text-[1.8rem] text-terra font-bold leading-none mt-1">
                    ₱25,000 <span className="font-sans text-[0.9rem] text-ink-soft font-light">/night</span>
                  </div>
                </div>
                <Link to="/contact?occasion=teambuilding" className="btn btn-primary">
                  Book Now →
                </Link>
              </div>
              <p className="font-sans text-[0.75rem] text-ink-soft/70 mt-2.5 italic select-none">
                * Prices are subject to change without prior notice.
              </p>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-2 gap-3 select-none mt-9 lg:mt-0">
              <div
                onClick={() => triggerLightboxBySrc(img('gym1'))}
                className="rounded-lg overflow-hidden cursor-pointer shadow-sh-md group transition-all duration-300 hover:scale-102"
              >
                <img src={img('gym1')} alt="Gym area" className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-104" />
              </div>
              <div
                onClick={() => triggerLightboxBySrc(img('fir1'))}
                className="rounded-lg overflow-hidden cursor-pointer shadow-sh-md group transition-all duration-300 hover:scale-102"
              >
                <img src={img('fir1')} alt="Bonfire circle" className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-104" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Capacity Visual (Dark Section) */}
      <section className="bg-ink text-white/50 px-5 md:px-14 py-22 text-center relative overflow-hidden border-t border-white/5">
        <p className="tag text-terra-light before:bg-terra-light mx-auto">Who's Coming?</p>
        <h2 className="h2 text-cream mt-2">Perfect for <em>Any</em> Group Size</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5 mt-10 max-w-[1200px] mx-auto select-none">
          {[
            { iconName: 'Cake', name: 'Intimate Birthday', desc: '1–20 guests · Weekday · ₱25K/night' },
            { iconName: 'Users', name: 'Barkada Trip', desc: '1–20 guests · Base rate applies' },
            { iconName: 'Home', name: 'Family Reunion', desc: '20–40 guests · Group rates apply' },
            { iconName: 'Dribbble', name: 'Team Building', desc: '20–40 pax · Group rates apply' },
            { iconName: 'Sparkles', name: 'Big Blowout', desc: 'Up to 40 guests max · ₱1K/extra head' },
          ].map((card, idx) => {
            const CardIcon = (Icons as any)[card.iconName] || Icons.Sparkles;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/8 rounded-lg p-6 py-8 transition-all duration-300 hover:bg-terra/10 hover:border-terra/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(192,115,74,0.15)] flex flex-col items-center text-center"
              >
                <span className="block mb-3.5 leading-none text-terra-light">
                  <CardIcon className="w-8 h-8" />
                </span>
                <div className="font-sans text-[0.72rem] tracking-[0.1em] uppercase text-sand font-bold mb-1">
                  {card.name}
                </div>
                <div className="font-sans text-[0.7rem] text-white/28 leading-snug tracking-wide">
                  {card.desc}
                </div>
              </div>
            );
          })}
        </div>
        <p className="font-serif text-[0.82rem] text-white/30 mt-8 max-w-[650px] mx-auto">
          All packages include full access to every amenity — pool, videoke, arcade, gym, basketball, bonfire, kitchen, Wi-Fi &amp; parking.
        </p>
      </section>

      {/* Grid of Amenities (Cream Theme) */}
      <section className="bg-cream px-5 md:px-14 py-22 text-left">
        <p className="tag">Everything Included</p>
        <h2 className="h2">All <em>Amenities</em> for Your Event</h2>
        <p className="font-serif text-[1.12rem] text-ink-soft mb-10 max-w-[620px] mt-2.5 leading-relaxed">
          No matter your occasion, every amenity is included in your rate. No extra charges to use any facility.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 max-w-[1200px] mx-auto select-none">
          {[
            { iconName: 'Waves', name: 'Swimming Pool' },
            { iconName: 'Mic', name: 'Videoke Lounge' },
            { iconName: 'CircleDot', name: 'Billiards Table' },
            { iconName: 'Gamepad2', name: 'Arcade Games' },
            { iconName: 'Dumbbell', name: 'Gym & Fitness' },
            { iconName: 'Dribbble', name: 'Basketball Court' },
            { iconName: 'Flame', name: 'Bonfire Area' },
            { iconName: 'ChefHat', name: 'Full Kitchen' },
            { iconName: 'Wifi', name: 'Free Wi-Fi' },
            { iconName: 'Car', name: 'Free Parking' },
            { iconName: 'Tv', name: 'Smart TV' },
            { iconName: 'Bed', name: '4 Bedrooms · 20 Beds' },
            { iconName: 'ShowerHead', name: '8 Bathrooms' },
            { iconName: 'Trees', name: 'Outdoor Spaces' },
            { iconName: 'Utensils', name: 'Dining Area' },
          ].map((item, idx) => {
            const ItemIcon = (Icons as any)[item.iconName] || Icons.Sparkles;
            return (
              <div
                key={idx}
                className="bg-white border border-sand rounded-lg p-5 flex flex-col items-center gap-3.5 text-center transition-all duration-200 hover:border-terra hover:translate-y-[-4px] hover:shadow-[0_10px_32px_rgba(26,15,7,0.12)] cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-terra/12 text-terra flex items-center justify-center flex-shrink-0">
                  <ItemIcon className="w-6 h-6" />
                </div>
                <div className="font-sans text-[0.75rem] font-bold text-ink-soft leading-snug tracking-wide">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4.5 flex-wrap mt-10 justify-start select-none">
          <Link to="/amenities" className="btn btn-outline">
            See Full Amenities List
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Book Your Event →
          </Link>
        </div>
      </section>

      {/* Share Strip (Terracotta Band) */}
      <div className="bg-terra text-white px-5 md:px-14 py-11 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
        <div>
          <h3 className="font-headline text-[1.9rem] font-normal leading-[1.15]">
            Know someone planning <em className="italic text-white/65 font-normal">an event?</em>
          </h3>
          <p className="font-serif text-[0.85rem] text-white/65 mt-[0.3rem]">
            Share Santiagos Resort with your friends or event committee.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap w-full md:w-auto select-none">
          <button onClick={() => handleShare('viber')} className="btn btn-outline border-white/35 text-white hover:bg-white/15 hover:border-white w-full md:w-auto justify-center text-center">
            Share on Viber
          </button>
          <button onClick={() => handleShare('messenger')} className="btn btn-outline border-white/35 text-white hover:bg-white/15 hover:border-white w-full md:w-auto justify-center text-center">
            Messenger
          </button>
          <button
            onClick={() => handleShare('copy')}
            className={`btn btn-outline border-white/35 text-white w-full md:w-auto justify-center text-center ${copyFeedback ? 'bg-white/20' : 'hover:bg-white/15 hover:border-white'}`}
          >
            {copyFeedback ? '✓ Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};

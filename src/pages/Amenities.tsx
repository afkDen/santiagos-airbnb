import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { img, GALLERY_IMGS, GalleryImage } from '../assets/images';
import { Lightbox } from '../components/Lightbox';
import * as Icons from 'lucide-react';

// Sub-galleries
const BED_IMGS: GalleryImage[] = [
  { src: img('bed1'), label: 'VIP Room 1' },
  { src: img('bed7'), label: 'VIP Room 2' },
  { src: img('bed3'), label: 'Bedroom 3' },
  { src: img('bed4'), label: 'Bedroom 4' },
  { src: img('bed5'), label: 'Bedroom 5' },
  { src: img('bed6'), label: 'Bedroom 6' },
  { src: img('bed2'), label: 'Bedroom 7' },
  { src: img('bed8'), label: 'Bedroom 8' },
];

const BATH_IMGS: GalleryImage[] = [
  { src: img('bat1'), label: 'Bathroom 1' },
  { src: img('bat2'), label: 'Bathroom 2' },
  { src: img('bat3'), label: 'Bathroom 3' },
  { src: img('bat4'), label: 'Bathroom 4' },
  { src: img('bat5'), label: 'Bathroom 5' },
  { src: img('bat6'), label: 'Bathroom 6' },
  { src: img('bat7'), label: 'Outdoor Bathroom' },
];

const GYM_IMGS: GalleryImage[] = [
  { src: img('gym1'), label: 'Gym Equipment' },
  { src: img('gym2'), label: 'Gym Room' },
  { src: img('gym3'), label: 'Fitness Bench' },
];

const FIRE_IMGS: GalleryImage[] = [
  { src: img('fir1'), label: 'Bonfire Area' },
  { src: img('fir2'), label: 'Cozy Fire' },
];

const BBALL_IMGS: GalleryImage[] = [
  { src: img('bbl1'), label: 'Basketball Court' },
  { src: img('bbl2'), label: 'Court View' },
];

const OUT_IMGS: GalleryImage[] = [
  { src: img('out1'), label: 'Outdoor Dining' },
  { src: img('out2'), label: 'Garden Patio' },
  { src: img('out3'), label: 'Veranda Seating' },
  { src: img('out4'), label: 'Resort Walkway' },
  { src: img('out5'), label: 'Green Lawn' },
  { src: img('out6'), label: 'Container Architecture' },
  { src: img('out7'), label: 'Chill Deck' },
  { src: img('out8'), label: 'Night Lighting' },
];

export const Amenities: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState<GalleryImage[]>(GALLERY_IMGS);

  const triggerLightbox = (index: number, gallery: GalleryImage[]) => {
    setActiveGallery(gallery);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const triggerLightboxBySrc = (src: string, gallery: GalleryImage[]) => {
    const index = gallery.findIndex((item) => item.src === src);
    triggerLightbox(index !== -1 ? index : 0, gallery);
  };

  // Dynamic Lucide icon mapping
  const getIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-terra flex-shrink-0";
    switch (name) {
      case 'pool': return <Icons.Waves className={iconClass} />;
      case 'mic': return <Icons.Mic className={iconClass} />;
      case 'music': return <Icons.Music className={iconClass} />;
      case 'sofa': return <Icons.Sofa className={iconClass} />;
      case 'ac': return <Icons.Wind className={iconClass} />;
      case 'billiards': return <Icons.CircleDot className={iconClass} />;
      case 'arcade': return <Icons.Gamepad2 className={iconClass} />;
      case 'lamp': return <Icons.Lightbulb className={iconClass} />;
      case 'mountain': return <Icons.Mountain className={iconClass} />;
      case 'camera': return <Icons.Camera className={iconClass} />;
      case 'table': return <Icons.Utensils className={iconClass} />;
      case 'pen': return <Icons.Sparkles className={iconClass} />;
      case 'kitchen': return <Icons.ChefHat className={iconClass} />;
      case 'gym': return <Icons.Dumbbell className={iconClass} />;
      case 'basketball': return <Icons.Dribbble className={iconClass} />;
      case 'bonfire': return <Icons.Flame className={iconClass} />;
      case 'wifi': return <Icons.Wifi className={iconClass} />;
      case 'parking': return <Icons.ParkingCircle className={iconClass} />;
      case 'tv': return <Icons.Tv className={iconClass} />;
      case 'bed': return <Icons.Bed className={iconClass} />;
      case 'shower': return <Icons.ShowerHead className={iconClass} />;
      case 'outdoor': return <Icons.Trees className={iconClass} />;
      default: return <Icons.Sparkles className={iconClass} />;
    }
  };

  const AMENITIES_FULL_LIST = [
    { name: 'Swimming Pool', desc: 'Private · one of few in Alfonso', icon: 'pool' },
    { name: 'Videoke Room', desc: 'Dedicated room with full setup', icon: 'mic' },
    { name: 'Billiards Table', desc: 'Full-size Kangaroo pool table', icon: 'billiards' },
    { name: 'Arcade Games', desc: 'Multiple cabinets, all ages', icon: 'arcade' },
    { name: 'Gym & Fitness', desc: 'Basic equipment for the crew', icon: 'gym' },
    { name: 'Basketball Court', desc: 'Half-court for team games', icon: 'basketball' },
    { name: 'Bonfire Area', desc: 'Stories under the stars', icon: 'bonfire' },
    { name: 'Full Kitchen', desc: 'Fully equipped for group cooking', icon: 'kitchen' },
    { name: 'Free Wi-Fi', desc: 'High-speed throughout', icon: 'wifi' },
    { name: 'Free Parking', desc: 'On-premises for all vehicles', icon: 'parking' },
    { name: 'TV', desc: 'Smart TV for streaming', icon: 'tv' },
    { name: '2 VIP Rooms + 9 Double Deck Beds', desc: "Driver's room also available", icon: 'bed' },
    { name: '8 Bathrooms', desc: 'No queuing for big groups', icon: 'shower' },
    { name: 'Air Conditioning', desc: 'In rooms and videoke room', icon: 'ac' },
    { name: 'Outdoor Chill Spaces', desc: 'Covered outdoor lounging areas', icon: 'outdoor' },
  ];

  return (
    <div>
      {/* Header Banner */}
      <div className="relative min-h-[300px] md:min-h-[360px] bg-ink flex items-end overflow-hidden text-left pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-38 scale-[1.03] transition-transform duration-1000"
          style={{ backgroundImage: `url(${img('kara1')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/42 to-ink/8 pointer-events-none" />
        <div className="relative z-10 p-5 md:p-[3rem_3.5rem_4rem] w-full">
          <div className="font-sans text-[0.61rem] tracking-[0.2em] uppercase text-white/30 mb-3 flex items-center gap-2 before:content-[''] before:w-3.5 before:h-[1px] before:bg-white/20 before:flex-shrink-0">
            <Link to="/" className="text-terra-light hover:text-white/85 transition-colors duration-200">Home</Link> / Amenities
          </div>
          <h1 className="font-headline text-[2.2rem] md:text-[4rem] font-bold text-white leading-[1.06] tracking-[-0.02em]">
            Our <em>Amenities</em>
          </h1>
          <p className="font-serif text-[1.08rem] text-white/50 max-w-[520px] font-light mt-[0.65rem] leading-[1.75]">
            22+ amenities — all included. Pool, videoke, arcade, gym, basketball &amp; more.
          </p>
        </div>
      </div>

      {/* Karaoke Section */}
      <section className="bg-cream px-5 md:px-14 py-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center max-w-[1200px] mx-auto text-left">
          {/* Asymmetric Bento Grid - Large Left, Stacked Right */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 anim-l select-none">
            <div
              onClick={() => triggerLightboxBySrc(img('kara1'), GALLERY_IMGS)}
              className="col-span-1 sm:col-span-2 sm:row-span-2 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('kara1')} alt="Videoke main" className="w-full h-full object-cover aspect-[4/3] sm:aspect-auto transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('kara2'), GALLERY_IMGS)}
              className="col-span-1 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('kara2')} alt="Videoke 2" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('kara3'), GALLERY_IMGS)}
              className="col-span-1 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('kara3')} alt="Videoke 3" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
          <div className="anim-r">
            <p className="tag">Entertainment</p>
            <h2 className="h2">Videoke <em>Lounge</em></h2>
            <p className="mb-4">The videoke room is a Filipino group trip essential — and Santiagos delivers in style. A large-screen TV setup, premium Bluetooth speakers, full sectional sofa seating, and a wall-to-wall gallery of iconic music posters.</p>
            <p className="mb-6">Queens of the Night and Weekend Warriors all welcome.</p>
            <div className="flex flex-col gap-3">
              {[
                { title: 'Dedicated Videoke Room', desc: 'Full screen TV with videoke setup & high-quality speakers', icon: 'mic' },
                { title: 'Music Poster Gallery Wall', desc: 'Queen, Rolling Stones, Stevie Wonder, Bob Marley, ABBA & more', icon: 'music' },
                { title: 'Sectional Sofa Seating', desc: 'Large L-shaped sofa fits your whole group comfortably', icon: 'sofa' },
                { title: 'Air-Conditioned', desc: 'Stay cool for those long singing sessions', icon: 'ac' },
              ].map((row, idx) => (
                <div key={idx} className="flex gap-[0.85rem] p-[0.95rem_1.1rem] bg-cream-dk/40 border border-sand rounded-lg hover:border-terra hover:shadow-[0_4px_18px_rgba(192,115,74,0.12)] transition-all duration-200">
                  <span className="mt-[0.15rem]">{getIcon(row.icon)}</span>
                  <div>
                    <h4 className="font-sans text-[0.88rem] font-bold text-ink mb-[0.18rem]">{row.title}</h4>
                    <p className="font-serif text-[0.92rem] text-ink-soft font-normal leading-[1.55]">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Billiards & Arcade Section */}
      <section className="bg-cream-dk px-5 md:px-14 py-22 border-t border-sand/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center max-w-[1200px] mx-auto text-left">
          {/* Asymmetric Bento Grid - Stacked Left, Large Right */}
          <div className="lg:order-2 grid grid-cols-1 sm:grid-cols-3 gap-3 anim-r select-none">
            <div
              onClick={() => triggerLightboxBySrc(img('bill1'), GALLERY_IMGS)}
              className="col-span-1 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('bill1')} alt="Billiards 2" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('bill2'), GALLERY_IMGS)}
              className="col-span-1 sm:col-span-2 sm:row-span-2 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('bill2')} alt="Billiards main" className="w-full h-full object-cover aspect-[4/3] sm:aspect-auto transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('arc1'), GALLERY_IMGS)}
              className="col-span-1 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('arc1')} alt="Arcade" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
          <div className="lg:order-1 anim-l">
            <p className="tag">Game Room</p>
            <h2 className="h2">Billiards &amp; <em>Arcade</em></h2>
            <p className="mb-6">The game room is built for competition. A full-size billiards table takes center stage alongside classic arcade cabinets. Industrial brick walls and statement lighting set the mood for the ultimate game night.</p>
            <div className="flex flex-col gap-3">
              {[
                { title: 'Full-Size Billiards Table', desc: 'Professional Kangaroo pool table with all equipment', icon: 'billiards' },
                { title: 'Arcade Machines', desc: 'Multiple arcade units — retro classics for all ages', icon: 'arcade' },
                { title: 'Industrial Design', desc: 'Exposed brick, statement lighting — the perfect game room vibe', icon: 'lamp' },
              ].map((row, idx) => (
                <div key={idx} className="flex gap-[0.85rem] p-[0.95rem_1.1rem] bg-cream/60 border border-sand rounded-lg hover:border-terra hover:shadow-[0_4px_18px_rgba(192,115,74,0.12)] transition-all duration-200">
                  <span className="mt-[0.15rem]">{getIcon(row.icon)}</span>
                  <div>
                    <h4 className="font-sans text-[0.88rem] font-bold text-ink mb-[0.18rem]">{row.title}</h4>
                    <p className="font-serif text-[0.92rem] text-ink-soft font-normal leading-[1.55]">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pool Section */}
      <section className="bg-cream px-5 md:px-14 py-22 border-t border-sand/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center max-w-[1200px] mx-auto text-left">
          {/* Asymmetric Bento Grid - Large Left, Stacked Right */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 anim-l select-none">
            <div
              onClick={() => triggerLightboxBySrc(img('pool1'), GALLERY_IMGS)}
              className="col-span-1 sm:col-span-2 sm:row-span-2 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('pool1')} alt="Pool main" className="w-full h-full object-cover aspect-[4/3] sm:aspect-auto transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('pool2'), GALLERY_IMGS)}
              className="col-span-1 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('pool2')} alt="Pool 2" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('pool3'), GALLERY_IMGS)}
              className="col-span-1 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('pool3')} alt="Pool 3" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
          <div className="anim-r">
            <p className="tag">Pool</p>
            <h2 className="h2">Swimming <em>Pool</em></h2>
            <p className="mb-6">One of the few private pools in the Alfonso area — the pool is the heart of Santiagos. Perfectly sized for group swims, floats, and water games in the refreshing Tagaytay highland air.</p>
            <div className="flex flex-col gap-3">
              {[
                { title: 'Private Swimming Pool', desc: 'All yours for the entire stay — one of few in Alfonso', icon: 'pool' },
                { title: 'Cool Highland Climate', desc: '18–24°C mountain air makes every pool day refreshing', icon: 'mountain' },
                { title: 'Photogenic Setting', desc: 'Industrial container architecture frames every shot beautifully', icon: 'camera' },
              ].map((row, idx) => (
                <div key={idx} className="flex gap-[0.85rem] p-[0.95rem_1.1rem] bg-cream-dk/40 border border-sand rounded-lg hover:border-terra hover:shadow-[0_4px_18px_rgba(192,115,74,0.12)] transition-all duration-200">
                  <span className="mt-[0.15rem]">{getIcon(row.icon)}</span>
                  <div>
                    <h4 className="font-sans text-[0.88rem] font-bold text-ink mb-[0.18rem]">{row.title}</h4>
                    <p className="font-serif text-[0.92rem] text-ink-soft font-normal leading-[1.55]">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dining & Kitchen Section */}
      <section className="bg-cream-dk px-5 md:px-14 py-22 border-t border-sand/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center max-w-[1200px] mx-auto text-left">
          {/* Asymmetric Bento Grid - Stacked Left, Large Right */}
          <div className="lg:order-2 grid grid-cols-1 sm:grid-cols-3 gap-3 anim-r select-none">
            <div
              onClick={() => triggerLightboxBySrc(img('din1'), GALLERY_IMGS)}
              className="col-span-1 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('din1')} alt="Dining 2" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('din3'), GALLERY_IMGS)}
              className="col-span-1 sm:col-span-2 sm:row-span-2 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('din3')} alt="Dining main" className="w-full h-full object-cover aspect-[4/3] sm:aspect-auto transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div
              onClick={() => triggerLightboxBySrc(img('kit1'), GALLERY_IMGS)}
              className="col-span-1 overflow-hidden rounded-lg cursor-pointer shadow-sh-sm group"
            >
              <img src={img('kit1')} alt="Kitchen" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
          <div className="lg:order-1 anim-l">
            <p className="tag">Dining &amp; Kitchen</p>
            <h2 className="h2">Eat &amp; <em>Gather</em></h2>
            <p className="mb-6">The dining area is a genuine showpiece — a long glass dining table with rattan chairs, statement pendant lights, and Santiago's iconic gold signature on the wall. Behind it, a fully equipped kitchen handles groups of any size.</p>
            <div className="flex flex-col gap-3">
              {[
                { title: 'Large Dining Table', desc: 'Glass top with rattan chairs — seats your whole crew', icon: 'table' },
                { title: 'The Santiago\'s Sign', desc: 'Gold signature wall — most photographed spot in the resort', icon: 'pen' },
                { title: 'Full Kitchen', desc: 'Fully equipped — cook any meal for your entire group', icon: 'kitchen' },
              ].map((row, idx) => (
                <div key={idx} className="flex gap-[0.85rem] p-[0.95rem_1.1rem] bg-cream/60 border border-sand rounded-lg hover:border-terra hover:shadow-[0_4px_18px_rgba(192,115,74,0.12)] transition-all duration-200">
                  <span className="mt-[0.15rem]">{getIcon(row.icon)}</span>
                  <div>
                    <h4 className="font-sans text-[0.88rem] font-bold text-ink mb-[0.18rem]">{row.title}</h4>
                    <p className="font-serif text-[0.92rem] text-ink-soft font-normal leading-[1.55]">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Amenities */}
      <section className="bg-cream px-5 md:px-14 py-22 border-t border-sand/40">
        <p className="tag">More Amenities</p>
        <h2 className="h2 mb-10">Even <em>More</em> to Explore</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto text-left">
          {/* Gym */}
          <div className="flex flex-col gap-4 select-none">
            <h4 className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-terra font-bold">Gym &amp; Fitness</h4>
            <div className="grid grid-cols-2 gap-2">
              <div onClick={() => triggerLightbox(0, GYM_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('gym1')} alt="Gym" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(1, GYM_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('gym2')} alt="Gym 2" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <p className="font-serif text-[1.05rem] text-ink-soft font-normal leading-[1.85] mt-2">
              No skipping leg day on vacation. The gym has basic fitness equipment to keep your crew active between pool sessions.
            </p>
          </div>

          {/* Bonfire */}
          <div className="flex flex-col gap-4 select-none">
            <h4 className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-terra font-bold">Bonfire Area</h4>
            <div onClick={() => triggerLightbox(0, FIRE_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
              <img src={img('fir1')} alt="Bonfire Area" className="w-full aspect-[16/7.2] object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="font-serif text-[1.05rem] text-ink-soft font-normal leading-[1.85] mt-2">
              As the Tagaytay highlands cool at night, gather around the bonfire for stories, s'mores, and unforgettable moments under the stars.
            </p>
          </div>

          {/* Basketball */}
          <div className="flex flex-col gap-4 select-none">
            <h4 className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-terra font-bold">Basketball Court</h4>
            <div className="grid grid-cols-2 gap-2">
              <div onClick={() => triggerLightbox(0, BBALL_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bbl1')} alt="Basketball" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(1, BBALL_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bbl2')} alt="Basketball 2" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <p className="font-serif text-[1.05rem] text-ink-soft font-normal leading-[1.85] mt-2">
              Half-court basketball — perfect for team competitions, shooting drills, and burning off that post-lunch energy.
            </p>
          </div>

          {/* Outdoor Spaces */}
          <div className="flex flex-col gap-4 select-none">
            <h4 className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-terra font-bold">Outdoor Spaces</h4>
            <div className="grid grid-cols-2 gap-2">
              <div onClick={() => triggerLightbox(0, OUT_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('out1')} alt="Outdoor dining" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(1, OUT_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('out2')} alt="Outdoor 2" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <p className="font-serif text-[1.05rem] text-ink-soft font-normal leading-[1.85] mt-2">
              Covered outdoor dining and lounge areas with fresh highland air. Perfect for morning coffee, afternoon naps, or late-night hangouts.
            </p>
          </div>
        </div>
      </section>

      {/* Bedrooms & Bathrooms Sections */}
      <section className="bg-cream-dk px-5 md:px-14 py-22 border-t border-sand/40 text-left">
        <p className="tag">Sleep &amp; Refresh</p>
        <h2 className="h2 mb-10">Bedrooms &amp; <em>Bathrooms</em></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1200px] mx-auto items-start select-none">
          {/* Bed Columns */}
          <div className="flex flex-col gap-4 text-left">
            <p className="font-serif text-[1.06rem] text-ink-soft leading-[1.9] font-normal mb-2">
              2 VIP rooms, 9 double deck beds, and a driver's room — every guest has a comfortable place to sleep.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div onClick={() => triggerLightbox(0, BED_IMGS)} className="col-span-2 overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bed1')} alt="VIP Room 1" className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(1, BED_IMGS)} className="col-span-1 overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bed7')} alt="VIP Room 2" className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(2, BED_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bed3')} alt="Room 3" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(3, BED_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bed4')} alt="Room 4" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(4, BED_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bed5')} alt="Room 5" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <p className="font-sans text-[0.68rem] color-terra tracking-[0.1em] font-bold text-center mt-3 text-terra uppercase">
              2 VIP ROOMS &middot; 9 DOUBLE DECK BEDS &middot; DRIVER'S ROOM
            </p>
          </div>

          {/* Bath Columns */}
          <div className="flex flex-col gap-4 text-left">
            <p className="font-serif text-[1.06rem] text-ink-soft leading-[1.9] font-normal mb-2">
              8 bathrooms keep the whole group moving smoothly. Clean, well-maintained, and designed to handle the morning rush.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div onClick={() => triggerLightbox(0, BATH_IMGS)} className="col-span-3 overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bat1')} alt="Bathroom - Rain shower" className="w-full aspect-[16/7.2] object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(1, BATH_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bat2')} alt="Bathroom - Mirror" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(4, BATH_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bat5')} alt="Bathroom - Full view" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div onClick={() => triggerLightbox(6, BATH_IMGS)} className="overflow-hidden rounded-lg cursor-pointer group">
                <img src={img('bat7')} alt="Outdoor Bathroom" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <p className="font-sans text-[0.68rem] color-terra tracking-[0.1em] font-bold text-center mt-3 text-terra uppercase">
              8 Bathrooms
            </p>
          </div>
        </div>
      </section>

      {/* Grid of 22+ Amenities In Dark Section */}
      <section className="bg-charcoal text-white/50 px-5 md:px-14 py-22 text-left">
        <p className="tag text-terra-light before:bg-terra-light">Complete List</p>
        <h2 className="h2 text-cream">All <em>22+</em> Amenities Included</h2>
        <p className="lead text-white/40 mb-11">
          Every amenity below is included in your nightly rate — no hidden extras, no surprises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 max-w-[1200px] mx-auto select-none">
          {AMENITIES_FULL_LIST.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-[1.2rem_1.4rem] bg-white/5 rounded-lg border border-white/7 hover:border-terra/35 hover:translate-x-1.5 hover:shadow-[0_4px_20px_rgba(192,115,74,0.12)] transition-all duration-200 text-left"
            >
              {getIcon(item.icon)}
              <div>
                <div className="font-sans text-[0.86rem] font-bold text-sand tracking-[0.01em]">
                  {item.name}
                </div>
                <div className="font-sans text-[0.72rem] text-white/28 mt-[0.12rem] font-normal">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Things to Know Policies Section */}
      <section className="bg-cream-dk px-5 md:px-14 py-22 text-left">
        <p className="tag">Good to Know</p>
        <h2 className="h2 mb-10">Things to <em>Know</em></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto select-none">
          {[
            {
              title: 'Check-in & Checkout',
              iconName: 'Clock',
              items: ['Check-in is available after 3:00 PM', 'Checkout is before 12:00 PM (noon)', 'Early/late options available on request'],
            },
            {
              title: 'Guest Policy',
              iconName: 'Users',
              items: ['Base rate covers up to 20 guests', 'Additional guests: ₱1,000/head (max 40)', 'Kids under 3 y/o: max 3 are FREE'],
            },
            {
              title: 'House Rules',
              iconName: 'Home',
              items: ['No pets on the property', 'Keep the space clean and respectful', 'All amenities for registered guests only'],
            },
            {
              title: 'Safety Info',
              iconName: 'ShieldAlert',
              items: ['Smoke alarm not present on property', 'Carbon monoxide alarm not reported', 'Guests may bring portable safety devices'],
            },
          ].map((card, idx) => {
            const CircleIcon = (Icons as any)[card.iconName] || Icons.Sparkles;
            return (
              <div key={idx} className="p-7 bg-cream border border-sand rounded-lg hover:shadow-sh-sm hover:border-terra/40 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4 text-left">
                  <span className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-terra font-bold">
                    <CircleIcon className="w-5 h-5" />
                  </span>
                  <h4 className="font-headline text-[1.05rem] text-ink font-bold tracking-[-0.01em]">{card.title}</h4>
                </div>
                <div className="flex flex-col gap-2.5 text-left">
                  {card.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="font-serif text-[0.96rem] text-ink-soft flex items-start gap-2.5 font-normal leading-[1.65]">
                      <Icons.ChevronRight className="w-4 h-4 text-terra flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 justify-center flex-wrap mt-12">
          <Link to="/contact" className="btn btn-primary">Book Now →</Link>
          <Link to="/packages" className="btn btn-outline">View Rates</Link>
        </div>
      </section>

      {/* Lightbox component */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={activeGallery}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};

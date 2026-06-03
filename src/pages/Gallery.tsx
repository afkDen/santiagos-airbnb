import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { img, GalleryImage } from '../assets/images';
import { Lightbox } from '../components/Lightbox';

interface GalleryItem extends GalleryImage {
  category: 'exterior' | 'pool' | 'videoke' | 'billiards' | 'dining' | 'bedroom' | 'bathroom' | 'outdoor' | 'interior';
}

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Full photo list mapped from gallery.html
  const GALLERY_ITEMS: GalleryItem[] = [
    // Featured Top Two
    {
      src: img('ext1'),
      label: 'Resort Exterior — Industrial Chic Container Design',
      category: 'exterior',
    },
    {
      src: img('kara1'),
      label: 'Videoke Room with Music Poster Gallery',
      category: 'videoke',
    },
    // Grid Items
    {
      src: img('pool1'),
      label: 'Swimming Pool',
      category: 'pool',
    },
    {
      src: img('bill2'),
      label: 'Billiards — Game Room',
      category: 'billiards',
    },
    {
      src: img('din3'),
      label: "Dining Area — Santiago's Signature",
      category: 'dining',
    },
    {
      src: img('kara2'),
      label: 'Videoke Room',
      category: 'videoke',
    },
    {
      src: img('ext2'),
      label: 'Resort Architecture',
      category: 'exterior',
    },
    {
      src: img('bed1'),
      label: 'Bedroom',
      category: 'bedroom',
    },
    {
      src: img('pool2'),
      label: 'Pool Area',
      category: 'pool',
    },
    {
      src: img('bill1'),
      label: 'Billiards Table',
      category: 'billiards',
    },
    {
      src: img('kara3'),
      label: 'Videoke Room',
      category: 'videoke',
    },
    {
      src: img('out1'),
      label: 'Outdoor Dining Area',
      category: 'outdoor',
    },
    {
      src: img('bed3'),
      label: 'Bedroom',
      category: 'bedroom',
    },
    {
      src: img('din1'),
      label: 'Dining Room',
      category: 'dining',
    },
    {
      src: img('bat1'),
      label: 'Bathroom',
      category: 'bathroom',
    },
    {
      src: img('ext4'),
      label: 'Resort Views',
      category: 'exterior',
    },
    {
      src: img('pool3'),
      label: 'Pool',
      category: 'pool',
    },
    {
      src: img('bed5'),
      label: 'Bedroom',
      category: 'bedroom',
    },
    {
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/269a1081-43b6-4179-b104-e446e4878e29.jpeg?im_w=1920',
      label: 'Outdoor Area',
      category: 'outdoor',
    },
    {
      src: img('bat4'),
      label: 'Bathroom',
      category: 'bathroom',
    },
    {
      src: img('ext3'),
      label: 'Resort Architecture',
      category: 'exterior',
    },
    {
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/c5099b93-dc0b-4082-ab4e-66d7c6229024.jpeg?im_w=1920',
      label: '2nd Floor — Highland View Windows',
      category: 'interior',
    },
    {
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/f1e5dfce-68ba-4a14-8b10-92c43d231940.jpeg?im_w=1920',
      label: 'Aerial View — Resort from Above',
      category: 'exterior',
    },
    {
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/269a1081-43b6-4179-b104-e446e4878e29.jpeg?im_w=1920',
      label: 'Outdoor Dining — Covered Al Fresco',
      category: 'outdoor',
    },
  ];

  // Filter handlers
  const FILTERS = [
    { label: 'All Photos', key: 'all' },
    { label: 'Exterior', key: 'exterior' },
    { label: 'Pool', key: 'pool' },
    { label: 'Videoke', key: 'videoke' },
    { label: 'Billiards', key: 'billiards' },
    { label: 'Dining', key: 'dining' },
    { label: 'Bedroom', key: 'bedroom' },
    { label: 'Bathroom', key: 'bathroom' },
    { label: 'Outdoor', key: 'outdoor' },
    { label: 'Interior', key: 'interior' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (src: string) => {
    // We open lightbox on the filtered list so that user swipes through only the filtered category items
    const index = filteredItems.findIndex((item) => item.src === src);
    setLightboxIndex(index !== -1 ? index : 0);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="pg-hero">
        <div className="pg-hero-bg" style={{ backgroundImage: `url(${img('ext5')})` }} />
        <div className="pg-hero-vig" />
        <div className="pg-hero-body">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Gallery
          </div>
          <h1 className="font-headline text-[2.2rem] md:text-[4rem] font-bold text-white leading-[1.06] tracking-[-0.02em]">
            Photo <em>Gallery</em>
          </h1>
          <p className="font-serif text-[1.08rem] text-white/50 max-w-[520px] font-light mt-[0.65rem] leading-[1.75]">
            35+ photos — every room, every space at Santiagos Resort.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="bg-cream px-5 md:px-14 py-22 text-left">
        <p className="tag">Browse Photos</p>
        <h2 className="h2">See What <em>Awaits</em> You</h2>

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap my-8 select-none">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`p-[0.42rem_1.1rem] border-1.5 rounded-pill font-sans text-[0.64rem] tracking-[0.08em] font-bold transition-all duration-200 min-h-[38px] cursor-pointer ${
                activeFilter === filter.key
                  ? 'bg-terra border-terra text-white shadow-[0_4px_14px_rgba(192,115,74,0.3)]'
                  : 'border-sand bg-transparent text-ink-soft hover:bg-terra hover:border-terra hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Featured Strip - only displayed when "All Photos" filter is active */}
        {activeFilter === 'all' && (
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-3.5 mb-3.5 select-none">
            {GALLERY_ITEMS.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(item.src)}
                className="relative rounded-lg overflow-hidden cursor-zoom-in bg-sand shadow-sh-sm group"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-[550ms] group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5 text-left">
                  <div>
                    <span className="inline-block font-sans text-[0.55rem] bg-terra text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <span className="font-serif text-[0.88rem] text-white/95 font-medium block">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3.5">
          {(activeFilter === 'all' ? filteredItems.slice(2) : filteredItems).map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(item.src)}
              className="break-inside-avoid mb-3.5 overflow-hidden rounded-lg cursor-zoom-in relative bg-sand shadow-sh-sm group select-none"
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full block transition-transform duration-[550ms] group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4 text-left">
                <div>
                  <span className="inline-block font-sans text-[0.55rem] bg-terra text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-1.5">
                    {item.category}
                  </span>
                  <span className="font-serif text-[0.85rem] text-white/90 font-medium block">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback Message if no photos found in that category */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center font-serif text-[1rem] text-ink-soft">
            No photos found in this category.
          </div>
        )}

        {/* Airbnb Listing CTA */}
        <div className="text-center mt-12 p-8 border border-dashed border-sand bg-cream-dk/45 rounded-lg select-none">
          <p className="font-serif text-[1rem] text-ink-soft mb-4.5 font-normal">
            More photos available on our Airbnb listing. We update the gallery regularly.
          </p>
          <a
            href="https://www.airbnb.com/rooms/1643466979772957530"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View on Airbnb →
          </a>
        </div>
      </section>

      {/* Lightbox for Swipe Navigation */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredItems}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { GalleryImage } from '../assets/images';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}) => {
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        shiftIndex(-1);
      } else if (e.key === 'ArrowRight') {
        shiftIndex(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];

  const shiftIndex = (direction: number) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    onIndexChange(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;

    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        shiftIndex(1); // Swipe left -> Next
      } else {
        shiftIndex(-1); // Swipe right -> Prev
      }
    } else if (Math.abs(diff) < 10) {
      // Tap outside center image to close
      if ((e.target as HTMLElement).id === 'lb-overlay') {
        onClose();
      }
    }
  };

  return (
    <div
      id="lb-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-[9000] bg-charcoal/97 backdrop-blur-[4px] flex items-center justify-center animate-lightbox-in select-none"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-[1.1rem] text-white/50 bg-white/8 border border-white/15 rounded-full w-[42px] h-[42px] flex items-center justify-center hover:text-white hover:bg-white/12 hover:border-white/30 transition-all z-10"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Prev Arrow */}
      <button
        onClick={() => shiftIndex(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/8 border border-white/14 text-white text-[1.1rem] flex items-center justify-center hover:bg-terra hover:border-terra hover:scale-108 transition-all z-10"
        aria-label="Previous image"
      >
        ←
      </button>

      {/* Main Image */}
      <div className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center">
        <img
          src={currentImage.src}
          alt={currentImage.label}
          className="max-w-full max-h-[80vh] object-contain rounded shadow-sh-xl select-none"
        />
      </div>

      {/* Next Arrow */}
      <button
        onClick={() => shiftIndex(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/8 border border-white/14 text-white text-[1.1rem] flex items-center justify-center hover:bg-terra hover:border-terra hover:scale-108 transition-all z-10"
        aria-label="Next image"
      >
        →
      </button>

      {/* Label and Count */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 font-sans text-[0.67rem] text-white/30 tracking-[0.1em] text-center whitespace-nowrap">
        {currentImage.label} &middot; {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

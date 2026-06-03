import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const WA_MSG = 'https://wa.me/639228305320?text=Hi!+Im+interested+in+booking+Santiagos+Resort+Tagaytay.';
  const AIRBNB = 'https://www.airbnb.com/rooms/1643466979772957530';

  return (
    <footer id="footer" className="bg-charcoal text-white/50 px-5 md:px-14 py-22 select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-18 border-b border-white/5 pb-16">
        <div className="flex flex-col gap-5">
          <div className="font-brand text-[2.4rem] font-normal text-cream leading-none text-shadow-[0_0_20px_rgba(201,168,76,0.2)]">
            Santiagos Resort
          </div>
          <div className="font-sans text-[0.59rem] tracking-[0.2em] uppercase text-white/20">
            Alfonso, Tagaytay, Cavite · Philippines
          </div>
          <p className="font-serif text-[0.92rem] text-white/30 leading-[1.8] font-light">
            Group resort in Alfonso, Tagaytay — pool, videoke, game room, gym, basketball, bonfire &amp; more. Up to 40 guests.
            <br />
            Direct: 0917 800 5320 / 0922 830 5320 · Prices may vary for Airbnb vs direct bookings.
          </p>
          <div className="flex gap-2 mt-2">
            <a
              href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:bg-terra hover:border-terra hover:text-white hover:translate-y-[-3px] hover:shadow-[0_6px_16px_rgba(192,115,74,0.3)] transition-all duration-200"
              title="Facebook"
            >
              <svg className="w-[1em] h-[1em] fill-currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/santiagos.to"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:bg-terra hover:border-terra hover:text-white hover:translate-y-[-3px] hover:shadow-[0_6px_16px_rgba(192,115,74,0.3)] transition-all duration-200"
              title="Instagram"
            >
              <svg className="w-[1em] h-[1em] fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={WA_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:bg-terra hover:border-terra hover:text-white hover:translate-y-[-3px] hover:shadow-[0_6px_16px_rgba(192,115,74,0.3)] transition-all duration-200"
              title="WhatsApp"
            >
              <svg className="w-[1em] h-[1em] fill-currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 2A10 10 0 002 12c0 1.77.46 3.44 1.28 4.9L2 22l5.25-1.38A10 10 0 1012.05 2z" />
              </svg>
            </a>
            <a
              href={AIRBNB}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:bg-terra hover:border-terra hover:text-white hover:translate-y-[-3px] hover:shadow-[0_6px_16px_rgba(192,115,74,0.3)] transition-all duration-200"
              title="Airbnb"
            >
              <svg className="w-[1em] h-[1em] fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.381 0 2.5 1.119 2.5 2.5S13.381 9.5 12 9.5 9.5 8.381 9.5 7s1.119-2.5 2.5-2.5zM8.5 17c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5H8.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="font-sans text-[0.59rem] tracking-[0.22em] uppercase text-white/20 font-bold">
            Navigate
          </h5>
          <ul className="list-none flex flex-col gap-2.5">
            <li><Link to="/" className="font-serif text-[0.94rem] text-white/32 hover:text-terra-lt transition-colors duration-200">Home</Link></li>
            <li><Link to="/gallery" className="font-serif text-[0.94rem] text-white/32 hover:text-terra-lt transition-colors duration-200">Photo Gallery</Link></li>
            <li><Link to="/amenities" className="font-serif text-[0.94rem] text-white/32 hover:text-terra-lt transition-colors duration-200">Amenities</Link></li>
            <li><Link to="/packages" className="font-serif text-[0.94rem] text-white/32 hover:text-terra-lt transition-colors duration-200">Packages &amp; Rates</Link></li>
            <li><Link to="/location" className="font-serif text-[0.94rem] text-white/32 hover:text-terra-lt transition-colors duration-200">Location &amp; Nearby</Link></li>
            <li><Link to="/events" className="font-serif text-[0.94rem] text-white/32 hover:text-terra-lt transition-colors duration-200">Events &amp; Occasions</Link></li>
            <li><Link to="/contact" className="font-serif text-[0.94rem] text-white/32 hover:text-terra-lt transition-colors duration-200">Book Now</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="font-sans text-[0.59rem] tracking-[0.22em] uppercase text-white/20 font-bold">
            Quick Info
          </h5>
          <ul className="list-none flex flex-col gap-2.5">
            <li><span className="font-serif text-[0.94rem] text-white/32">2 VIP Rooms · 9 Double Deck Beds</span></li>
            <li><span className="font-serif text-[0.94rem] text-white/32">Driver's Room</span></li>
            <li><span className="font-serif text-[0.94rem] text-white/32">8 Bathrooms</span></li>
            <li><span className="font-serif text-[0.94rem] text-white/32">Up to 40 Guests (max)</span></li>
            <li><span className="font-serif text-[0.94rem] text-white/32">Check-in: 3:00 PM</span></li>
            <li><span className="font-serif text-[0.94rem] text-white/32">Checkout: 12:00 PM</span></li>
            <li><a href={AIRBNB} target="_blank" rel="noopener noreferrer" className="font-serif text-[0.94rem] text-white/32 hover:text-terra-lt transition-colors duration-200">View on Airbnb ↗</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="font-sans text-[0.59rem] tracking-[0.22em] uppercase text-white/20 font-bold">
            Stay Updated
          </h5>
          <p className="font-serif text-[0.94rem] text-white/28 leading-[1.75]">
            Get notified about availability, promos &amp; special rates.
          </p>
          <form onSubmit={handleSubscribe} className="flex border border-white/8 rounded overflow-hidden bg-white/3">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-transparent border-none text-white text-[0.82rem] outline-none placeholder:text-white/16"
              disabled={subscribed}
              required
            />
            <button
              type="submit"
              className={`px-4.5 py-3 text-white border-none font-sans text-[0.66rem] tracking-[0.1em] uppercase font-bold transition-all duration-200 ${
                subscribed ? 'bg-forest' : 'bg-terra hover:bg-terra-dk'
              }`}
            >
              {subscribed ? 'Done ✓' : 'Go'}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-white/5 pt-8">
        <span className="font-sans text-[0.67rem] text-white/15 flex items-center gap-1.5 flex-wrap justify-center md:justify-start">
          © 2026 Santiagos Resort · All rights reserved · Made with <Icons.Heart className="w-3 h-3 text-terra fill-terra inline" /> in the Philippines
        </span>
        <div className="flex gap-6">
          <a href="#" className="font-sans text-[0.67rem] text-white/17 hover:text-terra-lt transition-colors duration-200">Privacy</a>
          <a href="#" className="font-sans text-[0.67rem] text-white/17 hover:text-terra-lt transition-colors duration-200">Terms</a>
          <a href={AIRBNB} target="_blank" rel="noopener noreferrer" className="font-sans text-[0.67rem] text-white/17 hover:text-terra-lt transition-colors duration-200">Airbnb ↗</a>
        </div>
      </div>
    </footer>
  );
};

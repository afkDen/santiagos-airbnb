import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RateEstimator: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('20');
  const [occasion, setOccasion] = useState('Barkada Trip');
  
  const [nights, setNights] = useState(0);
  const [rate, setRate] = useState(0);
  const [dayLabel, setDayLabel] = useState('Select dates');
  const [total, setTotal] = useState<number | null>(null);

  const navigate = useNavigate();

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (!checkIn || !checkOut) {
      setRate(0);
      setNights(0);
      setDayLabel('Select dates');
      setTotal(null);
      return;
    }

    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);

    if (d2 <= d1) {
      setRate(0);
      setNights(0);
      setDayLabel('Invalid checkout date');
      setTotal(null);
      return;
    }

    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const nightsCount = Math.round(diffTime / (1000 * 60 * 60 * 24));
    setNights(nightsCount);

    const dow = d1.getDay(); // 0 = Sun, 5 = Fri, 6 = Sat
    const isWeekend = dow === 5 || dow === 6 || dow === 0;

    let baseRate = 0;
    if (guests === '40') {
      baseRate = isWeekend ? 55000 : 45000;
    } else if (guests === '30') {
      baseRate = isWeekend ? 45000 : 35000;
    } else {
      baseRate = isWeekend ? 35000 : 25000;
    }

    setRate(baseRate);
    setDayLabel(isWeekend ? 'Weekend rate (Fri–Sun)' : 'Weekday rate (Mon–Thu)');
    setTotal(baseRate * nightsCount);
  }, [checkIn, checkOut, guests]);

  const handleBook = () => {
    // Navigate to contact and pre-fill occasion
    const formattedOcc = occasion.toLowerCase().replace(/\s+/g, '');
    navigate(`/contact?occasion=${formattedOcc}`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      {/* Left Column: Calculator Card */}
      <div className="bg-white rounded-lg p-9 border-[1.5px] border-sand shadow-sh-sm text-left">
        <h3 className="font-sans text-[1.35rem] text-ink mb-6 font-semibold">Rate Estimator</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col text-left">
            <label className="block text-[0.61rem] tracking-[0.17em] uppercase text-ink-soft font-bold mb-2">Check-in Date</label>
            <input
              type="date"
              min={todayStr}
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && e.target.value >= checkOut) {
                  setCheckOut('');
                }
              }}
              className="w-full p-[0.8rem_1rem] border-[1.5px] border-sand rounded bg-white text-[0.9rem] text-ink outline-none focus:border-terra focus:ring-[3px] focus:ring-terra/12 transition-all duration-200"
            />
          </div>
          <div className="flex flex-col text-left">
            <label className="block text-[0.61rem] tracking-[0.17em] uppercase text-ink-soft font-bold mb-2">Check-out Date</label>
            <input
              type="date"
              min={checkIn || todayStr}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-[0.8rem_1rem] border-[1.5px] border-sand rounded bg-white text-[0.9rem] text-ink outline-none focus:border-terra focus:ring-[3px] focus:ring-terra/12 transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col text-left">
            <label className="block text-[0.61rem] tracking-[0.17em] uppercase text-ink-soft font-bold mb-2">Number of Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-[0.8rem_1rem] border-[1.5px] border-sand rounded bg-white text-[0.9rem] text-ink outline-none focus:border-terra focus:ring-[3px] focus:ring-terra/12 transition-all duration-200"
            >
              <option value="20">Up to 20 guests</option>
              <option value="30">Up to 30 guests</option>
              <option value="40">Up to 40 guests (max)</option>
            </select>
          </div>
          <div className="flex flex-col text-left">
            <label className="block text-[0.61rem] tracking-[0.17em] uppercase text-ink-soft font-bold mb-2">Occasion</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full p-[0.8rem_1rem] border-[1.5px] border-sand rounded bg-white text-[0.9rem] text-ink outline-none focus:border-terra focus:ring-[3px] focus:ring-terra/12 transition-all duration-200"
            >
              <option>Barkada Trip</option>
              <option>Birthday Party</option>
              <option>Family Reunion</option>
              <option>Team Building</option>
              <option>Company Outing</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="h-[1px] bg-sand my-5" />

        {/* Results Block */}
        <div className="bg-ink rounded-lg p-7">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[0.75rem] text-white/40">Nightly Rate</span>
            <span className="text-[0.85rem] text-white/75 font-medium">
              {rate > 0 ? `₱${rate.toLocaleString()}/night` : 'Select dates'}
            </span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[0.75rem] text-white/40">Group Rate Adjustment</span>
            <span className="text-[0.85rem] text-white/75 font-medium">{dayLabel}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[0.75rem] text-white/40">Number of Nights</span>
            <span className="text-[0.85rem] text-white/75 font-medium">
              {nights > 0 ? `${nights} night${nights !== 1 ? 's' : ''}` : '—'}
            </span>
          </div>
          <div className="flex justify-between items-baseline border-t border-white/10 pt-4 mt-4">
            <span className="text-[0.62rem] tracking-[0.12em] uppercase text-white/30">Estimated Total</span>
            <span className="font-sans text-[2.2rem] text-gold font-semibold leading-none">
              {total !== null ? `₱${total.toLocaleString()}` : '₱ —'}
            </span>
          </div>
        </div>

        <button
          onClick={handleBook}
          className="w-full mt-5 p-[0.95rem] bg-terra text-white border-none rounded font-sans text-[0.74rem] tracking-[0.12em] uppercase font-bold hover:bg-terra-dk transition-colors"
        >
          Book This Date →
        </button>
      </div>

      {/* Right Column: Pricing Info List */}
      <div className="text-left">
        <div className="tag">Rate Estimator</div>
        <h2 className="h2">Plan Your <em>Budget</em></h2>
        <p className="lead mb-6">Pick your dates and group size for an instant estimate.</p>
        
        <div className="bg-cream-dk border-l-[3px] border-terra p-[1.2rem_1.4rem] rounded-r font-sans text-[0.97rem] text-ink-soft leading-[1.78] mt-6">
          <strong>How pricing works:</strong>
          <br /><br />
          <strong>Weekday (Mon–Thu):</strong>
          <br />
          · 20 pax: ₱25,000/night
          <br />
          · 30 pax: ₱35,000/night
          <br />
          · 40 pax: ₱45,000/night
          <br /><br />
          <strong>Weekend (Fri–Sun):</strong>
          <br />
          · 20 pax: ₱35,000/night
          <br />
          · 30 pax: ₱45,000/night
          <br />
          · 40 pax: ₱55,000/night
          <br /><br />
          <strong>Note:</strong> Rates not applicable for public holidays or Airbnb bookings. Prices are subject to change without prior notice.
          <br /><br />
          <strong>Contact us directly to confirm:</strong>
          <br />
          <div className="flex items-center gap-2 mt-2">
            <svg className="w-[1em] h-[1em] fill-currentColor text-terra" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>0917 800 5320 / 0922 830 5320</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <svg className="w-[1em] h-[1em] fill-currentColor text-terra" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
            <span>@santiagos.to</span>
          </div>
        </div>
      </div>
    </div>
  );
};

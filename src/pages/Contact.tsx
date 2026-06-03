import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { img, GalleryImage } from '../assets/images';
import { Lightbox } from '../components/Lightbox';
import * as Icons from 'lucide-react';

const MOSAIC_IMGS: GalleryImage[] = [
  { src: img('din3'), label: "The Santiago's Sign" },
  { src: img('pool1'), label: 'Private Pool' },
  { src: img('ext1'), label: 'Industrial Chic Resort' },
];

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('barkada');
  const [message, setMessage] = useState('');

  // Form error states
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // Packing checklist state
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Pre-fill occasion from URL query param
  useEffect(() => {
    const occ = searchParams.get('occasion');
    if (occ && ['barkada', 'birthday', 'family', 'teambuilding', 'corporate', 'other'].includes(occ)) {
      setOccasion(occ);
    }
  }, [searchParams]);

  const PACKING_ITEMS = [
    'Food & drinks',
    'Birthday cake',
    'Swimwear & towels',
    'Toiletries',
    'Extra clothes',
    'Chargers & powerbanks',
    'Camera & tripod',
    'Cooler & ice',
    'Bonfire supplies',
    'Board games',
    'Personal medication',
    'Gym clothes',
  ];

  const FAQS = [
    {
      q: 'How many guests can Santiagos Resort accommodate?',
      a: <>The resort accommodates up to <strong>40 guests total</strong>. The base rate covers up to 20 guests. For 21–40 guests, an additional <strong>₱1,000 per extra head</strong> applies. Kids under 3 y/o: max 3 FREE. Please declare your full headcount when booking.</>,
    },
    {
      q: 'What are check-in and check-out times?',
      a: <>Check-in is after <strong>3:00 PM</strong> and checkout is before <strong>12:00 PM (noon)</strong>. Early check-in or late checkout may be arranged subject to availability — message us in advance to confirm.</>,
    },
    {
      q: 'Are all amenities included in the rate?',
      a: <>Yes — pool, videoke, billiards, arcade, gym, basketball court, bonfire area, full kitchen, TV, Wi-Fi, and free parking are all included in your nightly rate. The listing has 22+ amenities — no extra charges to use any of them.</>,
    },
    {
      q: 'Are pets allowed at the resort?',
      a: <>No — Santiagos Resort is a <strong>pet-free property</strong> to ensure a comfortable experience for all guests. Thank you for your understanding.</>,
    },
    {
      q: 'Should I book through Airbnb or directly?',
      a: <>Book directly by messaging us on <a href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/" target="_blank" className="text-terra hover:underline font-semibold" rel="noopener noreferrer">Facebook</a> or Instagram <strong>@santiagos.to</strong>, or call 0917 800 5320 / 0922 830 5320. Direct bookings only — pricing may vary between Airbnb and direct bookings.</>,
    },
    {
      q: 'Is Santiagos good for corporate team buildings?',
      a: <>Absolutely! The resort is ideal for <strong>team buildings, company outings, birthday parties, family reunions, and barkada trips</strong>. The variety of amenities — pool, sports, videoke, games — ensures every person in your group stays engaged.</>,
    },
    {
      q: 'What is the cancellation policy?',
      a: <>Cancellation terms are managed through the Airbnb platform. Please check the listing for the current policy before booking. For direct inquiries, contact us to discuss arrangements.</>,
    },
    {
      q: 'How far is Santiagos from Manila?',
      a: <>Santiagos Resort is in Alfonso, Cavite — approximately <strong>1.5–2 hours from Metro Manila</strong> via SLEX and STAR Tollway, and about 15–20 minutes from Tagaytay City. 3-car parking is available on premises.</>,
    },
  ];

  const triggerLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const toggleChecklist = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    const newErrors: Record<string, boolean> = {};
    if (!firstName.trim()) newErrors.firstName = true;
    if (!lastName.trim()) newErrors.lastName = true;
    if (!checkIn) newErrors.checkIn = true;
    if (!checkOut) newErrors.checkOut = true;
    if (!guests) newErrors.guests = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Date formatting helper
    const formatDate = (dateStr: string) => {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };

    const occasionLabels: Record<string, string> = {
      barkada: 'Barkada Trip',
      birthday: 'Birthday Party',
      family: 'Family Reunion',
      teambuilding: 'Team Building',
      corporate: 'Company Outing',
      other: 'Other',
    };

    const formattedOccasion = occasionLabels[occasion] || occasion;

    const messageLines = [
      'Hi! I’d like to inquire about booking Santiagos Resort.',
      '',
      `👤 Name: ${firstName} ${lastName}`,
      `📅 Check-in: ${formatDate(checkIn)}`,
      `📅 Check-out: ${formatDate(checkOut)}`,
      `👥 Guests: ${guests}`,
      `🎉 Occasion: ${formattedOccasion}`,
    ];

    if (message.trim()) {
      messageLines.push(`💬 Message: ${message.trim()}`);
    }

    messageLines.push('', 'Looking forward to hearing from you!');

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    window.open(`https://wa.me/639228305320?text=${encodedText}`, '_blank');
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative min-h-[300px] md:min-h-[360px] bg-ink flex items-end overflow-hidden text-left pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-38 scale-[1.03] transition-transform duration-1000"
          style={{ backgroundImage: `url(${img('ext1')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/42 to-ink/8 pointer-events-none" />
        <div className="relative z-10 p-5 md:p-[3rem_3.5rem_4rem] w-full">
          <div className="font-sans text-[0.61rem] tracking-[0.2em] uppercase text-white/30 mb-3 flex items-center gap-2 before:content-[''] before:w-3.5 before:h-[1px] before:bg-white/20 before:flex-shrink-0">
            <Link to="/" className="text-terra-light hover:text-white/85 transition-colors duration-200">Home</Link> / Book Now
          </div>
          <h1 className="font-headline text-[2.2rem] md:text-[4rem] font-bold text-white leading-[1.06] tracking-[-0.02em]">
            Book Your <em>Stay</em>
          </h1>
          <p className="font-serif text-[1.08rem] text-white/50 max-w-[520px] font-light mt-[0.65rem] leading-[1.75]">
            Message us on Facebook, Instagram or call — we respond quickly. For direct bookings only.
          </p>
        </div>
      </div>

      {/* Reservation Block */}
      <section className="bg-cream px-5 md:px-14 py-22 text-left">
        <p className="tag">Reservations</p>
        <h2 className="h2">Let's Make It <em>Happen</em></h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 mt-9 items-start">
          
          {/* LEFT: Info list and image mosaic */}
          <div>
            <p className="font-serif text-[1.05rem] text-ink-soft leading-[1.9] mb-6">
              Fill out the inquiry form and we'll confirm your booking details and lock in your dates. Or book instantly through our Airbnb listing for payment-protected confirmation.
            </p>

            {/* Quick stats / info list */}
            <div className="flex flex-col gap-3 my-6">
              {[
                { icon: <Icons.MapPin className="w-5 h-5 text-terra" />, text: <><strong>Location:</strong> Alfonso, Tagaytay, Cavite, Philippines</> },
                { icon: <Icons.Clock className="w-5 h-5 text-terra" />, text: <><strong>Check-in:</strong> After 3:00 PM &nbsp;·&nbsp; <strong>Checkout:</strong> Before 12:00 PM noon</> },
                { icon: <Icons.Users className="w-5 h-5 text-terra" />, text: <><strong>Capacity:</strong> Up to 40 guests — base rate covers 20, ₱1,000/head for extras</> },
                { icon: <Icons.Bed className="w-5 h-5 text-terra" />, text: <><strong>Rooms:</strong> 2 VIP rooms, 9 double deck beds, 8 bathrooms</> },
                { icon: <Icons.Ban className="w-5 h-5 text-terra" />, text: <><strong>No pets</strong> on the property</> },
                { icon: <Icons.Phone className="w-5 h-5 text-terra" />, text: <><strong>Phone / Viber / WhatsApp:</strong> 0917 800 5320 / 0922 830 5320</> },
                { icon: <Icons.Globe className="w-5 h-5 text-terra" />, text: <><strong>Facebook &amp; Instagram:</strong> <a href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/" target="_blank" className="text-terra hover:underline font-semibold" rel="noopener noreferrer">@santiagos.to</a></> },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 px-4.5 bg-white border border-sand/45 rounded-lg text-left"
                >
                  <span className="flex-shrink-0 mt-0.5 select-none">{row.icon}</span>
                  <span className="font-serif text-[0.96rem] text-ink-soft leading-relaxed">
                    {row.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct messaging triggers */}
            <div className="flex flex-col gap-3.5 my-6 select-none">
              <a
                href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full justify-center"
              >
                Message on Facebook
              </a>
              <a
                href="https://www.instagram.com/santiagos.to"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full justify-center py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:brightness-105 text-white font-sans text-[0.7rem] tracking-[0.14em] uppercase font-bold rounded transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
              >
                Message on Instagram
              </a>
              <a
                href="https://wa.me/639228305320?text=Hi!+Im+interested+in+booking+Santiagos+Resort+Tagaytay."
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full justify-center py-4 bg-[#25D366] hover:bg-[#20ba56] text-white font-sans text-[0.7rem] tracking-[0.14em] uppercase font-bold rounded transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Mosaic Images preview */}
            <div className="grid grid-rows-2 gap-2.5 mt-8 select-none">
              <div
                onClick={() => triggerLightbox(0)}
                className="relative rounded-lg overflow-hidden cursor-zoom-in group shadow-sh-sm"
              >
                <img src={MOSAIC_IMGS[0].src} alt={MOSAIC_IMGS[0].label} className="w-full aspect-[16/7] object-cover transition-transform duration-500 group-hover:scale-104" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                  <span className="font-sans text-[0.62rem] tracking-[0.12em] uppercase text-white/90 font-bold">{MOSAIC_IMGS[0].label}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div
                  onClick={() => triggerLightbox(1)}
                  className="relative rounded-lg overflow-hidden cursor-zoom-in group shadow-sh-sm"
                >
                  <img src={MOSAIC_IMGS[1].src} alt={MOSAIC_IMGS[1].label} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-104" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="font-sans text-[0.62rem] tracking-[0.12em] uppercase text-white/90 font-bold">{MOSAIC_IMGS[1].label}</span>
                  </div>
                </div>
                <div
                  onClick={() => triggerLightbox(2)}
                  className="relative rounded-lg overflow-hidden cursor-zoom-in group shadow-sh-sm"
                >
                  <img src={MOSAIC_IMGS[2].src} alt={MOSAIC_IMGS[2].label} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-104" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="font-sans text-[0.62rem] tracking-[0.12em] uppercase text-white/90 font-bold">{MOSAIC_IMGS[2].label}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Inquiry Form */}
          <div className="bg-white rounded-lg p-8 md:p-10 border border-sand/45 shadow-[0_4px_32px_rgba(26,15,7,0.08)]">
            <h3 className="font-headline text-[1.5rem] text-ink font-bold mb-1 tracking-tight">
              Build Your Inquiry
            </h3>
            <p className="font-sans text-[0.78rem] text-ink-soft mb-8">
              Fill in your details and we'll open WhatsApp with your message ready to send. We respond within 1–2 hours.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-sans text-[0.7rem] tracking-wide uppercase font-bold text-ink-soft">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Maria"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`w-full p-3.5 border rounded font-sans text-[0.92rem] bg-cream/30 focus:bg-white focus:outline-none focus:ring-1 focus:ring-terra ${
                      errors.firstName ? 'border-terra ring-1 ring-terra bg-terra/5' : 'border-sand'
                    }`}
                  />
                  {errors.firstName && <span className="font-sans text-[0.68rem] text-terra font-semibold mt-0.5">Required.</span>}
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-sans text-[0.7rem] tracking-wide uppercase font-bold text-ink-soft">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Santos"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full p-3.5 border rounded font-sans text-[0.92rem] bg-cream/30 focus:bg-white focus:outline-none focus:ring-1 focus:ring-terra ${
                      errors.lastName ? 'border-terra ring-1 ring-terra bg-terra/5' : 'border-sand'
                    }`}
                  />
                  {errors.lastName && <span className="font-sans text-[0.68rem] text-terra font-semibold mt-0.5">Required.</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-sans text-[0.7rem] tracking-wide uppercase font-bold text-ink-soft">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className={`w-full p-3.5 border rounded font-sans text-[0.92rem] bg-cream/30 focus:bg-white focus:outline-none focus:ring-1 focus:ring-terra ${
                      errors.checkIn ? 'border-terra ring-1 ring-terra bg-terra/5' : 'border-sand'
                    }`}
                  />
                  {errors.checkIn && <span className="font-sans text-[0.68rem] text-terra font-semibold mt-0.5">Required.</span>}
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-sans text-[0.7rem] tracking-wide uppercase font-bold text-ink-soft">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className={`w-full p-3.5 border rounded font-sans text-[0.92rem] bg-cream/30 focus:bg-white focus:outline-none focus:ring-1 focus:ring-terra ${
                      errors.checkOut ? 'border-terra ring-1 ring-terra bg-terra/5' : 'border-sand'
                    }`}
                  />
                  {errors.checkOut && <span className="font-sans text-[0.68rem] text-terra font-semibold mt-0.5">Required.</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-sans text-[0.7rem] tracking-wide uppercase font-bold text-ink-soft">
                    Number of Guests *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={`w-full p-3.5 border rounded font-sans text-[0.92rem] bg-cream/30 focus:bg-white focus:outline-none focus:ring-1 focus:ring-terra cursor-pointer ${
                      errors.guests ? 'border-terra ring-1 ring-terra bg-terra/5' : 'border-sand'
                    }`}
                  >
                    <option value="">Select...</option>
                    <option value="1–10 guests">1–10 guests</option>
                    <option value="11–20 guests">11–20 guests</option>
                    <option value="21–30 guests">21–30 guests</option>
                    <option value="31–40 guests (+₱1,000/head)">31–40 guests (+₱1,000/head)</option>
                  </select>
                  {errors.guests && <span className="font-sans text-[0.68rem] text-terra font-semibold mt-0.5">Required.</span>}
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-sans text-[0.7rem] tracking-wide uppercase font-bold text-ink-soft">
                    Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full p-3.5 border border-sand rounded font-sans text-[0.92rem] bg-cream/30 focus:bg-white focus:outline-none focus:ring-1 focus:ring-terra cursor-pointer"
                  >
                    <option value="barkada">Barkada Trip</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="family">Family Reunion</option>
                    <option value="teambuilding">Team Building</option>
                    <option value="corporate">Company Outing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="font-sans text-[0.7rem] tracking-wide uppercase font-bold text-ink-soft">
                  Message / Special Requests
                </label>
                <textarea
                  placeholder="Tell us about your event, any special arrangements, or questions you have…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3.5 h-[120px] border border-sand rounded font-sans text-[0.92rem] bg-cream/30 focus:bg-white focus:outline-none focus:ring-1 focus:ring-terra"
                />
              </div>

              {/* Submit triggers WhatsApp redirect */}
              <button
                type="submit"
                className="w-full py-4.5 bg-[#25D366] hover:bg-[#20ba56] text-white border-none rounded-lg font-sans text-[0.74rem] tracking-[0.14em] uppercase font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(37,211,102,0.4)] cursor-pointer select-none"
              >
                <svg className="w-[1.1rem] h-[1.1rem] fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp →
              </button>
            </form>

            <div className="flex flex-col gap-2.5 mt-4 select-none">
              <a
                href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full justify-center"
              >
                Or Message on Facebook
              </a>
              <a
                href="https://www.instagram.com/santiagos.to"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full justify-center py-3.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:brightness-105 text-white font-sans text-[0.7rem] tracking-[0.14em] uppercase font-bold rounded transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
              >
                Or Message on Instagram
              </a>
            </div>

            <p className="font-sans text-[0.68rem] text-ink-soft/80 text-center mt-4.5 leading-relaxed">
              Tapping "Send via WhatsApp" will open WhatsApp with your details pre-filled.
              <br />
              Just hit send — we'll reply within 1–2 hours.
            </p>
          </div>

        </div>
      </section>

      {/* Pre-Arrival packing checklist */}
      <section className="bg-cream-dk px-5 md:px-14 py-22 text-left">
        <p className="tag">Pre-Arrival Checklist</p>
        <h2 className="h2">What to <em>Bring</em></h2>
        <p className="font-serif text-[1.08rem] text-ink-soft mb-8 max-w-[620px] mt-2.5 leading-relaxed">
          The resort provides everything listed in our amenities. Here's what to bring from your side for the perfect stay.
        </p>

        {/* Bring Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-[1200px] mx-auto select-none">
          {PACKING_ITEMS.map((item, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleChecklist(idx)}
                className={`flex items-center gap-3.5 p-4 bg-white rounded-lg border-[1.5px] cursor-pointer transition-all duration-200 select-none ${
                  isChecked
                    ? 'border-forest bg-forest/5 shadow-inner'
                    : 'border-sand hover:border-terra hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-[22px] h-[22px] rounded-full flex items-center justify-center font-bold text-[0.68rem] border transition-all duration-200 ${
                    isChecked
                      ? 'bg-forest border-forest text-white'
                      : 'border-sand-lt text-transparent'
                  }`}
                >
                  ✓
                </div>
                <span className={`font-serif text-[0.96rem] leading-snug transition-all ${isChecked ? 'text-forest line-through opacity-85' : 'text-ink-soft'}`}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>
        <p className="font-sans text-[0.76rem] text-ink-soft mt-5 italic select-none">
          ✦ Tap items to check them off as you pack!
        </p>
      </section>

      {/* FAQ accordion */}
      <section className="bg-cream px-5 md:px-14 py-22 text-left border-t border-sand/40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-16 max-w-[1200px] mx-auto items-start">
          
          <div className="text-left">
            <p className="tag">FAQ</p>
            <h2 className="h2">Got <em>Questions?</em></h2>
            <p className="font-serif text-[1.08rem] text-ink-soft leading-relaxed mt-3">
              Everything you need to know before booking your group getaway at Santiagos Resort.
            </p>
            <Link to="/contact" className="btn btn-primary mt-6">
              Still Have Questions? →
            </Link>
          </div>

          {/* FAQ Accordion List */}
          <div className="flex flex-col gap-3 w-full">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-cream border-[1.5px] rounded-lg overflow-hidden transition-all duration-200 text-left ${
                    isOpen ? 'border-terra shadow-[0_4px_20px_rgba(192,115,74,0.1)]' : 'border-sand hover:border-terra-light'
                  }`}
                >
                  <div
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center p-4.5 px-5 cursor-pointer select-none gap-4"
                  >
                    <span className="font-headline text-[1rem] font-bold text-ink leading-snug tracking-tight">
                      {faq.q}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[0.9rem] flex-shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-terra text-white rotate-45' : 'bg-sand text-terra'
                      }`}
                    >
                      +
                    </span>
                  </div>
                  
                  {/* Sliding Answer */}
                  <div
                    className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[300px]' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 px-6 pt-0 font-serif text-[0.97rem] text-ink-soft leading-[1.8] font-normal border-t border-sand/30">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Guest reviews (Dark Section) */}
      <section className="bg-ink text-white/50 px-5 md:px-14 py-22 text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(192,115,74,0.08)_0%,transparent_60%),radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(201,168,76,0.06)_0%,transparent_60%)] pointer-events-none" />
        
        <p className="tag text-terra-light before:bg-terra-light mx-auto">Guest Experiences</p>
        <h2 className="h2 text-cream mt-2">What Guests <em>Say</em> About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 max-w-[1200px] mx-auto select-none text-left">
          {[
            {
              author: 'Mark A.',
              loc: 'Manila',
              stars: '★★★★★',
              text: 'Santiago Resort exceeded our expectations! We were a group of 28, and there was plenty of space for everyone. The billiards, pool, and videoke kept us entertained all night. 10/10!'
            },
            {
              author: 'Kyla C.',
              loc: 'Cavite',
              stars: '★★★★★',
              text: 'Had my 25th birthday here and it was magical! The dining area with the gold signature sign is the perfect backdrop. Beautiful container resort, very photogenic, and extremely clean.'
            },
            {
              author: 'Dave L.',
              loc: 'Quezon City',
              stars: '★★★★★',
              text: 'Booked it for our corporate team outing. The basketball court was a huge hit, and the bonfire at night was a great place to chat and relax. Excellent hosts and very easy direct booking.'
            }
          ].map((rev, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/8 rounded-lg p-6 py-8 transition-all duration-300 hover:bg-white/8 hover:-translate-y-0.5 text-left"
            >
              <div className="flex gap-1 text-gold mb-3.5 select-none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icons.Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-[1.02rem] text-white/60 leading-[1.82] font-light italic mb-5">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-terra text-white flex items-center justify-center font-sans text-[0.95rem] font-bold select-none">
                  {rev.author[0]}
                </div>
                <div>
                  <div className="font-sans text-[0.85rem] font-bold text-cream">
                    {rev.author}
                  </div>
                  <div className="font-sans text-[0.72rem] text-white/30 mt-0.5">
                    {rev.loc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox for Mosaic */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={MOSAIC_IMGS}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};

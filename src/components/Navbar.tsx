import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobNavRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when location changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  // Close mobile menu on outside tap
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        mobNavRef.current &&
        !mobNavRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/packages', label: 'Packages' },
    { path: '/location', label: 'Location' },
    { path: '/events', label: 'Events' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        id="nav"
        className={`fixed top-0 left-0 right-0 z-[800] flex items-center justify-between transition-all duration-300 ease-custom px-5 py-5 md:px-14 ${
          isScrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-[20px] shadow-sh-sm border-b border-sand/55 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <Link
          to="/"
          className={`font-brand text-[2.05rem] font-normal leading-none transition-all duration-300 ${
            isScrolled || !isHome
              ? 'text-terra-dark text-[1.85rem]'
              : 'text-gold-light text-shadow-[0_0_24px_rgba(201,168,76,0.4)]'
          }`}
        >
          Santiagos Resort
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {navLinks.map((link) => {
            const isCurrent = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-sans text-[0.68rem] tracking-[0.14em] uppercase font-semibold relative pb-[3px] transition-colors duration-200 hover:text-terra ${
                    isScrolled || !isHome
                      ? isCurrent ? 'text-terra' : 'text-ink-soft'
                      : isCurrent ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-terra transition-transform duration-300 ease-custom origin-left ${
                      isCurrent ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to="/contact"
              className="nav-book font-sans text-[0.67rem] font-bold uppercase tracking-[0.13em] text-white px-5.5 py-2.5 rounded-pill bg-terra shadow-[0_3px_12px_rgba(192,115,74,0.35)] hover:bg-terra-dk hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(192,115,74,0.45)] transition-all duration-200"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          ref={hamburgerRef}
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-[5px] bg-none border-none p-1"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-[22px] h-[1.5px] rounded-[1px] transition-all duration-300 ease-custom ${
              isScrolled || !isHome ? 'bg-ink' : 'bg-white'
            } ${isOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}
          />
          <span
            className={`block w-[22px] h-[1.5px] rounded-[1px] transition-all duration-300 ease-custom ${
              isScrolled || !isHome ? 'bg-ink' : 'bg-white'
            } ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`block w-[22px] h-[1.5px] rounded-[1px] transition-all duration-300 ease-custom ${
              isScrolled || !isHome ? 'bg-ink' : 'bg-white'
            } ${isOpen ? 'translate-y-[-6.5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Drawer menu */}
      <div
        ref={mobNavRef}
        className={`fixed inset-0 z-[700] bg-charcoal flex-col items-center justify-center gap-[1.2rem] overflow-y-auto overflow-x-hidden transition-all duration-300 ease-custom before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(192,115,74,0.1)_0%,transparent_70%)] before:pointer-events-none ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        {navLinks.map((link) => {
          const isCurrent = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`font-serif text-[2.1rem] font-semibold tracking-[-0.01em] transition-colors duration-200 z-[1] ${
                isCurrent ? 'text-terra-lt' : 'text-cream/80 hover:text-terra-lt'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          to="/contact"
          className="mt-4 px-12 py-3.5 bg-terra text-white rounded-pill font-sans text-[0.72rem] tracking-[0.14em] uppercase font-bold shadow-[0_6px_24px_rgba(192,115,74,0.4)] z-[1]"
        >
          Book Now
        </Link>
      </div>
    </>
  );
};

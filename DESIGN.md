# DESIGN.md — System of Record: Warm Industrial & Golden Hearth

## 1. Brand Identity & Vision
- **Brand**: Santiagos Resort (Whole-Property Industrial Chic Container Resort)
- **Location**: Kaytitinga II, Alfonso, Cavite (Tagaytay Highlands, ~600m elevation, 18–24°C)
- **Capacity**: 40 guests max across 20 beds in 4 room zones, with 8 bathrooms ("Zero-Queue Guarantee").
- **Aesthetic Direction**: Warm Industrial & Golden Hearth. Grounded raw shipping container architecture, warm terracotta corten tones, exposed brick, ambient string lights, and the illuminated gold neon "Santiago's" script wall (`din3`).
- **Slop Prevention**: Zero generic tropical clip art, zero SaaS pricing grids, zero fake gradients. Real estate photography-first with high contrast, authentic materials, and WCAG AA compliant typography.

---

## 2. Color Palette & Semantic Tokens

```css
:root {
  /* Surfaces & Backgrounds */
  --bg-primary: #FAF6F0;          /* Warm Bone Linen */
  --bg-secondary: #F3ECE2;        /* Warm Sandstone (alternating sections) */
  --bg-card: #FFFFFF;             /* Pure White card surface */
  --bg-dark: #1C130D;             /* Cast Iron Charcoal (footer, dark heroes) */
  --bg-dark-surface: #2A1E16;     /* Warm Espresso container surface */

  /* Brand Accents */
  --brand-primary: #C26E38;       /* Terracotta Brick */
  --brand-primary-hover: #A55727; /* Deep Terracotta */
  --brand-gold: #D4AF37;          /* Illuminated Sign Gold */
  --brand-gold-glow: #F3DC7B;     /* Neon Ambient Halo */
  --brand-olive: #4A5D3B;         /* Highland Foliage Green */

  /* Typography Colors */
  --text-primary: #1C130D;        /* Cast Iron Ink (WCAG AAA) */
  --text-muted: #6B5D52;          /* Warm Charcoal Slate */
  --text-light: #FAF6F0;          /* Bone Linen on Dark */
  --text-gold: #D4AF37;           /* Accent Gold Numerals */

  /* Borders & Dividers */
  --border-subtle: #E8DEC8;       /* Warm Sand Stroke */
  --border-strong: #D5C7B0;
  --border-gold: rgba(212, 175, 55, 0.35);

  /* Third Party */
  --whatsapp: #25D366;
  --whatsapp-hover: #20BA56;
  --airbnb: #FF5A5F;

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(28, 19, 13, 0.05);
  --shadow-md: 0 8px 24px rgba(28, 19, 13, 0.08);
  --shadow-lg: 0 16px 48px rgba(28, 19, 13, 0.12);
  --shadow-gold: 0 0 24px rgba(212, 175, 55, 0.25);
}
```

---

## 3. Typography Hierarchy

- **Script Brand Logo**: `Great Vibes, cursive` (Used for the authentic "Santiago's" brand script and gold illuminated logo).
- **Display Headings (`h1`, `h2`, `h3`)**: `Playfair Display, Georgia, serif` (Weights: 600, 700. Editorial elegance with warm curves).
- **Body & UI**: `Plus Jakarta Sans, sans-serif` (Weights: 400, 500, 600, 700. High legibility, modern humanist sans).
- **Pricing & Stat Numerals**: `Outfit, sans-serif` (Clean geometric numerals).

---

## 4. Layout & Component Rules

- **Mobile First**: Default layout is engineered for mobile screen widths (360px–430px) where social media clicks land.
- **Hero Viewport**: `min-h-[100dvh]` with `pt-20 md:pt-24` cap. Headline maximum 2 lines on desktop. Subtext maximum 20 words.
- **Navigation**: Clean single-line header on desktop with direct WhatsApp CTA. Mobile drawer for smaller viewports.
- **Sticky Conversion**: Bottom-fixed bar on mobile, floating corner on desktop with WhatsApp pulsing halo (`animation: ring 2.4s ease-out infinite`).
- **Button Micro-interactions**: `transform: scale(0.97)` on `:active` with `transition: transform 160ms ease-out` per Emil Kowalski's guidelines.
- **Reduced Motion**: All animations branch on `prefers-reduced-motion: reduce`.

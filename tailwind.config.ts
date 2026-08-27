import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF6F0',
          dark: '#F3ECE2',
          light: '#FDFBF7',
        },
        terra: {
          DEFAULT: '#C26E38',
          dark: '#A55727',
          light: '#D4956E',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3DC7B',
          dark: '#A88420',
        },
        olive: {
          DEFAULT: '#4A5D3B',
          light: '#657E52',
          dark: '#35432A',
        },
        ink: {
          DEFAULT: '#1C130D',
          soft: '#3D2410',
          muted: '#6B5D52',
          light: '#9E8E81',
        },
        charcoal: {
          DEFAULT: '#0F0804',
        },
        sand: {
          DEFAULT: '#E8DEC8',
          dark: '#D5C7B0',
          light: '#F7F3EB',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA56',
        },
        airbnb: '#FF5A5F',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '12px',
        xl: '16px',
        '2xl': '16px',
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(28, 19, 13, 0.05)',
        'warm-md': '0 8px 24px rgba(28, 19, 13, 0.08)',
        'warm-lg': '0 16px 48px rgba(28, 19, 13, 0.12)',
        'warm-xl': '0 24px 64px rgba(28, 19, 13, 0.18)',
        'gold-glow': '0 0 24px rgba(212, 175, 55, 0.25)',
      },
      keyframes: {
        ringPulse: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.6)' },
          '70%': { transform: 'scale(1.03)', boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
        goldHalo: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 24px rgba(243, 220, 123, 0.8))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'whatsapp-pulse': 'ringPulse 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite',
        'gold-halo': 'goldHalo 3.5s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a0f07',
          soft: '#3d2410',
        },
        terra: {
          DEFAULT: '#c07a4f',
          dk: '#9a5835',
          lt: '#d4956e',
        },
        cream: {
          DEFAULT: '#faf5ee',
          dk: '#f2e8d9',
        },
        sand: {
          DEFAULT: '#e2ceb4',
          lt: '#ede3d4',
        },
        gold: {
          DEFAULT: '#c9a84c',
          lt: '#e0c46e',
        },
        forest: '#3d5229',
        charcoal: '#0f0804',
      },
      borderRadius: {
        DEFAULT: '6px',
        lg: '14px',
        pill: '999px',
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        headline: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        brand: ["'Great Vibes'", "cursive"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'sh-sm': '0 2px 10px rgba(26,15,7,.08)',
        'sh-md': '0 6px 28px rgba(26,15,7,.13)',
        'sh-lg': '0 16px 56px rgba(26,15,7,.18)',
        'sh-xl': '0 28px 80px rgba(26,15,7,.24)',
      },
      transitionTimingFunction: {
        'ease-custom': 'cubic-bezier(.4,0,.2,1)',
      }
    },
  },
  plugins: [],
}

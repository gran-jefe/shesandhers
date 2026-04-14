import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        lato:     ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        sh: {
          base:    '#1A0A14',
          deep:    '#2E1025',
          plum:    '#8B1A6B',
          magenta: '#C4527A',
          rose:    '#E8A0B4',
          gold:    '#C4952A',
          blush:   '#FDF6FB',
          petal:   '#F5E6F0',
          border:  '#F0D0E0',
          muted:   '#8B4A6B',
          white:   '#FFFFFF',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float':   'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

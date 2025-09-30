/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official University Color Palette
        'university-navy': '#1e3a8a',
        'university-blue': '#3b82f6',
        'university-sky': '#0ea5e9',
        'university-indigo': '#6366f1',
        'university-purple': '#8b5cf6',
        'university-emerald': '#10b981',
        'university-teal': '#14b8a6',
        'university-amber': '#f59e0b',
        'university-orange': '#f97316',
        'university-red': '#ef4444',

        // Neutral colors for professional look
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#e5e5e5',
        'neutral-300': '#d4d4d4',
        'neutral-400': '#a3a3a3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',

        // Brand palette
        'brand-ivory': '#ffffff', // changed to white
        'brand-sand': '#ffffff',  // changed to white
        'brand-stone': '#ffffff', // changed to white
        'brand-black': '#000000',

        // Text colors (mapped to brand)
        'text-primary': '#000000',
        'text-secondary': '#000000B3',
        'text-tertiary': '#00000080',
        'text-inverse': '#000000',

        // Background colors (mapped to brand)
        'bg-primary': '#ffffff',   // changed to white 
        'bg-secondary': '#ffffff', // changed to white
        'bg-tertiary': '#ffffff',  // changed to white
        'bg-accent': '#ffffff',    // changed to white

        // Border colors (mapped to brand)
        'border-light': '#ffffff',  // changed to white
        'border-medium': '#ffffff', // changed to white
        'border-dark': '#000000',

        // Legacy colors (keeping for compatibility)
        'neon-blue': '#f97316',
        'neon-purple': '#8E44AD',
        'futuristic-cyan': '#0D6EFD',
        'deep-navy': '#0A0A1A',
        'electric-pink': '#FF0080',
        'neon-green': '#ef4444',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF' },
          '100%': { boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(45deg, #00FFFF, #8E44AD, #FF0080)',
        'university-gradient': 'linear-gradient(135deg, #1e3a8a, #3b82f6, #0ea5e9)',
        'university-gradient-warm': 'linear-gradient(135deg, #1e3a8a, #6366f1, #8b5cf6)',
        'university-gradient-cool': 'linear-gradient(135deg, #0ea5e9, #14b8a6, #10b981)',
        'light-gradient': 'linear-gradient(135deg, #f8fafc, #e2e8f0, #cbd5e1)',
        'hero-gradient': 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #e5e7eb 100%)',
      },
      typography: {
        'hero-title': {
          fontSize: '4rem',
          lineHeight: '1.1',
          fontWeight: '800',
          letterSpacing: '-0.025em',
        },
        'section-title': {
          fontSize: '2.5rem',
          lineHeight: '1.2',
          fontWeight: '700',
          letterSpacing: '-0.025em',
        },
        'card-title': {
          fontSize: '1.25rem',
          lineHeight: '1.4',
          fontWeight: '600',
          letterSpacing: '-0.025em',
        },
        'body-large': {
          fontSize: '1.125rem',
          lineHeight: '1.7',
          fontWeight: '400',
        },
        'body-regular': {
          fontSize: '1rem',
          lineHeight: '1.6',
          fontWeight: '400',
        },
        'body-small': {
          fontSize: '0.875rem',
          lineHeight: '1.5',
          fontWeight: '400',
        },
      }
    },
  },
  plugins: [],
}

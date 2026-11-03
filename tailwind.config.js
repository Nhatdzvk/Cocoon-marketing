/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1D1C18',
        'warm-ivory': '#F4F0E7',
        'botanical-green': '#586B46',
        'moss-green': '#788764',
        rose: '#D59AA5',
        'lotus-pink': '#E7B8C3',
        'pomelo-green': '#A7B86A',
        'coffee-brown': '#6B4936',
        'golden-yellow': '#D9AA45',
        // subtle tints
        mist: 'rgba(244, 240, 231, 0.7)',
        'botanical-light': '#EBF0E6',
        'charcoal-light': '#2A2924',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Lora', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'mist-float': 'mistFloat 14s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        mistFloat: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -15px) scale(1.05)' },
          '100%': { transform: 'translate(-15px, 10px) scale(0.98)' },
        },
      },
    },
  },
  plugins: [],
}

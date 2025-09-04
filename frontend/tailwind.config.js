/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors: {
        'primary': "#6366f1",
        'primary-dark': "#4f46e5",
        'primary-light': "#8b5cf6",
        'secondary': "#f8fafc",
        'accent': "#06d6a0",
        'accent-dark': "#059669",
        'gradient-start': "#667eea",
        'gradient-end': "#764ba2",
        'purple-start': "#8b5cf6",
        'purple-end': "#6366f1",
        'blue-start': "#3b82f6",
        'blue-end': "#1d4ed8",
        'emerald-start': "#10b981",
        'emerald-end': "#059669",
        'rose-start': "#f43f5e",
        'rose-end': "#e11d48",
        'amber-start': "#f59e0b",
        'amber-end': "#d97706",
        'dark-bg': "#0f172a",
        'dark-card': "#1e293b",
        'neutral-50': "#fafafa",
        'neutral-100': "#f5f5f5",
        'neutral-200': "#e5e5e5",
        'neutral-800': "#262626",
        'neutral-900': "#171717"
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-gentle': 'pulseGentle 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
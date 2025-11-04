import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.08)' },
    },
  },
  plugins: [],
} satisfies Config

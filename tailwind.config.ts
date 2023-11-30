import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        cera: ['var(--font-cera)'],
        nexa: ['var(--font-nexa)'], 
      },
      colors: {
        pink: {
          400: '#ff34cc'
        },
        yellow: {
          400: '#ffcc33',
        },
        green: {
          400: '#25d366'
        }
      }
    },
  },
  plugins: [],
}
export default config

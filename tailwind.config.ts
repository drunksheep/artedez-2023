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
        },
        purple: {
          400: '#1e0b37'
        }
      },
      fontSize: {
        '12' : '12px',
        '18' : '18px',
        '22' : '22px',
        '24' : '24px',
        '28' : '28px',
        '30' : '30px',
        '36' : '36px',
        '40' : '40px',
        '50' : '50px',
        '56' : '56px',
      },
      container: {
        screens: {
            xl: '1300px',
            '2xl' : '1300px'
        }
      }
    },
  },
  plugins: [],
}
export default config

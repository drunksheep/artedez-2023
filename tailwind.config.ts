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
          400: '#25d366',
          500: '#1ea851',
        },
        purple: {
          400: '#1e0b37'
        },
        gray: {
          400: '#58595b'
        }
      },
      fontSize: {
        '10' : '10px',
        '12' : '12px',
        '14' : '14px',
        '18' : '18px',
        '20' : '20px',
        '22' : '22px',
        '24' : '24px',
        '28' : '28px',
        '30' : '30px',
        '32' : '32px',
        '34' : '34px',
        '36' : '36px',
        '40' : '40px',
        '50' : '50px',
        '56' : '56px',
      },
      screens: {
        '3xl' : '1700px'
      },
      container: {
        screens: {
            md: '320px',
            xl: '1200px',
            '2xl' : '1200px',
        }
      }
    },
  },
  plugins: [],
}
export default config

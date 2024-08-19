/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#66E2DC',
        orange: '#FA7453',
        yellow: '#FFB964',
        white: '#FCFAF9',
        slate: '#191826',
      },
      lineHeight: {
        100: '100%',
        110: '110%',
        150: '150%',
        180: '180%',
      },
      fontSize: {
        88: '5.5rem',
        64: '4rem',
        40: '2.5rem',
        20: '1.25rem',
        18: '1.125rem',
        16: '1rem',
      },
      spacing: {
        1120: '70rem',
        928: '58rem',
        736: '46rem',
        625: '39.0625rem',
        512: '32rem',
        504: '31.5rem',
        416: '26rem',
        375: '23.4375rem',
        356: '22.25rem',
        335: '20.9375rem',
        200: '12.5rem',
        128: '8rem',
        86: '5.375rem',
        80: '5rem',
        64: '4rem',
        56: '3.5rem',
        48: '3rem',
        40: '2.5rem',
        32: '2rem',
        24: '1.5rem',
        20: '1.25rem',
        16: '1rem',
        8: '0.5rem',
      },
      letterSpacing: {
        1: '0.0625rem',
      },
      backgroundImage: {
        'hero-background': "url('./assets/bg-main-mobile.png')",
      },
      backgroundSize: {
        'hero-background-size': '384px 655px' 
      },
      screens: {
        xs: '344px',
        xlg: '1440px',
      },
    },
  },
  plugins: [],
}


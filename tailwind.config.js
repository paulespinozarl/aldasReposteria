/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Otros plugins que puedas necesitar
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'pruebaBg': "url('/public/torta-14.jpg')"
      },
      spacing: {
        '118': '27rem',
        '128': '38rem',
        '130': '39.5rem',
        '132': '42rem'
      },
      fontSize: {
        ssm: '0.6rem'
      }
    },
  },
  plugins: [],
}
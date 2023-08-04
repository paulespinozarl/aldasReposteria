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
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
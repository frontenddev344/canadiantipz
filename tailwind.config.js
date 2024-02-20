/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build*/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('img/credit-bg.jpg')",
        'resorts': "url('img/Resorts.jpg')",
        'dining': "url('img/dining.jpg')",
        'weather': "url('img/Weather.jpg')",
        'about': "url('img/about.jpeg')",
        'casino': "url('img/caaas.jpg')",
       
      }
    },
  },
  plugins: [],
}
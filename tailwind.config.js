/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {



      backgroundImage: {
        
        'logo': "url('/img/shreelogo.png')",
        'pattern-bg': "url('/img/pattern-bg.png')",



      },
    },
  },
  plugins: [],
}
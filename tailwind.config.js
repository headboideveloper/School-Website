/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        'image-dim':'inset 0 0 0 1000px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}


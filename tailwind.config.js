/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'saria': ['Saira Extra Condensed', 'sans-serif']
      },
    },
  },
  plugins: [],
}
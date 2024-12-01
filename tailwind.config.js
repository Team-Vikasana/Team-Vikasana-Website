/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tacticsans: ['"TacticSans-Blk"', 'sans-serif'],
        altone: ['"Altone-Reg"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
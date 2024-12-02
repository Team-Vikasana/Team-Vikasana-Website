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
        altone: ['"Altone-Reg"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        "loop-scroll": "loop-scroll 100s linear infinite",
        "reverse-loop-scroll": "reverse-loop-scroll 100s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }, // Move the whole set of cards to the left by 50%
        },
        "reverse-loop-scroll": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0%)" }, // Move the whole set of cards to the right
        },
      },
      transitionProperty: {
        "animation-play-state": "animation-play-state",
      }
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities(
      {
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '8px',
          height: '6px',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#5f5f5f',
          borderRadius: '10px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#d9d9d9',
          borderRadius: '10px',
          transition: 'all 0.3s ease',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#d9d9d9ab'
        },
      },
      ['responsive', 'hover'] // Add responsive and hover variants
    );
  },
],
}

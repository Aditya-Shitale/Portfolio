/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      fontFamily:{
        burtons: "burtons",
      },
      variants: {
        animation: ["motion-safe"]
    },
    screens: {
      'tablet': '1018px',
    }
    
    },
  },
  plugins: [],
}

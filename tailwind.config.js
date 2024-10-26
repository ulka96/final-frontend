/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens: {
    sm: "393px",
    md: "834px",
    lg: "1440px"
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'], 
  },
  plugins: [],
}

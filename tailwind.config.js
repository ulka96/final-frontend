/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        scrollRight: 'scrollRight 10s linear infinite',
      },
    },
  },
  screens: {
    sm: "393px",
    md: "834px",
    lg: "1440px"
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'], 
  },


  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Webkit browsers */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', /* For Firefox */
          '&::-webkit-scrollbar': {
            display: 'none' /* Safari and Chrome */
          }
        }
      })
    }
  ],
}

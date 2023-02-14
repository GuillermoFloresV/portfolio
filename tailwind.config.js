const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Quicksand': ['Quicksand', ...defaultTheme.fontFamily.sans],
      }, 
      'animation': {
        text: "text 5s ease infinite",
        star : "star 3s linear infinite"
      },
      'keyframes': {
        text: {
          '0%, 100%': {
            'background-size': '200%,200%',
            'background-position': 'left center'
                },
          '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
          },
          star: {
            '0%' : {
              'transform' : 'translateX(var(--startingX)) translateY(var(--startingY)) rotate(235deg)',
              'opacity': '50%'
            },
            '70%' : {
              'opacity' : '100%'
            },
            '100%' : {
              'transform' : 'translateX(var(--endingX)) translateY(var(--endingY)) rotate(235deg)',
              'opacity' : '0%'
            }
          }
        }
    },
  },
  plugins: [],
}

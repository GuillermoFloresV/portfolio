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
        "text": "text 5s ease infinite"
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size': '200%,200%',
            'background-position': 'left center'
                },
          '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
          },
        }
    },
  },
  plugins: [],
}

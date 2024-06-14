/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree'],
        roboto: ['Roboto'],
      },
      colors: {
        primary: '#DD2750',
        secondary: '#1F1F2B',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}


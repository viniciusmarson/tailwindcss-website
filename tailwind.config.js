/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    colors: {
      'white': '#ffffff',
      'blue-light': '#8EC2F2',
      'blue': '#23A6F0',
      'blue-dark': '#252B42',
    }
  },
  plugins: [],
}


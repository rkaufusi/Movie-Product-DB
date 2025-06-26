/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Components/**/*.razor',
    './Pages/**/*.razor',
    './Shared/**/*.razor',
    './*.cshtml'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"]
  }
}
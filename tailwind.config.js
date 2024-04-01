/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('src/assets/bg-3.jpg')",
        'smoke': "url('src/assets/gif-smoke.gif')",
      },
    },
  },
  plugins: []
}

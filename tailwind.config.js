/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "home": "url('/assets/bg-3.jpg')",
        "smoke": "url('/assets/gif-smoke.gif')"
      })
    }
  },
  plugins: []
}

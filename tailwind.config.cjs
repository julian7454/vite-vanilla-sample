/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      screens: {
        "2xl": "1920px",
      },
    },
    extend: {
      screens: {
        mobile: { max: "744px" },
        'md': '745px',
      },
    },
  },
  plugins: [],
}

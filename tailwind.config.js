/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["_site/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        secondary: {
          light: "#CCCDCE",
          DEFAULT: "#142745",
        },
        accent: {
          light: "#A2E0D1",
          DEFAULT: "#46C1A4",
        },
      },
    },
  },
  plugins: [],
};

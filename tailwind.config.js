/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#50C878',
          light: '#81E6D9',
          dark: '#2C7A7B'
        }
      }
    },
  },
  plugins: [],
}

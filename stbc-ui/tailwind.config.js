/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'dark-green': "#002626",
        'midnight-green': '#0E4749',
        'alabaster': '#EFE7DA'
      }
    },
  },
  plugins: [],
}


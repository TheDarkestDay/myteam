/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    fontFamily: {
      body: ['Livvic', 'system-ui', 'sans-serif'],
    },
    colors: {
      white: "#ffffff",
      primaryDark: "#014e56",
      primaryLight: "#f67e7e",
      secondaryDarkText: "#002529",
      secondaryBlue: "#79c8c7",
    },
    extend: {
      padding: {
        frameY: "8vw",
        frameX: "4vw",
      }
    },
  },
  plugins: [],
}

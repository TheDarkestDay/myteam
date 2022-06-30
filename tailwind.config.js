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
      primaryLight: "#f67e7e"
    },
    extend: {},
  },
  plugins: [],
}

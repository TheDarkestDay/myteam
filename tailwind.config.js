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
    extend: {
      colors:  {
        white: "#ffffff",
        primaryDark: "#014e56",
        primaryLight: "#f67e7e",
        secondaryDarkText: "#002529",
        secondaryBlue: "#79c8c7",
        secondaryDarkDecoration: "#012f34",
        secondaryDarkBlue: "#2c6269",
        secondaryDeepGreen: "#004047",
      },
      width: {
        '89.5': '22.375rem',
      },
      padding: {
        frameY: "8vw",
        frameX: "4vw",
      },
      backgroundImage: {
        'icon-people': "url('/src/assets/icon-people.svg')",
        'icon-process': "url('/src/assets/icon-process.svg')",
        'icon-analytics': "url('/src/assets/icon-analytics.svg')",
        'icon-tick': "url('/src/assets/icon-tick.svg')",
        'graphics-intro-bottom': "url('/src/assets/graphics-intro-bottom.svg')",
        'graphics-intro-left': "url('/src/assets/graphics-intro-left.svg')",
        'graphics-cta': "url('/src/assets/graphics-cta.svg')",
      }
    },
  },
  plugins: [],
}

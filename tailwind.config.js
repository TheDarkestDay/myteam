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
      spacing: {
        '22': '5.5rem',
        '25': '6.25rem',
        '27': '6.75rem',
        '35': '8.75rem',
        '41': '10.25rem',
        '65': '16.25rem',
      },
      gridTemplateColumns: {
        'clientsGrid': 'repeat(auto-fit, minmax(180px, 1fr))'
      },
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
        '12.5': '3.125rem',
        '89.5': '22.375rem',
        '50': '12.5rem',
        '34.25': '8.5625rem',
        '25': '6.25rem',
        '111.25': '27.8125rem',
        '1/3-gap-7': 'calc((100% - 3.5rem) / 3)',
        '1/3-gap-8': 'calc((100% - 4rem) / 3)',
        '1/2-gap-8': 'calc((100% - 2rem) / 2)',
        '1/5-gap-20': 'calc((100% - 20rem) / 5)',
        '1/5-gap-10': 'calc((100% - 10rem) / 5)',
      },
      flexBasis: {
        '135': '33.75rem',
      },
      height: {
        '25': '6.25rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '61': '15.25rem',
      },
      maxWidth: {
        '89.5': '22.375rem',
      },
      padding: {
        frameY: "8vw",
        frameX: "4vw",
        '21': '5.25rem',
      },
      backgroundImage: {
        'icon-people': "url('/src/assets/icon-people.svg')",
        'icon-process': "url('/src/assets/icon-process.svg')",
        'icon-analytics': "url('/src/assets/icon-analytics.svg')",
        'icon-menu': 'url("/src/assets/icon-menu.svg")',
        'icon-quote': "url('/src/assets/icon-quote.svg')",
        'icon-close': 'url("/src/assets/icon-close.svg")',
        'graphics-intro-bottom': "url('/src/assets/graphics-intro-bottom.svg')",
        'graphics-intro-left': "url('/src/assets/graphics-intro-left.svg')",
        'graphics-cta': "url('/src/assets/graphics-cta.svg')",
        'graphics-side-menu': "url('/src/assets/graphics-side-menu.svg')",
        'graphics-features': "url('/src/assets/graphics-features.svg')",
        'graphics-about': "url('/src/assets/graphics-about.svg')",
        'graphics-clients': "url('/src/assets/graphics-clients.svg')",
        'graphics-contact-bottom': "url('/src/assets/graphics-contact-bottom.svg')",
        'graphics-contact-top': "url('/src/assets/graphics-contact-top.svg')",
        'graphics-members-bottom': "url('/src/assets/graphics-members-bottom.svg')",
        'graphics-members-top': "url('/src/assets/graphics-members-top.svg')",
        'graphics-testimonials-bottom': "url('/src/assets/graphics-testimonials-bottom.svg')",
        'graphics-testimonials-top': "url('/src/assets/graphics-testimonials-top.svg')",
      }
    },
  },
  plugins: [],
}

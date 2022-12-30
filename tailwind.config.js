/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./{index.html,app.js}"],
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '200px' 
    },
    extend: {
      colors: {
        dee: {
          black: '#1D2123',
          mobile_menu_black: '#1A1E1F',
          hero: '#609EAF',
          play: '#FACD66',
          text: '#A4C7C6'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('assets/icons/hero_wavy_lines.svg')",
        'hero-pattern': "url('assets/icons/hero_wavy_lines.svg')",
      },
      dropShadow: {
        'dee': '-3.4px 0px 3.4px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
  prefix: "tw-"
}

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
          hero: '#609EAF'
        }
      }
    },
  },
  plugins: [],
  prefix: "tw-"
}

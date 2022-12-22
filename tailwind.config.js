/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./{index.html,app.js}"],
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        dee: {
          black: '#1D2123'
        }
      }
    },
  },
  plugins: [],
  prefix: "tw-"
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./{index.html,app.js}"],
  content: ["./index.html"],
  theme: {
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
        'background_1': "url('/assets/icons/background_1.svg')",
        'background_2': "url('/assets/icons/background_2.svg')",
        'background_3': "url('/assets/icons/background_3.svg')",
        'background_4': "url('/assets/icons/background_4.svg')",
        'background_5': "url('/assets/icons/background_5.svg')",
        'background_6': "url('/assets/icons/background_6.svg')",
        'background_7': "url('/assets/icons/background_7.svg')",
        'background_8': "url('/assets/icons/background_8.svg')",
        'background_9': "url('/assets/icons/background_9.svg')",
        'background_10': "url('/assets/icons/background_10.svg)",
        'background_11': "url('/assets/icons/background_11.svg')",
        'background_hero_wavy': "url('./assets/icons/background_hero_wavy_lines.svg')",
        'background_1_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_1.svg')",
        'background_2_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_2.svg')",
        'background_3_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_3.svg')",
        'background_4_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_4.svg')",
        'background_5_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_5.svg')",
        'background_6_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_6.svg')",
        'background_7_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_7.svg')",
        'background_8_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_8.svg')",
        'background_9_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_9.svg')",
        'background_10_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_10.svg')",
        'background_11_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_11.svg')",
        'background_9.2_overlay': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1) 60%), url('/assets/icons/background_9.svg')",
        'background_hero_wavy_overlay': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url('/assets/icons/background_hero_wavy.svg')"
      },
      dropShadow: {
        'dee': '-3.4px 0px 3.4px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
  prefix: "tw-"
}

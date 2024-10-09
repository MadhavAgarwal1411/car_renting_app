/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app//*.{js,jsx,ts,tsx}", "./components//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LeagueSpartanBlack:["LeagueSpartanBlack","sans serif"],
        LeagueSpartanBold:["LeagueSpartanBold","sans serif"],
        LeagueSpartanExtraBold:["LeagueSpartanExtraBold","sans serif"],
        LeagueSpartanExtraLight:["LeagueSpartanExtraLight","sans serif"],
        LeagueSpartanLight:["LeagueSpartanLight","sans serif"],
        LeagueSpartanMedium:["LeagueSpartanMedium","sans serif"],
        LeagueSpartanRegular:["LeagueSpartanRegular","sans serif"],
        LeagueSpartanSemiBold:["LeagueSpartanSemiBold","sans serif"],
        LeagueSpartanThin:["LeagueSpartanThin","sans serif"],

      }
    },
  },
  plugins: [],
}


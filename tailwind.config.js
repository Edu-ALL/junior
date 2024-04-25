/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/assets/images/hero-section/background.png')",
      },
      colors: {
        // primary: "#120FFD",
        // secondary: "#243872",
        // yellow: "#F4EA0F",
        purple: "#6C6CF6",
        red: "#FF2063",
      },
      fontFamily: {
        primary: ["NeverMindRounded", "Wix Madefor Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};

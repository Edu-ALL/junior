/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/assets/images/decor/background.webp')",
        "background-form": "url('/public/assets/images/get-in-touch/background.webp')",
      },
      colors: {
        // primary: "#120FFD",
        // secondary: "#243872",
        // yellow: "#F4EA0F",
        purple: "#6C6CF6",
        red: "#FF2063",
        yellow: "#FF9600",
        green: "#4CC1A0",
        dark: "#0D0D0D",
        blue: "#00A3FF",
      },
      fontFamily: {
        primary: ["NeverMindRounded", "Wix Madefor Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};

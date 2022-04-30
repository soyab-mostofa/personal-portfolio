module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Lato",
        mono: "Josefin Slab",
      },
      colors: {
        "dark-primary": "#242424",
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#3485F7",
      "navy-blue": "#001529",
      "blue-dark": "#284E91",
      orange: "#FF7D0A",
      "purple-light": "#EBEBFF",
      white: "#FFFFFF",
      "gray-light": "#E6E6E6",
      "gray-dark": "#7D7D7D",
    },
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
      serif: ["Source Sans Pro", "serif"],
    },
  },
  plugins: [],
};

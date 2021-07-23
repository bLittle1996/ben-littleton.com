module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      text: "#4a4a4a",
      "off-white": "#fafafa",
      accent: {
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#F7FCFF",
        300: "#C7E7FC",
        400: "#96D2FA",
        500: "#66BDF7",
        600: "#36A8F4",
        700: "#0C92EB",
        800: "#0A74BA",
        900: "#07568A",
      },
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};

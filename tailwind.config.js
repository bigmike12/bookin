module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto Mono", "monospace"],
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "monospace"],
      },
      width: {
        600: "600px", // add custom width w-600
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
};

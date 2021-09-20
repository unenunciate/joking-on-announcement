module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        "maximum-red": "#D62828",
        "purssian-blue": "#003049",
        orange: "#F77F00",
        "maximum-yellow": "#FCBF49",
        "lemon-meringue": "#EAE2B7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

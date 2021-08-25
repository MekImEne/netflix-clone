module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient( rgb(0, 0, 0, 0.6), rgb(0, 0, 0, 0.9)), url('/bg.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

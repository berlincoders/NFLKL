module.exports = {
  mode:'jit', // just in time
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

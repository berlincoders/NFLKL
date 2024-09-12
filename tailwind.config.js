module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#003366', // Example hex value, adjust as needed
        'green-200': '#c0d6c0', // Example hex value, adjust as needed
        'black': '#000000', // Example hex value, adjust as needed
        'purple-300': '#c4a0d1', // Example hex value, adjust as needed
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

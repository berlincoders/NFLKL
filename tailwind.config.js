module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // This will include all files inside your src folder
  ],
  theme: {
    extend: {
      colors: {
        'orange-200': '#f9d3b4',
        'gray-900': '#212426',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

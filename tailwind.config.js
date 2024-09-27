module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#003366', // Example hex value, adjust as needed
        'green-200': '#c0d6c0', // Example hex value, adjust as needed
        'black': '#000000', // Example hex value, adjust as needed
        'purple-300': '#c4a0d1', // Example hex value, adjust as needed
        'chiefs-red': '#E31837', // The Kansas City Chiefs colors HEX codes are #E31837 for red
        'chiefs-gold': '#FFB81C',
        'cowboys-blue': '#003594', // For royal blue
        'giants-blue': '#0B2265',  // 0B2265 for dark blue Giants
        'chargers-blue': '#0080C6', // For powder blue
        'browns-brown': '#311D00', // 311D00 for dark brown
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
};

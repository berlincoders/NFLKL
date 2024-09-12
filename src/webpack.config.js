module.exports = {
  // ... other configuration options
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',  // This processes your TailwindCSS directives
        ],
      },
      // ... other rules
    ],
  },
  // ... other configuration options
};

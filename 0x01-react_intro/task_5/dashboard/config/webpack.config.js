const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set the mode to 'development'
  entry: path.resolve(__dirname, 'task_5/dashboard/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'task_5/dashboard/dist'),
    clean: true, // Ensure the output directory is cleaned before each build
  },
  devtool: 'inline-source-map', // Enables source mapping for better debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'task_5/dashboard/dist'), // Serve content from the 'dist' directory
    },
    hot: true,
    open: true, // Automatically opens the browser
    port: 8080, // Specify the port number (optional)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // Skip optimizations during development
              disable: true, // Disable image optimization during development
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'task_5/dashboard/dist/index.html'), // Updated template path
    }),
  ],
};

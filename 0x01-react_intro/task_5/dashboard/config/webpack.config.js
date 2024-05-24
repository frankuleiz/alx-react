const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Ensure the output directory is cleaned before each build
  },
  devtool: 'inline-source-map', // Enables source mapping for better debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
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
        type: 'asset/resource',
        use: [
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
      template: path.resolve(__dirname, 'dist/index.html'),
    }),
  ],
};

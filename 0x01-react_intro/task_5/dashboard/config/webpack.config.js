const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    hot: true,
    open: false, // Set to false to avoid the 'Not supported' error
    port: 8564,
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
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
};

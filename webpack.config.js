const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.module\.css$/, // Pour les fichiers CSS modulaire
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // Active les modules CSS
            },
          },
        ],
      },
      {
        test: /\.css$/, // Pour les fichiers CSS normaux
        exclude: /\.module\.css$/, // Exclut les fichiers CSS modulaire
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
    open: true,
  },
  mode: 'development',
};

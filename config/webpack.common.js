const path  =  require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),
  entry: {
    'app': './scripts/app.js',
    'lib': './scripts/lib.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'scripts/[name].bundle.js'
  },
  resolve: {
    alias: {
      jquery: '../node_modules/jquery/src/jquery.js',
      loadash: '../node_modules/lodash/lodash.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};

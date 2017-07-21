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
    path: path.resolve(process.cwd(), 'dist/'),
    filename: 'scripts/[name].bundle.js',
    publicPath: '/'
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
      },
      {
        test: /\.html$/,
        use: ['html-loader']
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
    new CleanWebpackPlugin([path.resolve(process.cwd(), 'dist/')])
  ]
};

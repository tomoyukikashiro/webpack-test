const path  =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: './scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'scripts/bundle.js'
  },
  resolve: {
    alias: {
      jquery: '../node_modules/jquery/src/jquery.js'
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  devtool: 'cheap-module-source-map'
}

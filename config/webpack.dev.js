const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');


module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  devtool: 'cheap-module-eval-source-map'
});

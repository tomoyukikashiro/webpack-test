const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');


module.exports = Merge(CommonConfig, {
  module: {
    rules: [
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  devtool: 'cheap-module-eval-source-map'
});

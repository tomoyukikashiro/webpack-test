const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');


module.exports = Merge(CommonConfig, {
  output: {
    filename: 'scripts/[name].[chunkhash].bundle.js'
  },
  module: {
    rules: [
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=[path][name].[hash].[ext]'
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map'
});
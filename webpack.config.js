const path  =  require('path');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: './scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'bundle.js'
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
      }
    ]
  },
  devtool: 'cheap-module-source-map'
}

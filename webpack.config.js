const path  =  require('path');

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
  devtool: 'cheap-module-source-map'
}

const path  =  require('path');

module.exports = {
  entry: './scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: {
      jquery: '../node_modules/jquery/src/jquery.js'
    }
  }
}

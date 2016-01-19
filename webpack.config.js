var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: {
    filename: 'dw-tools-web.js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: []
};

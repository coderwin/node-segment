var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    index: ['./lib/Segment.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'segment.js',
    library: 'segment',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.txt$/,
        loader: 'raw'
      }
    ]
  }
};
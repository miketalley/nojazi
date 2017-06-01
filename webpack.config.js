const  path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./js/ClientApp.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;

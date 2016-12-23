//@flow
'use strict';
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const merge = require('webpack-merge');
const config = require('./base');

module.exports = merge.smart({
  devtool: 'inline-source-map',
  plugin: [
    new HotModuleReplacementPlugin()
  ],
  entry: {
    app: ['webpack-dev-server/client?http://localhost:8080/']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot']
      }
    ]
  }
}, config);
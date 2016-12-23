//@flow
'use strict';

const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const merge = require('webpack-merge');

const config = require('./base');

module.exports = merge.smart({
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    marked: 'marked',
    classnames: 'classnames'
  },
  devtool: 'source-map',
  plugins: [
    new UglifyPlugin({minimize: true}),
    new DefinePlugin({
      'process.env': {
        NDOE_ENV: JSON.stringify('production')
      }
    })
  ]
}, config);
//@flow
'use strict';

const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    marked: 'marked'
  },
  plugins: [
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new AggressiveMergingPlugin(),
    new ExtractTextPlugin('app.css', {allChunks: true})
  ],
  entry: {
    app: ['./assets/js/app']
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: './',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    fallback: ['node_modules']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['style', 'css', 'style'])
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc.yml'
  }
};
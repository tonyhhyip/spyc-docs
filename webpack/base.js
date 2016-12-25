//@flow
'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
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
    path: `${__dirname}/../public`,
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
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc.yml'
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: ['./assets/js', 'node_modules']
  },
};
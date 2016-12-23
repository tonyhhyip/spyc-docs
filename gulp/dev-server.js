//@flow
'use strict';

const {writeFile} = require('fs');
const gulp = require('gulp');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../webpack/development');

gulp.task('dev:server', () => {
  const compile = webpack(config);
  compile.plugin('done', stats => writeFile('./webpack.json', JSON.stringify(stats.toJson('verbose'))));
  const server = new WebpackDevServer(compile, {hot: true, contentBase: './public'});
  server.listen(8080);
});
// Karma configuration

const webpackConfig = require('./webpack/development');

webpackConfig.externals = {
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'assets/js/**/*.spec.js'
    ],

    preprocessors: {
      'assets/js/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ],

    babelPreprocessor: {
      options: {
        presets: ['es2015', 'react'],
        plugins: ['transform-flow-strip-types']
      }
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
  });
};

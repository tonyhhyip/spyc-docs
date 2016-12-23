//@flow
'use strict';

const gulp = require('gulp');

gulp.task('watch:html', () => gulp.watch(['./assets/html/**/*.html'], ['html']));
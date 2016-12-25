//@flow
'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');

gulp.task('html', () => {
  return gulp.src('./assets/html/**/*')
    .on('error', log)
    .pipe(gulp.dest('public'));
});
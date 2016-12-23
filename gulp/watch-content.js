//@flow
'use strict';

const gulp = require('gulp');

gulp.task('watch:content', () => gulp.watch(['./assets/content/**/*.md'], ['content']));
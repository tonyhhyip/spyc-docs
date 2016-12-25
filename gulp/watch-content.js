//@flow
'use strict';

const gulp = require('gulp');

gulp.task('watch:content', () => gulp.watch(['./docs/**/*.md'], ['content']));
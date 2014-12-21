'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var cssSrc = ['art.scss'];
gulp.task('styles', function () {
    return gulp.src(cssSrc)
        .pipe(sass())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['styles']);

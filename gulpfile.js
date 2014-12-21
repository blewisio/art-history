'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat')
    livereload = require('gulp-livereload'),
    node;

// var cssSrc = ['static/normalize.css', 'static/font-awesome.min.css', 'static/foundation/css/foundation.min.css', 'static/site.css'];
// var minifyCss = require('gulp-minify-css');
// gulp.task('styles', function () {
//     return gulp.src(cssSrc)
//         .pipe(concat('styles.css'))
//         .pipe(minifyCss())
//         .pipe(rename({ suffix: '.min'}))
//         .pipe(gulp.dest('static/'))
//         .pipe(livereload(server));
// });

var serverSrc = 'server.js';
gulp.task('server', function () {
    console.log('Restarting server...');
    if (node) node.kill();
    node = spawn('node', [serverSrc], {stdio: 'inherit'});
    console.log('Server restarted.');
    node.on('close', function (code) {
        if (code === 8) console.log('err'); // ???
    });
});

gulp.task('default', ['server'], function () {
    server.listen(35279, function (err) {
        if (err) {
            return console.log(err);
        }

        // gulp.watch(jadeSrc, ['templates']);
        // gulp.watch(cssSrc, ['styles']);
        gulp.watch(serverSrc, ['server']);
        process.on('exit', function () {
            if (node) node.kill();
        });
    });
});

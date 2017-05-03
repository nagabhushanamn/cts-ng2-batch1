'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');

gulp.task('transpile', function () {
    return gulp.src(['./**/*.js', '!./node_modules/**/*.js', '!./js-level1/**/*.js', '!./js-level2/**/*.js']).pipe(babel({
        presets: ['es2015']
    })).pipe(gulp.dest('dist'));
});

// gulp.task('browserify', function () {
//     return browserify(['dist/app.js']).bundle()
//     .pipe(gulp.dest("dest"));
// })


gulp.task('default', ['transpile']);
'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json', 'gulpfile.js', 'icons/*', 'js/*', 'static/*'];
var xpiName = 'hijrahdate.xpi';

gulp.task('default', function () {
  gulp.src('./**')
    .pipe(zip(xpiName))
    .pipe(gulp.dest('.'));
});
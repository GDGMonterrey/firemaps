var gulp        = require('gulp'),
    coffee      = require('gulp-coffee'),
    jade        = require('gulp-jade'),
    less        = require('gulp-less');

gulp.task('transpile-jade', function(){
  return gulp.src("app/jade/index.jade")
    .pipe(jade())
    .pipe(gulp.dest('build/'))
});

gulp.task('transpile-less', function(){
  return gulp.src("app/less/map.less")
    .pipe(less())
    .pipe(gulp.dest('build/css'))
});

gulp.task('transpile-coffee', function(){
  return gulp.src("app/coffee/map.coffee")
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['transpile-jade', 'transpile-less', 'transpile-coffee']);
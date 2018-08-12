var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
  return gulp.src('src/app/views/*.html')
        .pipe(pug())
        .pipe(gulp.dest('dest/html'))
});

gulp.task('css', function(){
  return gulp.src('src/app/styles/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dest/css'))
});

gulp.task('js', function(){
  return gulp.src('src/app/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dest/js'))
});

gulp.task('default', [ 'html', 'css', 'js' ]);
// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// Style Dependencies
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// User browserify to compile JS file
gulp.task('js', function() {
  return gulp.src('client/js/app.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('js-watch', ['js'], browserSync.reload);

// Use SASS
gulp.task('sass', function() {
  return gulp.src('client/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({cascade: true}))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream());
});

// Copy index.html over
gulp.task('html', function() {
  return gulp.src('client/index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('html-watch', ['html'], browserSync.reload);

// Copy images over
gulp.task('img', function() {
  return gulp.src('client/img/**')
    .pipe(gulp.dest('./public/img'));
});

// Minification for build
gulp.task('minify', ['sass'], function() {
  return gulp.src('public/main.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build'));
});

// Uglificiation for build
gulp.task('uglify', ['js'], function() {
  return gulp.src('public/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('build'));
});

// Main tasks associated with Gulpfile: Build, Watch, and Default
gulp.task('build', ['uglify', 'minify']);

gulp.task('watch', function() {
  browserSync.init({
    server: './public'
  });

  gulp.watch('client/index.html', ['html-watch']);
  gulp.watch('client/**/*.js', ['js-watch']);
  gulp.watch('client/**/*.scss', ['sass']);
});

gulp.task('default', ['html','js','sass','img','watch']);

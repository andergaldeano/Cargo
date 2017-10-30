var gulp = require('gulp');
var sass = require('gulp-sass');
var inline = require('gulp-inline-source');

gulp.task('css', function() {
  return gulp.src('./styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('inject', function() {
  return gulp.src('index.html')
    .pipe(inline())
    .pipe(gulp.dest('./build/'));
});

gulp.task('css:watch', function() {
  gulp.watch('./styles/*.scss', ['css','inject']);
});

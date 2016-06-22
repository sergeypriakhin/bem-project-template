var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('scripts', function() {
  return gulp.src('app/scripts/app.js')
    .pipe($.browserify({debug: true}))
    .pipe($.uglify()) 
    .pipe(gulp.dest('dist/assets/scripts')) 
    .pipe($.connect.reload());
});
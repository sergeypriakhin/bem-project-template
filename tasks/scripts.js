import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'gulp-browserify';
import uglify from 'gulp-uglify';
import connect from 'gulp-connect';

gulp.task('scripts', () => {
  return gulp.src('app/scripts/app.js')
    .pipe(babel())
    .pipe(browserify({debug: true}))
    .pipe(uglify()) 
    .pipe(gulp.dest('dist/assets/scripts')) 
    .pipe(connect.reload());
});
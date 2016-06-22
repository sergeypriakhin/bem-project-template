var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
    $ = require('gulp-load-plugins')();

gulp.task('styles', function(){
  return gulp.src('app/styles/app.styl')
  	.pipe(sourcemaps.init())
    .pipe($.stylus({
    	compress: true,
        'include css': true
    }))
    .pipe($.rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/styles/'))
    .pipe($.connect.reload()); // перезагрузка сервера
});
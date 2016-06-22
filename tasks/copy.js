var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); 

gulp.task('copy', function() {
	return gulp.src('app/public/**')
	.pipe(gulp.dest('dist/assets'))
	.pipe($.connect.reload()); // перезагрузка сервера
});
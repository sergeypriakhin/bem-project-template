import gulp from 'gulp';
import connect from 'gulp-connect'; 

gulp.task('copy', () => {
	return gulp.src('app/public/fonts')
	.pipe(gulp.dest('dist/assets/fonts'))
	.pipe(connect.reload()); // перезагрузка сервера
});
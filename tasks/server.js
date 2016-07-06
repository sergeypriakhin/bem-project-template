import gulp from 'gulp';
import connect from 'gulp-connect';

gulp.task('server', ['watch'], () => {
	connect.server({
    	root: 'dist', // корневая папка для сервера
    	port: 3000, // порт сервера
    	livereload: true // автоматический перезапуск
  	})
});
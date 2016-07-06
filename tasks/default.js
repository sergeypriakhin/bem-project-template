import gulp from 'gulp';

// gulp build (вторым параметром в массив передаются задачи которые запускаются перед выполнением данной задачи)
gulp.task('build', ['server']);

// Команда по умолчанию, то что будет происходить если написать просто gulp
// gulp.task('default', ['build']);
gulp.task('default', ['clean'], () => {
    gulp.run('build');
});
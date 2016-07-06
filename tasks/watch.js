import gulp from 'gulp';


gulp.task('watch', ['templates', 'styles-sass', 'copy', 'scripts', 'images'], () => {

  gulp.watch('app/pages/*.jade', ['templates']);
  gulp.watch('app/blocks/**/*.jade', ['templates']);
  gulp.watch('app/partials/*.jade', ['templates']);

  gulp.watch('app/styles/*.scss', ['styles-sass']);
  gulp.watch('app/styles/**/*.scss', ['styles-sass']);
  gulp.watch('app/blocks/**/*.scss', ['styles-sass']);

  gulp.watch('app/public/**/*', ['copy']);

  gulp.watch('app/scripts/*.js', () => {
  	gulp.run('scripts');
  });

  gulp.watch('app/public/images/*', ['images']);

});
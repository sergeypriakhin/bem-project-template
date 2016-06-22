var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('watch', ['templates', 'styles-sass', 'copy', 'scripts'], function() {

  gulp.watch('app/pages/*.jade', ['templates']);
  gulp.watch('app/blocks/**/*.jade', ['templates']);
  gulp.watch('app/partials/*.jade', ['templates']);

  gulp.watch('app/styles/*.scss', ['styles-sass']);
  gulp.watch('app/styles/**/*.scss', ['styles-sass']);
  gulp.watch('app/blocks/**/*.scss', ['styles-sass']);

  gulp.watch('app/public/**/*', ['copy']);

  gulp.watch('app/scripts/*.js', ['scripts']);

});
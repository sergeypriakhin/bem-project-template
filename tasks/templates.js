'use strict';

import gulp from 'gulp';
import getData from 'jade-get-data';
import cached from 'gulp-cached';
import jade from 'gulp-jade';
import connect from 'gulp-connect';

const data = {
	getData: getData('app/data'),
	jv0: 'javascript:void(0);',
	timestamp: Date.now()
};

gulp.task('templates', ['clean'], () => {
  return gulp.src('app/pages/*.jade')
    .pipe(jade({basedir: 'app', data}))
    .pipe(gulp.dest('dist')) 
    .pipe(connect.reload());
});
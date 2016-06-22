var gulp = require('gulp'),
	getData = require('jade-get-data'),
	cached = require('gulp-cached'),
    $ = require('gulp-load-plugins')();

var data = {
	getData: getData('app/data'),
	jv0: 'javascript:void(0);',
	timestamp: Date.now()
};

gulp.task('templates', function(){
  return gulp.src('app/pages/*.jade')
    .pipe($.jade({basedir: 'app', data}))
    .pipe(gulp.dest('dist')) 
    .pipe($.connect.reload());
});
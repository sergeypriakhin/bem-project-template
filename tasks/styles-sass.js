'use strict';

var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	globImporter = require('sass-glob-importer'),
    autoprefixer = require('gulp-autoprefixer'),
    sassLint = require('gulp-sass-lint'),
    $ = require('gulp-load-plugins')();

gulp.task('styles-sass', function(){
  return gulp.src('app/styles/app.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
  	.pipe(sourcemaps.init())
    .pipe($.sass({ importer: globImporter() }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
    .pipe($.rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/styles/'))
    .pipe($.connect.reload()); // перезагрузка сервера
});
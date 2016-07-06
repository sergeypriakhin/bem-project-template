'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import globImporter from 'sass-glob-importer';
import autoprefixer from 'gulp-autoprefixer';
import sassLint from 'gulp-sass-lint';
import rename from 'gulp-rename';
import connect from 'gulp-connect';

gulp.task('styles-sass', () => {
  return gulp.src('app/styles/app.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
  	.pipe(sourcemaps.init())
    .pipe(sass({ importer: globImporter() }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/styles/'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/styles/'))
    .pipe(connect.reload()); // перезагрузка сервера
});
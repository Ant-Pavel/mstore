"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var bs = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

gulp.task('style', ()=> {
	gulp.src('styles/less/style.less').
	pipe(plumber()).
	pipe(less()).
	pipe(postcss([
		autoprefixer({
			browsers: ['last 2 versions']
		}),
		mqpacker({
			sort: true
		})
		])).
	pipe(gulp.dest('styles/css')).
	pipe(minify()).
	pipe(rename('style.min.css')).
	pipe(gulp.dest('styles/css')).
	pipe(bs.stream());
});

gulp.task('serve', ['style'], ()=> {
	bs.init({
		server: '.'
	});

	gulp.watch("styles/less/*.less", ["style"]);
	gulp.watch('*.html').on('change', bs.reload);
});

gulp.task('imagemin', ()=> {
	return gulp.src("images/**/.*{png,img,gif}").
	pipe(imagemin([
			imagemin.optipng({optimizationLevel:5}),
			imagemin.jpegtran({progressive: true})
		])).
	pipe(gulp.dest('img'));
});
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var assets  = require('postcss-assets');
var img64 = require('gulp-img64');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('scss/style.scss')
	.pipe(sass({
		outputStyle: 'expanded'
	}))
	.pipe(postcss([
		autoprefixer({
			browsers: ['> 0%']
		}),
		assets({
			loadPaths: ['app/img']
		})
	]))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('jade', function(){
	return gulp.src('*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('img64', function () {
	gulp.src('app/*.html')
		.pipe(img64())
		.pipe(gulp.dest('app'));
});

gulp.task('watch', ['browserSync', 'sass', 'jade', 'img64'], function(){
	gulp.watch('**/*.scss', ['sass']);
	gulp.watch('**/*.jade', ['jade', 'img64']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app',
			index: "index.html"
		},
	})
});
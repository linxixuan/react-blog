var path = require('path'),
	nodemon = require('gulp-nodemon');

var gulp = require('gulp'),
    watch = require('gulp-watch'),
	runSequence = require('run-sequence'),
	gutil = require('gulp-util'),
    browsersync = require('browser-sync').create(),
	webpack = require('webpack');

/**
 * bundle react.js into a index.js
 */
gulp.task('bundle', function(callback) {
    var config = require(path.resolve('./webpack.config.js'))(false);

	webpack(config, function (err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		//gutil.log("[webpack]", stats.toString({}));
		callback();
	});
});

/**
 * browsersync
 */
gulp.task('browsersync', function () {
    browsersync.init({
        port: 3888,
        ui: {
            port: 3777
        }
    });
});

/*
 * auto pack jsx
 */
gulp.task('dev', function (callback) {
    return watch('client/**/*.jsx', function() {
        runSequence('build', browsersync.reload);
    });
});

/**
 * write built index.js to index.html
 */
gulp.task('build', ['bundle'], function () {
	return gulp.src('./client/src/index.html')
		.pipe(gulp.dest('./static/html'));
});

/**
 * create server
 */
gulp.task('serve', function () {
	nodemon({
		nodeArgs: ['--harmony'],
		script: 'server/app.js'
	});
});

gulp.task('default', function () {
    runSequence('build', 'browsersync', ['dev', 'serve']);
});

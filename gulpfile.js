var path = require('path'),
	nodemon = require('gulp-nodemon');

var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	gutil = require('gulp-util'),
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
 * write built index.js to index.html
 */
gulp.task('build', ['bundle'], function () {
	gulp.src('./client/src/index.html')
		.pipe(gulp.dest('./static/html'));
});

/**
 * create server
 */
gulp.task('serve', function () {
	nodemon({
		args: ['--harmony', 'server/app.js'],
	});
});

gulp.task('default', function () {
	runSequence(['build', 'serve']);
});

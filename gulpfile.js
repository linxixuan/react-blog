var path = require('path'),
    nodemon = require('gulp-nodemon');

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    minifyCss = require('gulp-minify-css');
    uglify = require('gulp-uglify'),
    hash = require('gulp-hash'),
    rename = require('gulp-rename'),
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
 * compile sass
 */
gulp.task('sass', function () {
    gulp.src('./client/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/css'))
        .pipe(browsersync.stream());
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
    watch('client/**/*.js*', function() {
        runSequence('build', browsersync.reload);
    });

    watch('client/sass/**/*.scss', function () {
        runSequence('sass');
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

/**
 * compress js
 */
gulp.task('jscompress', function() {
    return gulp.src('./static/js/app.js')
    .pipe(uglify())
    .pipe(rename(function(path) {
        path.extname = ".min.js"
    }))
    .pipe(gulp.dest('./static/js'));
});

/**
 * compress css
 */
gulp.task('csscompress', function() {
    return gulp.src('./static/css/base.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename(function(path) {
        path.extname = ".min.css"
    }))
    .pipe(gulp.dest('./static/css'));
});

/**
 * deploy
 */
gulp.task('deploy', function() {
    // 获取md5
    // 修改html内容
    runSequence(['jscompress', 'csscompress']);
});

gulp.task('default', function () {
    runSequence('build', 'browsersync', ['sass', 'dev', 'serve']);
});

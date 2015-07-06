'use strict';

var webpackStream = require('webpack-stream');
var webpackTask = require('./webpack-task.js');

module.exports = function(gulp) {
    gulp.task('webpack', ['clean'], function() {
		webpackTask(false, webpackStream, gulp);
    });
};

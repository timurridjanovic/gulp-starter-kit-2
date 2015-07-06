'use strict';

var config = require('../config.js');
var protractor = require('gulp-angular-protractor');
var gutil = require('gulp-util');

module.exports = function(gulp) {
	gulp.task('e2e', function(callback) {
		gulp.src([config.e2e])
			.pipe(protractor({
				'configFile': config.e2eConfig,
				'args': ['--verbose', true],
				'autoStartStopServer': true,
				'debug': true
			}))
			.on('error', function(err) {
				if (err) gutil.log('error in e2e task');
				process.exit(-1);
			})
			.on('end', callback);
	});
};

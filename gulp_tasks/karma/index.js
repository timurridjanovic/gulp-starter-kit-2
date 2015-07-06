'use strict';

var karma = require('gulp-karma');
var gutil = require('gulp-util');

module.exports = function(gulp) {
	gulp.task('test', function() {
		return gulp.src([])
			.pipe(karma({
				configFile: 'karma.config.js',
				action: 'run'
			}))
			.on('error', function(err) {
				if (err) gutil.log(err);
			});
	});
}

'use strict';

var kssTask = require('./kss-task.js');

module.exports = function(gulp) {
	gulp.task('kss', ['sass'], function() {
		kssTask(gulp);
	});
};

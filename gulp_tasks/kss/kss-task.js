'use strict';

var livereload = require('gulp-livereload');
var config = require('../config.js');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

var copyCss = function(gulp) {
	gulp.src(config.kssCssSrc)
		.pipe(gulp.dest(config.kssCssDest))
		.on('end', function() {
			livereload.reload();
		});
};

module.exports = function(gulp) {
	var child = spawn('node_modules/kss/bin/kss-node', ['--config=gulp_tasks/kss/kss-node.json'], {
		cwd: process.cwd()
	});

	var stderr = '';
	var stdout = '';

	child.stdout.setEncoding('utf8');
	child.stdout.on('data', function(data) {
		stdout += data;
		gutil.log(data);
	});

	child.stderr.setEncoding('utf8');
	child.stderr.on('data', function(data) {
		stderr += data;
		gutil.log(gutil.colors.red(data));
		gutil.beep();
	});

	child.on('close', function(code) {
		gutil.log('Done with exit code', code);
		copyCss(gulp);
	});
};

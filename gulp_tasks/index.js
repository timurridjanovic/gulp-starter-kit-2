'use strict';

var gulp = require('gulp');

module.exports = function() {
    gulp.task('default', ['sass', 'kss', 'webpack']);
	require('./clean')(gulp);
	require('./sass')(gulp);
	require('./webpack')(gulp);
	require('./uncache')(gulp);
	require('./watch')(gulp);
	require('./karma')(gulp);
	require('./protractor')(gulp);
	require('./kss')(gulp);
};

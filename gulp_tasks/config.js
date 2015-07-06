'use strict';

var path = require('path');
var dir = path.resolve(__dirname, '..');

var config = {
    sass: path.join(dir, '/public/scss/**/*.scss'),
    webpack: path.join(dir, '/public/js/**/*.js'),
	dev: {
		jsEntry: path.join(dir, '/public/js/main.js')
	},
    build: {
        css: path.join(dir, '/build/css/'),
		js: path.join(dir, '/build/js')
    },
	bundleName: 'bundle.js',
	templateSrc: path.join(dir, '/views/**/*.hbs'),
	templateDest: path.join(dir, '/build/views/'),
	templateLayoutSrc: path.join(dir, '/views/layout.hbs'),
	e2e: path.join(dir, '/e2e/tests/**/*.js'),
	e2eConfig: path.join(dir, '/e2e/protractor.config.js'),
	kssCssSrc: path.join(dir, '/build/css/style.css'),
	kssCssDest: path.join(dir, '/styleguide/public/')
};

module.exports = config;

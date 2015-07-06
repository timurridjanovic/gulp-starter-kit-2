
exports.config = {
	'seleniumServerJar': '../bin/selenium/selenium-server-standalone-2.45.0.jar',

	'specs': ['./tests/**/*-spec.js'],

	'capabilities': {
		'browserName': 'phantomjs',
		'phantomjs.binary.path': require('phantomjs').path,
		'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
	},

	'framework': 'jasmine',

	'baseUrl': 'http://localhost:3000',

	'jasmineNodeOpts': {
		'showColors': true,
		'defaultTimeoutInterval': 30000
	},

	'onPrepare': function() {
		browser.ignoreSynchronization = true;
	}

};

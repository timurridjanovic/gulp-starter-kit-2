'use strict';

var angular = require('angular');

module.exports = function() {
	angular.module('about', [require('angular-ui-router')])
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('about', {
					url: '/about',
					template: require('./template.html'),
					controller: require('./about-ctrl.js'),
					controllerAs: 'ctrl'
				});
		}]);
};

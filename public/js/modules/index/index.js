'use strict';

var angular = require('angular');

module.exports = function() {
	angular.module('cpsApp', ['about', require('angular-ui-router')])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('index', {
					url: '/',
					template: require('./template.html'),
					controller: require('./index-ctrl.js'),
					controllerAs: 'ctrl'
				});
		}]);
};

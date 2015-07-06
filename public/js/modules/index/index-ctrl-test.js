'use strict';

var IndexCtrl = require('./index-ctrl.js');

describe('Testing index controller', function() {
	describe('$scope.name', function() {
		it('should be equal to John Smith', function() {
			expect(new IndexCtrl().name).toBe('John Smith');
		});
	});
});

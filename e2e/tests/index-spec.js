'use strict';

describe('Testing index page', function() {
	describe('changing name in input box', function() {
		beforeEach(function() {
			browser.get('/');
			var input = element(by.model('ctrl.name'));
			input.clear();
			input.sendKeys('George Miller');
		});

		it('should update the heading', function() {
			var el = element(by.binding('ctrl.name'));
			expect(el.getText()).toBe('Hello George Miller');
		});
	});
});

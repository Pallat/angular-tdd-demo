describe('fizzbuzz', function() {
	var service;
	beforeEach(module('fizzbuzz'));
	beforeEach(inject(function($injector) {
		service = $injector.get('fizzbuzzService');
	}));
	it('should be 1 when put 1', function() {
		var fb = service.fizzbuzz(1);
		expect('1').toBe(fb);
	});
	it('should be 2 when put 2', function() {
		var fb = service.fizzbuzz(2);
		expect('2').toBe(fb);
	});
	it('should be fizz when put 3', function() {
		var fb = service.fizzbuzz(3);
		expect('fizz').toBe(fb);
	});
	it('should be buzz when put 5', function() {
		var fb = service.fizzbuzz(5);
		expect('buzz').toBe(fb);
	});
	it('should be fizzbuzz when put 15', function() {
		var fb = service.fizzbuzz(15);
		expect('fizzbuzz').toBe(fb);
	});

});
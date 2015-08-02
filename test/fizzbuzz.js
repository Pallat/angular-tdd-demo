angular.module('fizzbuzz',[])
	.service('fizzbuzzService', function() {
		var service = this;
		service.fizzbuzz = function(numb) {
			var result = '';
			if (isFizz(numb)) {
				result = 'fizz';
			}
			if (isBuzz(numb)) {
				result += 'buzz';
			}
			if (result === '') {
				return numb+'';
			}

			return result;
		};

		function isFizz(numb) {
			return numb%3 ===0;
		}
		function isBuzz(numb) {
			return numb%5 ===0;
		}
});
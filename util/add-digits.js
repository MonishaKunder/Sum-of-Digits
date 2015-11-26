'use strict'
module.exports = function(number,callback) {
	if (isNaN(number) || number.toString().indexOf('.') != -1)
		return callback('Invalid Input');
	let sumOfDigits = 0;
	while (number > 0) {
		sumOfDigits += number % 10;
		number = parseInt(number / 10);
	}
	
	return callback(null,sumOfDigits);
}
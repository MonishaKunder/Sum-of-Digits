'use strict'
module.exports=function(number) {
	if (isNaN(number) || number.toString().indexOf('.') != -1)
		return 0;
	let sumOfDigits = 0;
	while (number > 0) {
		sumOfDigits += number % 10;
		number=parseInt(number / 10);
	}
	
	return sumOfDigits;
}
module.exports=function(number){
	if(isNaN(number))
		return 0;
	var sumOfDigits=0;
	while(number>0){
		sumOfDigits+=number%10;
		number=parseInt(number/10)
		
	}
	return sumOfDigits;
}
var addDigits = require("./app/add-digits.js");
var addToDb=require("./app/add-to-db.js")

var num=parseInt(process.argv[2])
var sum=addDigits(num)

var obj={
    number:num,
    sum:sum,
    timeStamp:Date.now()
} 
addToDb(obj,function(err,doc){
	if(err)
		console.log(err)
	else
		console.log(doc)
})

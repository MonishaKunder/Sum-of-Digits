var addDigits = require("./app/add-digits.js");
var addToDb=require("./app/add-to-db.js")

var sum=addDigits(process.argv[2])
var obj={
    number:process.argv[2],
    sum:sum,
    timeStamp:Date.now()
} 
addToDb(obj,function(err,doc){
	if(err)
		console.log(err)
	else
		console.log(doc)
})

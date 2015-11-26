"use strict"
var addDigits = require('./util/add-digits.js');
var addToDb=require('./util/add-to-db.js')

let num=Number(process.argv[2])
let sum=addDigits(num)

let obj={
    number:num,
    sum:sum,
    timeStamp:Date.now()
} 

addToDb(obj,function(err,doc) {
	if (err)
		console.log(err)
	else
		console.log(doc)
})


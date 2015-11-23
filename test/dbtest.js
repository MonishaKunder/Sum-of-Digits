var expect    = require("chai").expect;
var addToDb=require("../app/add-to-db.js")
var connection=require("../connection.js");

describe("DB connection", function(done) {
  it("Check whether database connection is successful",function(){
  	connection('mongodb://localhost:27017/test',function(err,db) {
      expect(err).to.equal(null)
      db.close()
      done();
    })
  })
});

describe("DB insertion", function() {
  it("Check whether the \'addToDb\' is a function", function() {
    expect(typeof addToDb).to.equal('function')
  })

  it("Check whether the data is stored in DB", function() {
    var obj={
      number:123,
      sum:6,
      timeStamp:Date.now()
    }
    addToDb(obj,function(err,doc){
      expect(err).to.equal(null)
      expect(doc.number).to.equal(obj.number)
      expect(doc.sum).to.equal(obj.sum)
      expect(doc.timeStamp).to.equal(obj.timeStamp)
      
    })
  });

  it("Shouldn't store the data if number,sum or timeStamp is not there", function(done) {
    var obj={
      number:123,
      sum:6
    }
    addToDb(obj,function(err,doc){
      expect(err).not.equal(null)
      done();
    })
  });

  after(function(){
    connection('mongodb://localhost:27017/test',function(err,db){
      db.collection('numbers').remove({},function(err,doc){
        db.close()
      });
    })
  })

});


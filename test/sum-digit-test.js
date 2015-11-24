var expect    = require("chai").expect;
var addDigits = require("../app/add-digits.js");
describe("Finding sum of digits",function() {

  it("Check whether the \'add-digits\' is a function", function() {
    expect(typeof addDigits).to.equal('function');
  });

  it("Find sum of digits", function() {
    var val=addDigits(123)
    console.log(val)
    expect(val).to.equal(6);
  });
  
  it("Sum should be zero if input is string", function() {
    var val=addDigits('hi')
    expect(val).to.equal(0);
  });

  it("Sum should be zero if input is special characters", function() {
    var val=addDigits('&%$#@')
    expect(val).to.equal(0);
  });

  it("Sum should be zero if input is floating point number", function() {
    var val=addDigits(12.3)
    expect(val).to.equal(0);
  });

});
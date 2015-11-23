var expect    = require("chai").expect;
var addDigits = require("../app/add-digits.js");
describe("Finding sum of digits",function() {

  it("Check whether the \'add-digits\' is a function", function() {
    expect(typeof addDigits).to.equal('function');
  });

  it("Find sum of digits", function() {
    var val=addDigits(123)
    expect(val).to.equal(6);
  });
  
  it("Sum should be zero for any input other than number", function() {
    var val=addDigits('hi')
    expect(val).to.equal(0);
  });

});
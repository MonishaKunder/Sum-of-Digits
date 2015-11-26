'use strict'
var expect    = require('chai').expect;
var addDigits = require('../util/add-digits.js');
describe('Finding sum of digits',function() {
  it('Check whether the \'add-digits\' is a function', function() {
    expect(typeof addDigits).to.equal('function');
  });

  it('Find sum of digits', function() {
    let val=addDigits(123)
    expect(val).to.equal(6);
  });
  
  it("Sum should be zero if input is string", function() {
    let val=addDigits('hi')
    expect(val).to.equal(0);
  });

  it("Sum should be zero if input is special characters", function() {
    let val=addDigits('&%$#@')
    expect(val).to.equal(0);
  });

  
  it('Sum should be zero for any input other than number', function() {
    let val=addDigits(12.3)
    expect(val).to.equal(0);
  });

});
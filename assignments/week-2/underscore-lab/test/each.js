var expect = require('chai').expect;
var each   = require('../methods/each.js')

describe('each()', function() {
  var myTestArray = [1,2,3];

  it('returns the array passed as the first argument', function() {
    expect(each(myTestArray, function(){})).to.equal(myTestArray);
  });

  // write more tests here for the function named "each". 
});
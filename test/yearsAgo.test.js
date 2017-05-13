const assert = require("assert")
const yearsAgo = require("../yearsAgo")

describe("yearsAgo.js", function(){
  it("should return 'results' when given 'ago1.getFullYear()-ago2.getFullYear()'", function(){
    assert.equal(yearsAgo('2016-11-11', '1994-04-03'), 22)
   });
});

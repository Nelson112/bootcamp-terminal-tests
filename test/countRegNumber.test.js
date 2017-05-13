const assert = require("assert")
const countRegNumber = require("../countRegNumber")


describe('countRegNumber.js', function () {
  it("should return 'control.length' when given 'countRegNumber'" , function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
  });

})

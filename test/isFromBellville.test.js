const assert = require("assert")
const isFromBellville = require("../isFromBellville")

describe('isFromBellville.js', function () {
  it ("it should return 'location' when given startsWisth('CY')" , function(){
    assert.equal(isFromBellville('CY'), true);
  });

})

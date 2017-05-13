const assert = require("assert")
const regCheck = require("../regCheck")

describe('regCheck.js', function() {
  it("it should return 'regCheck' when given 'regNr.endsWith(location)'", function(){
    assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
});
});

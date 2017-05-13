const assert = require("assert")
const countAllPaarl = require("../countAllPaarl")

describe("countAllPaarl.js", function(){
  it("should return 'countPaarl.length' when given 'regNum[i].startsWith('CJ')'", function(){
    assert.equal(countAllPaarl("CJ 3625, CA 4615, DR 12 TY GP, CJ 5636, DRT 122 L"), 2)
  });
});

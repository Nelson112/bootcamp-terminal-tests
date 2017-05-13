const assert = require("assert")
const isWeekDay = require("../isWeekDay")


describe('isWeekDay.js', function() {
  it("it should return 'dayDetails' when given !day.startsWith('S')", function() {
    assert.equal(isWeekDay('Monday'), true);

  });
});

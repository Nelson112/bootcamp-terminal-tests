const assert = require("assert")
const greetFunct = require("../greet")

describe('greet.js', function () {
  it("it should return 'Hello, Janine' when given Janine", function(){
    assert.equal('Hello, Janine', greetFunct('Janine'));
  });

}); 

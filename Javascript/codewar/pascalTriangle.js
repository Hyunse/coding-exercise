// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

function pascalsTriangle(n) {
  var pascalTriangle = [],
      result= [];
  
  for (var i = 0; i < n; i++) { 
    pascalTriangle[i] = new Array(i+1);
    
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
      result.push(pascalTriangle[i][j]);
    }
  }
  
  return result;
}

// pascalsTriangle(1) = [1];
// pascalsTriangle(2) = [1,1,1];
// pascalsTriangle(3) = [1,1,1,1,2,1];

console.log(pascalsTriangle(3));
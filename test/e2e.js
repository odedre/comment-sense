const test = require('tape')
import cs from '../src'
test('should support comment style // ', function (t) {
  t.plan(1)
  var testCase = `
    //identity function
    function firstTest(x) {
      return x;
    }
  `
  let result = cs(testCase)

  console.log(testCase)
})

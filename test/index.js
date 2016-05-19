/**
 * Imports
 */

var borderStyles = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(borderStyles.indexOf('solid') !== -1)
  t.end()
})

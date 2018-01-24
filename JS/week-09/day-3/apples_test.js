'use strict';

let test = require('tape');
let apple = require('./apples');

function CheckString(actual, expected, callback) {
  this.actual = callback(actual);
  this.expected = expected;
  this.testFun = test('test name', function(t) {
    t.equal(actual, expected);
    t.end();
  });
};

let myTest = new CheckString('banana', 'banana', apple);

///////
// test('check string', function(t) {
//   let actual = apple('Apple');
//   let expected = 'Apple';

//   t.equal(actual, expected);
//   t.end();
// });

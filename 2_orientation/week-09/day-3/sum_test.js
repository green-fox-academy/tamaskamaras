'use strict';

let test = require('tape');
let sum = require('./sum.js');

test('four element', function(t) {
  let actual = sum([9, 5, 2]);
  let expected = 16;

  t.equal(actual, expected);
  t.end();
  
});

test('empty', function(t) {
  let actual = sum([]);
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('one element', function(t) {
  let actual = sum([1]);
  let expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('null', function(t) {
  let actual = sum(0);
  let expected = 'The input is not an array!';

  t.equal(actual, expected);
  t.end();
});

test('string', function(t) {
  let actual = sum('Hello');
  let expected = 'The input is not an array!';

  t.equal(actual, expected);
  t.end();
});

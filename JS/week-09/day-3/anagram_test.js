'use strict';

let test = require('tape');
let anagram = require('./anagram');

test('same length', function(t) {
  t.ok(anagram('listen', 'silent'));
  t.end();
});

test('one more letter', function(t) {
  t.notOk(anagram('listen', 'silents'));
  t.end();
});

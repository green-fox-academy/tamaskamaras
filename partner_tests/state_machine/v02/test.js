'use strict';

const test = require('tape');
const app = require('./index');

let pete = new app.Child('Pete');

test('give snack', (t) => {
  let actual = app.stateMachine.callToKindergarten(pete);
  let expected = `Pete's state transited from "playing" to "hiding"`;
  
  t.equal(actual, expected);
  t.end();
});

test('call to eat / fail', (t) => {
  let actual = app.stateMachine.callToEat(pete);
  let expected = `Cannot transition from "hiding" with "call to eat"`;

  t.equal(actual, expected);
  t.end();
});

test('call to eat', (t) => {
  pete.state = 'playing';
  let actual = app.stateMachine.callToEat(pete);
  let expected = `Pete\'s state transited from "playing" to "eating"`;

  t.equal(actual, expected);
  t.end();
});

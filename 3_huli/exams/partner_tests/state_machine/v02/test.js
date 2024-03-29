'use strict';

const test = require('tape');
const app = require('./index_refactor');

let pete = new app.Child('Pete');

test('call to kindergarten from playing', (t) => {
  let actual = pete.callToKindergarten();
  let expected = `Pete's state transited from "playing" to "hiding".`;
  
  t.equal(actual, expected);
  t.end();
});

test('call to kindergarten from eating', (t) => {
  let actual = pete.callToKindergarten('eating');
  let expected = `Pete's state transited from "eating" to "hiding".`;
  
  t.equal(actual, expected);
  t.end();
});

test('call to kindergarten from hiding', (t) => {
  let actual = pete.callToKindergarten('hiding');
  let expected = `Pete's state transited from "hiding" to "hiding".`;
  
  t.equal(actual, expected);
  t.end();
});

test('call to play from playing', (t) => {
  let actual = pete.callToPlay('playing');
  let expected = `Cannot transit from "playing" with "call to play".`;

  t.equal(actual, expected);
  t.end();
});

test('call to play from eating', (t) => {
  let actual = pete.callToPlay('eating');
  let expected = `Pete's state transited from "eating" to "playing".`;

  t.equal(actual, expected);
  t.end();
});

test('call to play from hiding', (t) => {
  let actual = pete.callToPlay('hiding');
  let expected = `Pete's state transited from "hiding" to "playing".`;

  t.equal(actual, expected);
  t.end();
});

test('call to eat from playing', (t) => {
  let actual = pete.callToEat('playing');
  let expected = `Pete's state transited from "playing" to "eating".`;

  t.equal(actual, expected);
  t.end();
});

test('call to eat from eating', (t) => {
  let actual = pete.callToEat('eating');
  let expected = `Cannot transit from "eating" with "call to eat".`;

  t.equal(actual, expected);
  t.end();
});

test('call to eat from hiding', (t) => {
  let actual = pete.callToEat('hiding');
  let expected = `Cannot transit from "hiding" with "call to eat".`;

  t.equal(actual, expected);
  t.end();
});

test('give snack', (t) => {
  let actual = app.giveSnack();
  let expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('give snack in hiding', (t) => {
  let actual = app.giveSnack(pete, 'hiding');
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('consume snack', (t) => {
  let actual = app.consumeSnacks();
  let expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('consume snack in eating', (t) => {
  let actual = app.consumeSnacks(pete, 'eating');
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('consume snack in hiding', (t) => {
  let actual = app.consumeSnacks(pete, 'hiding');
  let expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('raise mood', (t) => {
  let actual = app.raiseMood();
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('raise mood at every snack', (t) => {
  let actual = app.raiseMood(pete, 1);
  let expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('raise mood at every 3. snacks', (t) => {
  let actual = app.raiseMood(pete, 3);
  let expected = 2;

  t.equal(actual, expected);
  t.end();
});

test('raise mood at every 5. snacks', (t) => {
  let actual = app.raiseMood(pete, 5);
  let expected = 4;

  t.equal(actual, expected);
  t.end();
});

test('raise mood at every 15. snacks', (t) => {
  let actual = app.raiseMood(pete, 15);
  let expected = 8;

  t.equal(actual, expected);
  t.end();
});

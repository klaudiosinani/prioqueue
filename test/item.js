'use strict';
const test = require('ava');
const {Item} = require('../.');

test('priority', t => {
  const item = new Item(10, 'A');
  t.is(item.priority, 10);
});

test('value', t => {
  const item = new Item(10, 'A');
  t.is(item.value, 'A');
  item.value = 'B';
  t.is(item.value, 'B');
});

test('toPair', t => {
  const item = new Item(10, 'A');
  t.deepEqual(item.toPair(), [10, 'A']);
});

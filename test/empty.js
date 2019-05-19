'use strict';
const test = require('ava');
const {Queue} = require('../.');

const queue = new Queue();

test('size', t => {
  t.is(queue.size, 0);
});

test('clear', t => {
  t.deepEqual(queue.clear(), queue);
});

test('dequeue', t => {
  t.is(queue.dequeue(), undefined);
});

test('forEach', t => {
  const array = [];
  queue.forEach(x => array.push(x));
  t.deepEqual(array, []);
});

test('includes', t => {
  t.false(queue.includes('A'));
});

test('isEmpty', t => {
  t.true(queue.isEmpty());
});

test('peek', t => {
  t.is(queue.peek(), undefined);
});

test('peekPriority', t => {
  t.is(queue.peekPriority(), undefined);
});

test('peekValue', t => {
  t.is(queue.peekValue(), undefined);
});

test('priorities', t => {
  t.deepEqual(queue.priorities(), []);
});

test('search', t => {
  t.is(queue.search('A'), undefined);
});

test('toArray', t => {
  t.deepEqual(queue.toArray(), []);
});

test('toPairs', t => {
  t.deepEqual(queue.toPairs(), []);
});

test('values', t => {
  t.deepEqual(queue.values(), []);
});

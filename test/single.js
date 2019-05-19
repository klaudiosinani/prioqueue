'use strict';
const test = require('ava');
const {Queue, Item} = require('../.');

const queue = new Queue();

test('enqueue', t => {
  queue.enqueue(15, 'A');
  t.deepEqual(queue.peek(), new Item(15, 'A'));
  t.is(queue.peek().priority, 15);
  t.is(queue.peek().value, 'A');
});

test('size', t => {
  t.is(queue.size, 1);
});

test('clear', t => {
  t.deepEqual(queue.clear(), new Queue());
  t.is(queue.peek(), undefined);
  t.is(queue.size, 0);
});

test('dequeue', t => {
  queue.enqueue(15, 'A');
  t.deepEqual(queue.dequeue(), new Item(15, 'A'));
  t.is(queue.dequeue(), undefined);
  queue.enqueue(15, 'A');
});

test('forEach', t => {
  const array = [];
  queue.forEach(x => array.push(x));
  t.deepEqual(array, [new Item(15, 'A')]);
});

test('includes', t => {
  t.true(queue.includes('A'));
  t.false(queue.includes('B'));
});

test('isEmpty', t => {
  t.false(queue.isEmpty());
});

test('peek', t => {
  t.deepEqual(queue.peek(), new Item(15, 'A'));
});

test('peekPriority', t => {
  t.is(queue.peekPriority(), 15);
});

test('peekValue', t => {
  t.is(queue.peekValue(), 'A');
});

test('priorities', t => {
  t.deepEqual(queue.priorities(), [15]);
});

test('search', t => {
  t.deepEqual(queue.search('A'), new Item(15, 'A'));
});

test('toArray', t => {
  t.deepEqual(queue.toArray(), [new Item(15, 'A')]);
});

test('toPairs', t => {
  t.deepEqual(queue.toPairs(), [[15, 'A']]);
});

test('values', t => {
  t.deepEqual(queue.values(), ['A']);
});

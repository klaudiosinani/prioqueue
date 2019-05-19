'use strict';
const test = require('ava');
const {Queue, Item} = require('../.');

const queue = new Queue();

test('enqueue', t => {
  queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(7, 'D');
  t.deepEqual(queue._queue[0], new Item(15, 'A'));
  t.deepEqual(queue._queue[1], new Item(10, 'B'));
  t.deepEqual(queue._queue[2], new Item(5, 'C'));
  t.deepEqual(queue._queue[3], new Item(7, 'D'));
});

test('toPairs', t => {
  t.deepEqual(queue.toPairs(), [[15, 'A'], [10, 'B'], [5, 'C'], [7, 'D']]);
});

test('size', t => {
  t.is(queue.size, 4);
});

test('clear', t => {
  t.deepEqual(queue.clear(), new Queue());
  t.is(queue.peek(), undefined);
  t.is(queue.size, 0);
});

test('dequeue', t => {
  queue
    .enqueue(15, 'A')
    .enqueue(10, 'B')
    .enqueue(5, 'C')
    .enqueue(7, 'D')
    .enqueue(12, 'E')
    .enqueue(3, 'F')
    .enqueue(1, 'G')
    .enqueue(8, 'H');
  t.deepEqual(queue.dequeue(), new Item(15, 'A'));
  t.deepEqual(queue.size, 7);
  t.deepEqual(queue.toPairs(), [[12, 'E'], [10, 'B'], [5, 'C'], [8, 'H'], [7, 'D'], [3, 'F'], [1, 'G']]);
  t.deepEqual(queue.dequeue(), new Item(12, 'E'));
  t.deepEqual(queue.dequeue(), new Item(10, 'B'));
  t.deepEqual(queue.dequeue(), new Item(8, 'H'));
  t.deepEqual(queue.dequeue(), new Item(7, 'D'));
  t.deepEqual(queue.dequeue(), new Item(5, 'C'));
  t.deepEqual(queue.dequeue(), new Item(3, 'F'));
  t.deepEqual(queue.dequeue(), new Item(1, 'G'));
  t.is(queue.dequeue(), undefined);
  queue.clear().enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(7, 'D');
});

test('forEach', t => {
  const array = [];
  queue.forEach(x => array.push(x));
  t.deepEqual(array, [new Item(15, 'A'), new Item(10, 'B'), new Item(5, 'C'), new Item(7, 'D')]);
});

test('includes', t => {
  t.true(queue.includes('A'));
  t.true(queue.includes('B'));
  t.false(queue.includes('F'));
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
  t.deepEqual(queue.priorities(), [15, 10, 5, 7]);
});

test('search', t => {
  t.deepEqual(queue.search('A'), queue.peek());
  t.deepEqual(queue.search('A'), new Item(15, 'A'));
  t.deepEqual(queue.search('D'), new Item(7, 'D'));
});

test('toArray', t => {
  queue.clear().enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(7, 'D').enqueue(15, 'E');
  t.deepEqual(queue.toArray(), [new Item(15, 'A'), new Item(15, 'E'), new Item(5, 'C'), new Item(7, 'D'), new Item(10, 'B')]);
});

test('values', t => {
  t.deepEqual(queue.values(), ['A', 'E', 'C', 'D', 'B']);
});

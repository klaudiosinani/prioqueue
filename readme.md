<h1 align="center">
  Prioqueue
</h1>

<h4 align="center">
  ⚡ Priority queues for ES6
</h4>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/prioqueue">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/prioqueue.svg?branch=master">
  </a>
  <a href='https://coveralls.io/github/klaussinani/prioqueue?branch=master'>
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/klaussinani/prioqueue/badge.svg?branch=master">
  </a>
</p>

## Description

ES6 implementation of the priority queue data structures with TypeScript support.

Come over to [Twitter](https://twitter.com/klaussinani) to share your thoughts on the project.

Visit the [contributing guidelines](https://github.com/klaussinani/prioqueue/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

## Contents

- [Description](#description)
- [Install](#install)
- [In Depth](#in-depth)
- [Development](#development)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Install

### Yarn

```bash
yarn add prioqueue
```

### NPM

```bash
npm install prioqueue
```

## In Depth

A priority queue is an abstract queue type, similar to a regular queue or stack data structure, but where additionally each item has a `priority` associated with it. In a priority queue, an item with high priority is served before an item with low priority. To improve performance, Prioqueue priority queues use an array implemented binary heap as their backbone, giving `O(log n)` performance for inserts and removals.

## Usage

Prioqueue exposes a chainable API, that can be utilized through a simple and minimal syntax, allowing you to combine methods effectively.

To create a **max-priority queue**, where items are inserted  in the order in which they arrive and the item with the maximum priority value is always served first, we provide as argument to the `Queue` class, on instantiation, a binary comparator function `compareMax(x, y)`, which returns a positive number when the priority of item `x` is greater than the one of item `y`, zero when equal and a negative number when less than.

Accordingly, to create a **min-priority queue**, where items are inserted in the order in which they arrive and the item with the minimum priority value is always served first, a binary comparator function `compareMin(x, y)` must be passed as argument, which returns a positive number when the priority of item `x` is less than the one of item `y`, zero when equal and a negative number when greater than.

By default, if no comparator function is provided on instantiation, a **max-priority queue** instance is returned.

Usage examples can be also found at the [`test`](https://github.com/klaussinani/prioqueue/tree/master/test) directory.

```js
'use strict';
const {Queue, Item} = require('prioqueue');

// Create a max priority queue
const maxQueue = new Queue((x, y) => x.priority - y.priority);
//=> Queue { queue: [] }

maxQueue.enqueue(15, 'A');
//=> Queue { queue: [Item { priority: 15, value: 'A' }] }

maxQueue.peek();
//=> Item { priority: 15, value: 'A' }

const item = new Item(15, 'A');

maxQueue.peek().toPair();
//=> [15, 'A']

maxQueue.peekPriority() === item.priority;
//=> true

maxQueue.peekValue() === item.value;
//=> true

maxQueue.enqueue(10, 'B').enqueue(5, 'C');
//=> Queue { queue: [
// Item { priority: 15, value: 'A' },
// Item { priority: 10, value: 'B' },
// Item { priority: 5, value: 'C' } ] }

maxQueue.includes('A');
//=> true

maxQueue.includes('D');
//=> false

maxQueue.enqueue(7, 'D').enqueue(8, 'E').enqueue(2, 'F');
//=> Queue { queue: [
// Item { priority: 15, value: 'A' },
// Item { priority: 10, value: 'B' },
// Item { priority: 5, value: 'C' },}
// Item { priority: 7, value: 'D' },
// Item { priority: 8, value: 'E' },
// Item { priority: 2, value: 'F' } ] }

maxQueue.search('E');
//=> Item { priority: 8, value: 'E' }

maxQueue.dequeue();
//=> Item { priority: 15, value: 'A' }

maxQueue.dequeue();
//=> Item { priority: 10, value: 'B' }

maxQueue.peek();
//=> Item { priority: 8, value: 'E' },

maxQueue;
//=> Queue { queue: [
// Item { priority: 8, value: 'E' },
// Item { priority: 7, value: 'D' },
// Item { priority: 5, value: 'C' },
// Item { priority: 2, value: 'F' } ] }

maxQueue.values();
//=> [ 'E', 'D', 'C', 'F' ]

maxQueue.toPairs();
//=> [ [ 8, 'E' ], [ 7, 'D' ], [ 5, 'C' ], [ 2, 'F' ] ]
```

## API

The following documentation holds for both max & min priority queues. The below described `queue` instance is used to depict the same methods that are available to both a min and a max priority queue, without overlooking their above described differences and unique qualities.

#### queue.`size`

- Return Type: `Number`

Returns the total number of items residing in the queue.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C');
queue.size;
// => 3
```

#### queue.`clear()`

- Return Type: `Queue`

Mutates the queue by removing all residing items and returns it empty.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C');
//=> Queue { queue: [
// Item { priority: 15, value: 'A' },
// Item { priority: 10, value: 'B' },
// Item { priority: 5, value: 'C' } ] }
queue.size;
//=> 3
queue.clear();
//=> Queue { queue: [] } }
queue.size;
//=> 0
```

#### queue.`dequeue()`

- Return Type: `Item | undefined`

Mutates the queue by removing the front/highest-priority item which is also returned. If the queue is empty then `undefined` is returned.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(8, 'D');
queue.dequeue();
// => Item { priority: 15, value: 'A' }
queue.dequeue();
// => Item { priority: 10, value: 'B' }
queue.dequeue();
// => Item { priority: 8, value: 'D' }
queue.dequeue();
// => Item { priority: 5, value: 'C' }
queue.dequeue();
// => undefined
queue.size;
//=> 0
```

#### queue.`enqueue(priority, value)`

- Return Type: `Queue`

Mutates the queue by inserting a new item and returns the queue itself.

##### **`priority`**

- Type: `Number`

Can be any number that will correspond to the `priority` of the created item. 

##### **`value`**

- Type: `Any`

Can be any value that will stored in the new item.

```js
queue.enqueue(15, 'A');
//=> Queue { queue: [ Item { priority: 15, value: 'A' } ] }
queue.enqueue(10, 'B').enqueue(5, 'C');
//=> Queue { queue: [ 
// Item { priority: 15, value: 'A' },
// Item { priority: 10, value: 'B' },
// Item { priority: 5, value: 'C' } ] }
queue.size;
//=> 3
```

#### queue.`forEach(fn)`

- Return Type: `Queue`

Applies level order traversal (breadth-first traversal) to the binary heap, used internally for implementing the queue, and executes the provided `fn` function on each traversed item without mutating the queue. Returns the queue itself at the end of the traversal.

##### **`fn`**

- Type: `Function`

Unary function to execute on each item.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(8, 'D');
//=> Queue { queue: [
// Item { priority: 15, value: 'A' },
// Item { priority: 10, value: 'B' },
// Item { priority: 5, value: 'C' },}
// Item { priority: 8, value: 'D' } } ]
queue.forEach(item => console.log(item.priority));
//=> 15
//=> 10
//=> 5
//=> 8
```

#### queue.`includes(value)`

- Return Type: `Boolean`

Determines whether the queue includes a item with a certain `value`, returning `true` or `false` as appropriate.

##### **`value`**

- Type: `Any`

Item `value` to search for.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C');
queue.includes('A');
// => true
queue.includes('D');
// => false
queue.includes('C');
// => true
```

#### queue.`isEmpty()`

- Return Type: `Boolean`

Determines whether the queue is empty, returning `true` or `false` as appropriate.

```js
queue.enqueue(10, 'A');
queue.isEmpty();
//=> false
queue.clear().isEmpty();
//=> true
```

#### queue.`peek()`

- Return Type: `Item | undefined`

Returns the front/highest-priority item of the queue.
If the queue is empty `undefined` is returned.

```js
queue.enqueue(10, 'A');
queue.peek();
// => Item { priority: 10, value: 'A' }
```

#### queue.`peekPriority()`

- Return Type: `Number | undefined`

Returns the priority of the front/highest-priority item of the queue.
If the queue is empty `undefined` is returned.

```js
queue.enqueue(10, 'A');
queue.peekPriority();
// => 10
```

#### queue.`peekValue()`

- Return Type: `Any | undefined`

Returns the value of the front/highest-priority item of the queue.
If the queue is empty `undefined` is returned.

```js
queue.enqueue(10, 'A');
queue.peekValue();
// => 'A'
```

#### queue.`priorities()`

- Return Type: `Array<Number>`

Applies level order traversal (breadth-first traversal) to the binary heap, used internally for implementing the queue, and stores the `priority` of each traversed item in an array.
The array is returned at the end of the traversal.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(8, 'D');
//=> [ 15, 10, 5, 8 ]
```

#### queue.`search(value)`

- Return Type: `Item | undefined`

Determines whether the queue includes a item with a certain `value`, returning the targeted item or `undefined` as appropriate.

##### **`value`**

- Type: `Any`

Item `value` to search for.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(8, 'D');
queue.search(10);
// => Item { priority: 10, value: 'B' }
queue.search(5);
// => Item { priority: 5, value: 'C' }
queue.search(25);
// => undefined
```

#### queue.`toArray()`

- Return Type: `Array<Item>`

Applies level order traversal (breadth-first traversal) to the binary heap, used internally for implementing the queue, and stores each traversed item in an array.
The array is returned at the end of the traversal.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(8, 'D');
queue.toArray();
//=> [ 
//  Item { priority: 15, value: 'A' },
//  Item { priority: 10, value: 'B' },
//  Item { priority: 5, value: 'C' },
//  Item { priority: 8, value: 'D' }
// ]
```

#### queue.`toPairs()`

- Return Type: `Array<[Number, Any]>`

Applies level order traversal (breadth-first traversal) to the binary heap, used internally for implementing the queue, and for each traversed item stores in an array an ordered-pair/2-tuple, where the first element is a `number` corresponding to the `priority` of the traversed item, and the last one is a value of type `any`, corresponding to the `value` stored in the traversed item.
The array is returned at the end of the traversal.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(8, 'D');
queue.toPairs();
//=> [ [ 15, 'A' ], [ 10, 'B' ], [ 5, 'C' ], [ 8, 'D' ] ]
```

#### queue.`value()`

- Return Type: `Array<Any>`

Applies level order traversal (breadth-first traversal) to the binary heap, used internally for implementing the queue, and stores the `value` of each traversed item in an array.
The array is returned at the end of the traversal.

```js
queue.enqueue(15, 'A').enqueue(10, 'B').enqueue(5, 'C').enqueue(8, 'D');
//=> [ 'A', 'B', 'C', 'D' ]
```

Also available, along with the `Queue` exposed class, is the `Item` class, mainly useful for testing purposes, since it can be utilized to compare queue items. The class has a priority constructor method, with a `priority` and a `value` parameter, corresponding to the priority and the value stored in the created instance, respectively.

#### item.`priority`

- Return Type: `Number`

The `priority` corresponding to the item instance.

```js
const {Item} = require('prioqueue');

const item = new Item(10, 'A');
// => Item { priority:10, value: 'A' }
item.priority;
//=> 10
```

#### item.`value`

- Return Type: `Any`

The value that the item contains.

```js
const {Item} = require('prioqueue');

const item = new Item(10, 'A');
// => Item { priority: 10, value: 'A' }
item.value;
//=> 'A'
item.value = 'B'
// => Item { priority: 10, value: 'B' }
```

#### item.`toPair()`

- Return Type: `[Number, Any]`

Returns an ordered-pair/2-tuple, where the first element is a number corresponding to the `priority` of the item, and the last one is a value, that can be of any type, corresponding to the `value` stored in the item.

```js
const {Item} = require('prioqueue');

const item = new Item(5, 'B');

item.toPair();
//=> [ 5, 'B' ]
```

## Development

For more info on how to contribute to the project, please read the [contributing guidelines](https://github.com/klaussinani/prioqueue/blob/master/contributing.md).

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd prioqueue`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code and run the tests: `npm test` or `yarn test`

## Related

- [binstree](https://github.com/klaussinani/binstree) - Binary search trees for ES6
- [doublie](https://github.com/klaussinani/doublie) - Doubly circular & linear linked lists for ES6
- [mheap](https://github.com/klaussinani/mheap) - Binary min & max heaps for ES6
- [singlie](https://github.com/klaussinani/singlie) - Singly circular & linear linked lists for ES6

## Team

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)

## License

[MIT](https://github.com/klaussinani/prioqueue/blob/master/license.md)

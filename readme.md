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

ES6 implementation of the priority queue queue structures with TypeScript support.

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

A priority queue is an abstract queue type, similar to a regular queue or stack queue structure, but where additionally each item has a `priority` associated with it. In a priority queue, an item with high priority is served before an item with low priority. To improve performance, Prioqueue priority queues use an array implemented binary heap as their backbone, giving `O(log n)` performance for inserts and removals.

## Usage

Prioqueue exposes a chainable API, that can be utilized through a simple and minimal syntax, allowing you to combine methods effectively.

To create a **max-priority queue**, where items are inserted  in the order in which they arrive and the item with the maximum priority value is always served first, we provide as argument to the `Queue` class, on instantiation, a binary comparator function `compareMax(x, y)`, which returns a positive number when the priority of item `x` is greater than the one of item `y`, zero when equal and a negative number when less than.

Accordingly, to create a **min-priority queue**, where items are inserted in the order in which they arrive and the item with the minimum priority value is always served first, a binary comparator function `compareMin(x, y)` must be passed as argument, which returns a positive number when the priority of item `x` is less than the one of item `y`, zero when equal and a negative number when greater than.

By default, if no comparator function is provided on instantiation, a **max-priority queue** instance is returned.

Usage examples can be also found at the [`test`](https://github.com/klaussinani/prioqueue/master/test) directory.

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

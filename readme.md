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

A priority queue is an abstract data type, similar to a regular queue or stack data structure, but where additionally each item has a `priority` associated with it. In a priority queue, an item with high priority is served before an item with low priority. To improve performance, Prioqueue priority queues use an array implemented binary heap as their backbone, giving `O(log n)` performance for inserts and removals.

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

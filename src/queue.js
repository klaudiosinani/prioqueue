'use strict';

class Queue {
  constructor() {
    this._queue = [];
  }

  get size() {
    return this._queue.length;
  }

  _swap(i, j) {
    [this._queue[i], this._queue[j]] = [this._queue[j], this._queue[i]];
  }

  clear() {
    this._queue = [];
    return this;
  }

  forEach(fn) {
    for (const item of this._queue) {
      fn(item);
    }

    return this;
  }

  isEmpty() {
    return this._queue.length === 0;
  }

  peek() {
    return this._queue[0];
  }

  toPairs() {
    const pairs = [];
    this.forEach(item => pairs.push(item.toPair()));
    return pairs;
  }
}

module.exports = Queue;

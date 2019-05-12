'use strict';

class Queue {
  constructor() {
    this._queue = [];
  }

  get size() {
    return this._queue.length;
  }

  clear() {
    this._queue = [];
    return this;
  }

  isEmpty() {
    return this._queue.length === 0;
  }
}

module.exports = Queue;

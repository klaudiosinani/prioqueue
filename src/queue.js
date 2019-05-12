'use strict';

class Queue {
  constructor() {
    this._queue = [];
  }

  get size() {
    return this._queue.length;
  }

  isEmpty() {
    return this._queue.length === 0;
  }
}

module.exports = Queue;

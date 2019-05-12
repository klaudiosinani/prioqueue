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

  includes(value) {
    for (const item of this._queue) {
      if (item.value === value) {
        return true;
      }
    }

    return false;
  }

  isEmpty() {
    return this._queue.length === 0;
  }

  peek() {
    return this._queue[0];
  }

  priorities() {
    const priorities = [];
    this.forEach(item => priorities.push(item.priority));
    return priorities;
  }

  toArray() {
    const array = [];
    this.forEach(item => array.push(item));
    return array;
  }

  toPairs() {
    const pairs = [];
    this.forEach(item => pairs.push(item.toPair()));
    return pairs;
  }

  values() {
    const values = [];
    this.forEach(item => values.push(item.value));
    return values;
  }
}

module.exports = Queue;

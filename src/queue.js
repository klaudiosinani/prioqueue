'use strict';
const Item = require('./item');

class Queue {
  constructor(comparatorFn) {
    this._queue = [];
    this._comparatorFn = comparatorFn || this._defaultComparatorFn;
  }

  get size() {
    return this._queue.length;
  }

  _bubbleUp(index = this.size - 1) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = this._getParentIndex(currentIndex);

      if (this._compare(currentIndex, parentIndex) <= 0) {
        break;
      }

      this._swapItems(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  _compare(i, j) {
    return this._comparatorFn(this._queue[i], this._queue[j]);
  }

  _defaultComparatorFn(x, y) {
    if (x.priority > y.priority) {
      return 1;
    }

    if (x.priority < y.priority) {
      return -1;
    }

    return 0;
  }

  _getChildIndices(i) {
    const indices = [];
    const left = this._getLeftChildIndex(i);
    const right = this._getRightChildIndex(i);

    if (left < this.size) {
      indices.push(left);

      if (right < this.size) {
        indices.push(right);
      }
    }

    return indices;
  }

  _getChildren(i) {
    return this._getChildIndices(i).map(x => this._queue[x]);
  }

  _getLeftChildIndex(i) {
    return (2 * i) + 1;
  }

  _getMaxPriorityChildIndex(i) {
    const [left, right] = this._getChildIndices(i);

    if (left) {
      if (right && this._compare(right, left) > 0) {
        return right;
      }

      return left;
    }

    return -1;
  }

  _getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  _getRightChildIndex(i) {
    return (2 * i) + 2;
  }

  _isPriorityOrdered(index) {
    const indices = this._getChildIndices(index);

    for (const i in indices) {
      if (this._compare(index, indices[i]) < 0) {
        return false;
      }
    }

    return true;
  }

  _shiftDown(index) {
    let currentIndex = index;

    while (!this._isPriorityOrdered(currentIndex)) {
      const maxPriorityChildIndex = this._getMaxPriorityChildIndex(currentIndex);
      this._swapItems(currentIndex, maxPriorityChildIndex);
      currentIndex = maxPriorityChildIndex;
    }
  }

  _swapItems(i, j) {
    [this._queue[i], this._queue[j]] = [this._queue[j], this._queue[i]];
  }

  clear() {
    this._queue = [];
    return this;
  }

  dequeue() {
    const front = this.peek();
    const last = this._queue.pop();

    if (!this.isEmpty()) {
      this._queue[0] = last;
      this._shiftDown(0);
    }

    return front;
  }

  enqueue(priority, value) {
    const item = new Item(priority, value);
    this._queue.push(item);
    this._bubbleUp();
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

  peekPriority() {
    if (this._queue[0]) {
      return this._queue[0].priority;
    }

    return undefined;
  }

  peekValue() {
    if (this._queue[0]) {
      return this._queue[0].value;
    }

    return undefined;
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

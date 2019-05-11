'use strict';

class Item {
  constructor(priority, value) {
    this._priority = priority;
    this._value = value;
  }

  get priority() {
    return this._priority;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }
}

module.exports = Item;

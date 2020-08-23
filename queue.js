const LinkedList = require("./linked-list")

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this._list = new LinkedList();
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.push(val);
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const val = this._list.shift()
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._list.getAt(0);
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Queue;

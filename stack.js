const LinkedList = require("./linked-list")

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this._list = new LinkedList();
    this.first = this._list.tail;
    this.last = this._list.head;
    this.size = this._list.length;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    this._list.push(val);
    this.first = this._list.tail;
    this.last = this._list.head;
    this.size = this._list.length;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const val = this._list.pop();
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this._list.getAt(this.size - 1);
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Stack;

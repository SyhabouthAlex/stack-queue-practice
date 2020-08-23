class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */
    push(val) {
        if (this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;
            this.length++;
        }
        else {
            this.tail.next = new Node(val);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
            this.length++;
        };
    };

    /** unshift(val): add new value to start of list. */
    unshift(val) {
        if (this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;
            this.length++;
        }
        else {
            this.head.prev = new Node(val);
            this.head.prev.next = this.head;
            this.head = this.head.prev;
            this.length++;
        };
    };

    /** pop(): return & remove last item. */
    pop() {
        if (this.length === 0) {
            throw new Error;
        };
        if (this.length === 1) {
            let temp = this.tail;
            this.head = null;
            this.tail = null;
            temp.prev = null;
            temp.next = null;
            this.length--;
            return temp.val;
        };
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return temp.val;
    };

    /** shift(): return & remove first item. */
    shift() {
        if (this.length === 0) {
            throw new Error;
        };
        if (this.length === 1) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            temp.prev = null;
            temp.next = null;
            this.length--;
            return temp.val;
        };
        let temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        return temp.val;
    };

    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if (idx > this.length - 1 || idx < 0 || this.length === 0) {
            throw new Error;
        };
        let ascending = idx <= this.length / 2;
        let current = ascending ? this.head : this.tail;
        let currentIdx = ascending ? 0 : this.length - 1;
        while(current !== null) {
            if (currentIdx === idx) {
                return current.val;
            };
            ascending ? currentIdx++ : currentIdx--;
            current = ascending ? current.next : current.prev;
        };
    };

    /** setAt(idx, val): set val at idx to val */
    setAt(idx, val) {
        if (idx > this.length - 1 || idx < 0 || this.length === 0) {
            throw new Error;
        };
        let ascending = idx <= this.length / 2;
        let current = ascending ? this.head : this.tail;
        let currentIdx = ascending ? 0 : this.length - 1;
        while(current !== null) {
            if (currentIdx === idx) {
                current.val = val;
                return;
            };
            ascending ? currentIdx++ : currentIdx--;
            current = ascending ? current.next : current.prev;
        };
    };

    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) {
        if (idx > this.length || idx < 0) {
            throw new Error;
        };
        if (idx === 0) {
            this.unshift(val);
            return;
        };
        if (idx === this.length) {
            this.push(val)
            return;
        };
        let ascending = idx <= this.length / 2;
        let current = ascending ? this.head : this.tail;
        let currentIdx = ascending ? 0 : this.length - 1;
        while(current !== null) {
            if (currentIdx === idx) {
                let temp = current.prev;
                current.prev = new Node(val);
                temp.next = current.prev;
                current.prev.next = current;
                current.prev.prev = temp;
                this.length++;
                return;
            };
            ascending ? currentIdx++ : currentIdx--;
            current = ascending ? current.next : current.prev;
        };
    };

    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {
        if (idx > this.length - 1 || idx < 0 || this.length === 0) {
            throw new Error;
        };
        if (idx === 0) {
            this.shift();
            return;
        };
        if (idx === this.length - 1) {
            this.pop()
            return;
        };
        let ascending = idx <= this.length / 2;
        let current = ascending ? this.head : this.tail;
        let currentIdx = ascending ? 0 : this.length - 1;
        while(current !== null) {
            if (currentIdx === idx) {
                let tempPrev = current.prev;
                let tempNext = current.next;
                current.prev = null;
                current.next = null;
                tempPrev.next = tempNext;
                tempNext.prev = tempPrev;
                this.length--;
                return;
            };
            ascending ? currentIdx++ : currentIdx--;
            current = ascending ? current.next : current.prev;
        };
    };

    /** average(): return an average of all values in the list */
    average() {
        if (this.length === 0) {
          return 0;
        };
        let current = this.head;
        let sum = 0;
        let amount = 0;
        while (current !== null) {
          sum += current.val;
          amount++;
          current = current.next;
        }
        return sum / amount;
    };
}

module.exports = LinkedList;
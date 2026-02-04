const LinkedList = require('../linked-list');

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        return this.list.removeFirst();
    }

    peek() {
        if (this.list.head === null) {
            return null;
        }

        return this.list.head.value;
    }

    size() {
        return this.list.size;
    }

    isEmpty() {
        return this.list.size === 0;

    }


}

module.exports = Queue;
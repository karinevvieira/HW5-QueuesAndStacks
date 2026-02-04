const LinkedList = require('../linked-list');

class Stack {
    constructor () {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
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

module.exports = Stack;
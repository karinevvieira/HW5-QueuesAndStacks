// Copy your Linked List Part 4 solution or instructor provided solution as a starting point
const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    print(fn = console.log) {
        let traveler = this.head;
        while(traveler !== null) {
            fn(traveler.value);
            traveler = traveler.next;
        }
    }

    append(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.size++;
            return;
        }

        let traveler = this.head;
        while (traveler.next !== null) {
            traveler = traveler.next;
        }

        traveler.next = node;
        this.size++;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.size++;
            return;
        }

        node.next = this.head;
        this.head = node;
        this.size++;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        let traveler = this.head;

        for (let currentIndex = 0; currentIndex !== index; currentIndex++) {
            traveler = traveler.next;
        }

        return traveler.value;
    }

    find(value) {
        let traveler = this.head;
        let index = 0;

        while (traveler !== null) {
            if (traveler.value === value) {
                return index;
            }

            traveler = traveler.next;
            index++;
        }

        return -1;
    }

    removeFirst() {
        if (this.head === null) {
            return null;
        }

        let removeValue = this.head.value;
        this.head = this.head.next;
        this.size--;

        return removeValue;
    }

    removeLast() {
        if (this.head === null) {
            return null;
        }

        if (this.head.next === null) {
            const removeValue = this.head.value;
            this.head = null;
            this.size--;
            return removeValue;
        }

        let traveler = this.head;
        while (traveler.next.next !== null) {
            traveler = traveler.next;
        }

        const removeValue = traveler.next.value;
        traveler.next = null;
        this.size--;

        return removeValue;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }

        if (index === 0){
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }

        let traveler = this.head;

        for (let currentIndex = 0; currentIndex < index -1; currentIndex++) {
            traveler = traveler.next;
        }

        const node = new Node(value);
        node.next = traveler.next;
        traveler.next = node;
        this.size++;


    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        if (index === 0){
            const removeFirst = this.head.value;
            this.head = this.head.next;
            this.size--;
            return removeFirst;
        }

        let traveler = this.head;

        for (let currentIndex = 0; currentIndex < index -1; currentIndex++) {
            traveler = traveler.next;
        }

        const removeValue = traveler.next.value;
        traveler.next = traveler.next.next;
        this.size--;
        return removeValue;
    }
    
}

module.exports = LinkedList;
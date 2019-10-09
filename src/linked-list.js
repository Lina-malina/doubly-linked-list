const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if(this.isEmpty()) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length ++;
        return this;
    }

    head() {
        return this._head == null ? null : this._head.data;
    }

    tail() {
        return this._tail == null ? null : this._tail.data;
    }

    at(index) {
        let temp = this._head;
        let counter = 0;
        if(index == 0) {
            return temp.data;
        } else {
            while(counter != index) {
                counter++;
                temp = temp.next;
            }
                return temp.data;
        }
    }

    insertAt(index, data) {
        let temp = this._head;
        let counter = 0;
        let node = new Node(data);
        if(this.length == 0) {
            this._head = node;
            this._tail = node;
            this.length++;
        } else {
            if(index == 0) {
                this._head.prev = node;
                node.next = this._head;
                this._head = node;
            } else {
                while(counter != index) {
                    counter++;
                    temp = temp.next;
                }
                    node.next = temp;
                    node.prev = temp.prev;
                    temp.prev.next = node;
                    temp.prev = node;
            }
        }
        return this;
    }

    isEmpty() {
        return this._head == this._tail && this._tail == null;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let temp = this._head;
        let counter = 0;
        if (this.length == 1) {
            this._head = null;
            this._tail = null;
            this.length = 0;
        } else {
            if (index == 0) {
                this._head = temp.next;
                this._head.prev = null;;
            } else {
                while (counter != index) {
                    counter++;
                    temp = temp.next;
                }
                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;
            }
        }
        return this;
    }

    reverse() {
        let temp = this._head;
        let prev = null;
        while(temp) {
            let next = temp.next;
            temp.next = prev;
            temp.prev = next;
            prev = temp;
            temp = next;
        }
        this._tail = this._head;
        this._head = prev; 
        return this;
    }

    indexOf(data) {
        let temp = this._head;
        let counter = 0;

        while (temp) {
            if (temp.data == data) {
                return counter;
            }
            counter++;
            temp = temp.next
        }
        return -1;
    }
}

module.exports = LinkedList;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // >> insert a node to the end of linked list
  push(value) {
    const newNode = new Node(value);
    // check if there is no head currently
    if (!this.head) {
      // the new node becomes the head and the tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length = this.length + 1;
    return this;
  }

  // >> remove a node from the end of linked list
  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length = this.length - 1;

    if (this.length === 0) {
      // this was the only node in the list
      this.head = 0;
      this.tail = 0;
    }
  }

  // >> insert a node at the beginning of the list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length = this.length + 1;
    return this;
  }

  // >> remove a node from the beginning of the list
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length = this.length - 1;

    if (this.length === 0) {
      // this was the only node in the list
      this.head = null;
      this.tail = null;
    }
  }

  // >> return the node at that particular index
  get(index) {
    // there should be a valid index and it should be a number
    if (isNaN(index)) {
      return undefined;
    }

    // index should fall withing the range of the list
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // >> set the value of the node at particular index to the new value
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  // >> insert a new node at a particular index
  insert(index, value) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);

    let newNode = new Node(value);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length = this.length + 1;
    return this;
  }

  // >> remove a node at a particular index
  remove(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let currentNode = prevNode.next;

    prevNode.next = currentNode.next;
    currentNode.next = null;
    this.length = this.length - 1;

    return currentNode;
  }

  // >> reverse a linked list
  reverse() {
    // 1. reverse the head and tail nodes
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push(4);
myLinkedList.push(7);
myLinkedList.push(5);
myLinkedList.push(10);
// console.log(myLinkedList); // 4 -> 7 -> 5 -> 10

console.log("-------------------------");

// myLinkedList.pop();
// myLinkedList.shift();
// console.log(myLinkedList);

console.log(myLinkedList.get(-1)); // undefined
console.log(myLinkedList.get(-20)); // undefined
console.log(myLinkedList.get("hello")); // undefined

// console.log(myLinkedList.get(0));
// console.log(myLinkedList.get(1));
console.log(myLinkedList.get(3));

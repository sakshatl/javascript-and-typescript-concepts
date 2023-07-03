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

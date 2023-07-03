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
}

const myLinkedList = new LinkedList();
myLinkedList.push(4);
myLinkedList.push(7);
console.log(myLinkedList);

console.log("-------------------------");

// myLinkedList.pop();
myLinkedList.shift();
console.log(myLinkedList);

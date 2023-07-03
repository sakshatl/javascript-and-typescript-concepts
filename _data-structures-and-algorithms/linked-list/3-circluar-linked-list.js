class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert a node at the end
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }

    this.length = this.length + 1;
    return this;
  }

  // insert a new node at the beginning
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = newNode;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length = this.length + 1;
    return this;
  }

  insert(value, index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);

    let newNode = new Node(value);
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    // 100 10 20 30
    //      400

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length = this.length + 1;
    return this;
  }

  printList() {
    let result = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result.join(", ");
  }
}

const myCircularLinkedList = new CircularLinkedList();

myCircularLinkedList.push(10);
myCircularLinkedList.push(20);
myCircularLinkedList.push(30);

myCircularLinkedList.unshift(100);

console.log(myCircularLinkedList.printList());

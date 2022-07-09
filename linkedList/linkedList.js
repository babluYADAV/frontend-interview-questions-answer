class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // insert at first node
  InsertAtFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // insert at last node
  InsertAtLast(data) {
    let node = new Node(data);
    let current;
    //if empty make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  //insert at index
  InsertAt(data, index) {
    //index is out of range
    if (index > 0 && index > this.size) {
      return Error("index is out of rnage");
    }
    // if index is zero then make it as header
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }
  //get at index
  GetAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log("At index" + index + ">>> " + current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // remove at index
  RemoveAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // remove first node
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // print all list
  PrintList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  // clear all
  Clear() {
    this.head = null;
    this.size = 0;
  }
  printMiddle() {
    let current = this.head;
    let middle=Math.floor((this.size)/2)
    let count = 0;
    while (current) {
      if (count === middle) {
        console.log("At middle" + middle + ">>> " + current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
}

const ll = new LinkedList();
ll.InsertAtFirst(30);
ll.InsertAtFirst(10);
ll.InsertAtFirst(20);
ll.InsertAtFirst(40);
ll.InsertAtFirst(50);
ll.InsertAtFirst(60);

// ll.InsertAtLast(15,2)
// ll.InsertAt(25, 0);
// ll.GetAt(1);
// ll.RemoveAt(1);
// ll.PrintList();
ll.printMiddle();

let list1 = [1, 2, 4];
let list2 = [1, 3, 5];

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  mergeTwoList(l1, l2) {
    const node = new Node(-Infinity);
    let prev = node;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        prev.next = l1;
        prev = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        prev = l2;
        l2 = l2.next;
      }
    }
    if (!l1) prev.next = l2;
    if (!l2) prev.next = l1;

    return node.next;
  }
}

const ll = new LinkedList();
console.log(ll.mergeTwoList(list1, list2));

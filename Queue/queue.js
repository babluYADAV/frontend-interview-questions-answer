class Queue {
  constructor(data = []) {
    this.data = data;
  }
  Enqueue(data) {
    this.data.unshift(data);
  }
  Dequeue() {
    return this.data.pop();
  }
  printQueue() {
    var str = "";
    for (let i = 0; i < this.data.length; i++) {
      str += this.data[i];
    }
    return str;
  }
  isEmpty() {
    return (this.data.length = 0);
  }
  front() {
    if (this.isEmpty()) {
      return "No Elements in the queue";
    } else {
      return this.data[0];
    }
  }
}
const q = new Queue();
q.Enqueue(20);
q.Enqueue(19);
q.Enqueue(18);
q.Enqueue(17);
console.log(q.printQueue());
q.Dequeue();

console.log(q.printQueue());
//work as fifo

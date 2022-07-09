class Stack {
  constructor(data = []) {
    this.data = data;
  }
  Push(data) {
    return this.data.push(data);
  }
  Pop() {
    if (this.data.length === 0) {
      return "UnderFlow";
    } else {
      return this.data.pop();
    }
  }
  Peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return (this.data.length = 0);
  }
  printStack() {
    var str = "";
    for (let i = 0; i < this.data.length; i++) {
      str += this.data[i];
    }
    return str;
  }
}
const stack = new Stack();
stack.Push(22);
stack.Push(21);
stack.Push(20);
stack.Push(19);
console.log(stack.printStack());
stack.Pop();
console.log(stack.printStack());


// work as filo

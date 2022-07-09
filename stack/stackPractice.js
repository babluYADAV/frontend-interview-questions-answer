class stackPractice {
  constructor() {
    this.data = [];
    this.count = 0;
  }
  push(data) {
    this.data[this.count] = data;
    this.count+=1;
  }

  pop() {
    if (this.count == 0) return undefined;
    let popedItem = this.data[this.count - 1];
    this.count-=1;
    console.log("poped", popedItem);
    return popedItem;
  }
  peek(){
     return this.data[this.count-1]
  }
  isEmpty(){
      if(this.count==0) return "Stack is empty";
      else return "stack is not empty"
  }
  print(){
      let str="";
      for(let i=0;i<this.count;i++){
          str+=this.data[i]+" "
      }
      return str
  }
}
const stack = new stackPractice();
console.log(stack.isEmpty())
stack.push(17);
stack.push(22);
stack.push(18);
console.log(stack.print())
console.log(stack.peek())
stack.pop();
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.print())

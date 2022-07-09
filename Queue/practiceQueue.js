

class PraciceQueue{
    constructor(){
this.items=[];
this.count=0;
    }
    Enqueue(item){
        this.items[this.count]=item;
        this.count++
    }
    Dequeue(){
        if(this.count==0) return undefined;
        let deueueItem=this.items[this.count]
        this.count--
        return deueueItem
    }
    peek(){
        return this.items[0]
    }
    getSize(){
        return this.count
    }
    isEmpty(){
        return this.getSize()===0
    }
    print(){
        let str="";
        for(let i=0; i<this.count; i++){
            str+=this.items[i]+" "
        }
        return str
    }
    
}
const Queue=new PraciceQueue();
console.log(Queue.isEmpty())
console.log(Queue.print())
Queue.Enqueue(17)
Queue.Enqueue(12)
Queue.Enqueue(18)
console.log(Queue.print())
Queue.Dequeue()
console.log(Queue.peek())
console.log(Queue.getSize())
console.log(Queue.isEmpty())
console.log(Queue.print())

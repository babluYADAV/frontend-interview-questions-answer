
const reverseString=(str)=>{
const arr=str.split("")
arr.reverse();
str=arr.join("");
console.log(str)
}
reverseString("Apple")


const revStr=(str)=>{
    let reverse=""
    for(let character of str){
        reverse=character+reverse
    }
    console.log(reverse)
}

revStr("Greeting")
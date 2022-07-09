// // let arr = ["apple", "bannana", "orange", "apple", "orange"];
// let arr = [1, 2, 3, 1, 2, 3, 3, 3, 2, 2, , 4, 1, 1];

// arr = arr.filter(function (item, index, inputArray) {
//   return inputArray.indexOf(item) == index;
// });
// console.log(arr);

// // unique=[... new Set(arr)]
// // console.log(unique)

// // ---------------------
// // Output: ["apple", "bannana", "orange"]

// const input = [2, 3, 3, 4, 5, 2, 6, 3, 6];

// function removeDuplicate(arr) {
//   const result = [];
//   let idx = 0;
//   const tmp = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!tmp[arr[i]]) {
//       console.log(!tmp[arr[i]]);
//       tmp[arr[i]] = 1;
//       result[idx] = arr[i];

//       idx++;
//     }
//   }
//   return result;
// }

// console.log(removeDuplicate(input));

function getUnique(array){
  var uniqueArray = [];
  
  // Loop through array values
  for(var value of array){
      if(uniqueArray.indexOf(value) === -1){
          uniqueArray.push(value);
      }
  }
  return uniqueArray;
}

var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var uniqueNames = getUnique(names);
console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]

const arry = [1, 2, 1, 3, 4,4,3, 5];

const toFind = arr =>{
return arr.filter((item, index) => arr.indexOf(item) !== index)
}
console.log(toFind(arry));



/* Nityam Gosain16:11
console.log(1)
const promise = new Promise((resolve) => {
  console.log(2)
  resolve()
  console.log(3)
})

console.log(4)

promise.then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)

setTimeout(() => {
  console.log(8)
}, 10)

setTimeout(() => {
  console.log(9)
}, 0)
You16:13
1,4,7,5,6,8,9
Nityam Gosain16:17
var foo;
console.log(typeof foo === 'undefined');
console.log(foo == null); 
You16:18
false
false
Nityam Gosain16:21
const initialObj = {
   a : [1,2,3],
   b : [2,3,5],
   c : [1,5],
   d : [2,3,5]
}
{
  1: ["a", "c"],
  2: ["a", "b", "d"],
  3: ["a", "b", "d"],
  5: ["b", "c", "d"]
}
Nityam Gosain16:33
Object.keys(initialObj)
You16:37
const initialObj = {
   a : [1,2,3],
   b : [2,3,5],
   c : [1,5],
   d : [2,3,5]
}
const output={
  1: ["a", "c"],
  2: ["a", "b", "d"],
  3: ["a", "b", "d"],
  5: ["b", "c", "d"]
}

const findIterateValue=(Obj)=>{
const keys=Object.keys(Obj)
console.log(keys)
keys,map(val=>console.log(Obj[val])
)

}
Nityam Gosain16:37
[1,2,4,0] ---> [{1:1},{2:2},{4:4},{0:0}]
You16:46
[1,2,4,0] ---> [{1:1},{2:2},{4:4},{0:0}]

let arr= [1,2,4,0] 
let result=[]
arr.map((val,index)=>{

result.push({arr[index]:val})
})
console.log(result)
Nityam Gosain16:46
sum(2)(3)(8).toValue. <-->13
You16:52
const sum=(a)=>(b)=>(c)=>a+b+c
const sum=(a)=>{
return (b)=>{
if(a,b){
return a+b
}else{
return(sum(b,c))
}
}
}

console.log(sum(2)(3)(8))
Round-1-Shiv Ram(SSE) */

// const initialObj = {
//   a : [1,2,3],
//   b : [2,3,5],
//   c : [1,5],
//   d : [2,3,5]
// }

// const FindIterate=(obj)=>{
// /* Object.keys(obj).map(val=>obj[val].map(val2=>console.log(val2))) */
// let arr=Object.keys(obj).map(val=>obj[val])
// console.log(arr)
// }

// FindIterate(initialObj)


// const obj = {};
// let arr= [1,2,4,0];
// for(let i=0;i<arr.length;i++){
// [i]=arr[i]
// }

// console.log(obj)
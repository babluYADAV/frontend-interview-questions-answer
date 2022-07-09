console.log("a");
setTimeout(() => {
  console.log("b");
}, 1);

setTimeout(() => {
  console.log("c");
}, 10);

setTimeout(() => {
  console.log("d");
}, 0);

console.log("e");
//o/p
// a
// e
// b
// d
// c

console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);

//o/p
// 1,2,3,4,7,5,6,9,8

var foo;
console.log(typeof foo === "undefined"); //true
console.log(foo == null); //true due to coersion
let num = 0;
async function increament() {
  num += 2;
  console.log(num);
}

increament();
num += 1;
console.log(num);

// o/p
// 1
// 2

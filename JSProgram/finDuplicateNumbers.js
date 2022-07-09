const arry = [1, 2, 1, 3, 4,4,3, 5];

const toFind = arr =>{
return arr.filter((item, index) => arr.indexOf(item) !== index)
}
console.log(toFind(arry));

// Output: [1, 3]
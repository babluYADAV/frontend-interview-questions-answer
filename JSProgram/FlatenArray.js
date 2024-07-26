const arr = [
  [1, 2, 3],
  [1, 2, 3, 4, [1, 2, 3, 4, 5, [1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6, 7]],
];

//custom method
const flatenArray=(arr,depth=1)=>{
    let results=[];
    arr.forEach(ar => { 
        debugger
        if(Array.isArray(ar) ){
                 debugger
            results.push(...flatenArray(ar))
        }else{
            results.push(ar)
                 debugger
        }
    });
         debugger
    return results
}

console.log(flatenArray(arr,3));


console.log(arr.flat(3))



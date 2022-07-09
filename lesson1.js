
//get sum zero
//[-5,-4,-3,-2,0,2,4,6,8]



// const getSumZero=(array)=>{
//     for(let number of array){
//         for(j=1;j<array.length;j++){
//             if(number+array[j]===0){
//                 console.log([number,array[j]])
//             }
//         }
//     }
// }


// getSumZero([-5,-4,-3,-2,0,2,4,6,8])

// complexity o(n^2) quadratic 
//  output
// -5
// -4       
// [ -4, 4 ]
// -3       
// -2       
// [ -2, 2 ]
// 0        
// [ 0, 0 ] 
// 2        
// [ 2, -2 ]
// 4        
// [ 4, -4 ]




// const getSumZero2=(array)=>{
//     for(let number of array){
//         for(j=1;j<array.length;j++){
//             if(number+array[j]===0){
//                 return [number,array[j]]
//             }
//         }
//     }
// }


// const res=getSumZero2([-5,-4,-3,-2,0,2,4,6,8])
// console.log(res)


// output 
// [ -4, 4 ]



//using pointer logic

const getSumZero=(array)=>{
    let left=0 //first index of sorted array
    let right=array.length-1;
    while(left<right){
        let sum=array[left]+array[right]
        if(sum===0){
            return [array[left],array[right]]
        }else if(sum>0){
            right--
        }
        else{
            left++
        }
    }
}


const res=getSumZero([-5,-4,-3,-2,0,2,4,6,8])
console.log(res)


// compexity  o(n) linear

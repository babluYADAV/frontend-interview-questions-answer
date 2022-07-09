// function bubbleSort(array){
// for(let i=array.length; i>0;i--){
//     for(let j=0; j<i-1;j++){
//         if(array[j]>array[j+1]){
//             [array[j],array[j+1]]=[array[j+1],array[j]]
//         }
//     }
// }
// return array;
// }
// const arr=[10,8,1,9,5,7,9,4,2]
// const bubble=bubbleSort(arr)
// console.log(bubble)
// console.log(arr)


function bubbleSort(arr){
let array=arr.slice()
    for(let i=array.length; i>0;i--){
        for(let j=0; j<i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
            }
        }
    }
    return array;
    }
    const arr=[10,8,1,9,5,7,9,4,2]
    const bubble=bubbleSort(arr)
    console.log(bubble)
    console.log(arr)
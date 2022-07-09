

const arr=[[1,2,3],[4,5,6],[7,8,9]]


function twoDArray(arr){
    
let total=0;
let average=0;
for(let row=0;row<arr.length;row++){
    for(let col=0; col<arr[row].length;col++){
        total+=arr[row][col]
    }
    average=total/arr[row].length
}
    

    console.log("total",total);
    console.log("average",average)
}

twoDArray(arr)
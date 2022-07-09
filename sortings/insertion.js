

function insertionSort(array){
    for(let i=1;i<=array.length;i++){
        for(let j=i;j>0;j--){
            if(array[j]<array[j-1]){
                // const temp=array[j];
                // array[j]=array[j-1];
                // array[j-1]=temp

                [array[j],array[j-1]]=[array[j-1],array[j]]
            }
            else{
                break;
            }
        }
    }
    return array;
}

const arr=[10,8,1,9,5,7,9,4,2]
const name=["shiv","yadav","email" ,"ram"]
const insert=insertionSort(name)
console.log(insert)
console.log(arr)


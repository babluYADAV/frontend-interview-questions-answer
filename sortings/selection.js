function selectionSort(arr){
    const array=arr.slice()
    for(let i=0;i<array.length;i++){
        let min=i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min=j;
            }
        }
        if(i!==min){
            let temp=array[i];
            array[i]=array[min];
            array[min]=temp;
        }
    }
    return array;
}
const arr=[10,8,1,9,5,7,9,4,2]
const selection=selectionSort(arr)
console.log(selection)
console.log(arr)
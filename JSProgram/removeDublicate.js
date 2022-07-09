

const array=[1,2,3,4,3,2,4,5,"ram","shyam","ram"];

const removeDublicate=(arr)=>{
    const arrayWithoutdublicateValue=[]
    let len=arr.length;
    for(let i=0;i<len;i++){
        if(arrayWithoutdublicateValue.indexOf(arr[i])===-1){
            arrayWithoutdublicateValue.push(arr[i])
        }
    }
    return arrayWithoutdublicateValue;
}
console.log(removeDublicate(array))
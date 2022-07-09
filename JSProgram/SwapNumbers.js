
const Swap=(n1,n2)=>{
    let temp=n1;
    n1=n2;
    n2=temp

    console.log(n1,n2)
}

Swap(2,5)

const SwapWithoutTemp=(n1,n2)=>{
    n1=n1+n2;
    n2=n1-n2
    n1=n1-n2

    console.log(n1,n2)
}

SwapWithoutTemp(3,7)
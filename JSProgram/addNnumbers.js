const add=(a)=>{
    return (b)=>{
 return b?add(a+b):a

    }
}
console.log(add(1)(2)(3)(4)())
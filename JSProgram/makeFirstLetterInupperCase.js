const caps=(str)=>{
    let strArr=str.split(" ");
    let ouptArr=[]
    for(let word of strArr){
    ouptArr.push(word.charAt(0).toUpperCase()+word.slice(1))
    }
    return ouptArr.join(" ")
    }
    
    
    console.log(caps(str))
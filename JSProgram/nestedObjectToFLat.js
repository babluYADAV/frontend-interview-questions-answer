

const student={
    name:'shiv',
    address:{
        personal:{
            city:'sultanpur',
            pin:'222302'
        },
        office:{
            city:'lucknow',
            pin:'222303'
        }
    }
}

let output={};
const recursion=(obj,name)=>{

for(let key in obj){
    if(typeof obj[key]=='object'){
        recursion(obj[key],name+"_"+key)
    }else{
        output[name+"_"+key]=obj[key]
    }
}
}
recursion(student,'student')
console.log(output)
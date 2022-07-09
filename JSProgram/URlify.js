// str string
//n length of string without white space in the end;

const URlify=(str,n)=>{
    let len=str.length
    let newStr="";
    for(let i=0;i<len;i++){
        if(str[i]===" "){
            newStr+="%20"
        }else{
            newStr+=str[i]
        }
    }
    return newStr

}
console.log(URlify("shiv yadav 123 45"))
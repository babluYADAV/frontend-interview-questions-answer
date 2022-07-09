// String Anagram
// 'hello'=>'llheo
//"shiv"=>"hsiv"

//conditions
// 1.length check for both String
// 2.letter will be same letter arrangement different
//3.string 'hello'=>{h:1,e:1,l:2,0:1} string map key value pairs

const isAnagram=(str1,str2)=>{
    if(str1.length!=str2.length){
        return false;
    }
    let counter={}
    for(let letter of str1){
        counter[letter]=(counter[letter] || 0)+1 // or condition because it give undefined

    }
    for(let letter2 of str2){
      if(!counter[letter2]){
          return false;
      }
      counter[letter2]-=1;
          
    }
    return true

}

const check=isAnagram("hello","llheo")
console.log(check)

// time complexity linear o(n)
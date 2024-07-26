

//debounce;&#x2028;

let count=0;
function getData(){
console.log('fetching', count++)
}


function debounceFN(fn,d){
let timer;
return function(){
clearTimeout(timer)
timer=setTimeout(()=>{
fn.apply(this,arguments)
},d)
}
}


const callBetterFn=debounceFN(getData,300)

//thottling

const expensive=()=>{
console.log('Expensive');
}

function throttle(func,limit){
let flag=true;
return function(){
const context=this;
const args=arguments;
if(flag){
func.apply(this,args); flag=false;

}
setTimeout(()=>{
flag=true;
},limit)



}

}
const betterExpensive=throttle(expensive,1000);
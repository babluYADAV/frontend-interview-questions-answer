// falsy values: false, 0, null, undefined, NaN,-0,0n,""



[]==0//true
//reason is [] is converted to number and number of empty array is 0 so 0==0 is true

if([]==0){
    console.log('true');
} //true
//reason is [] is converted to number and number of empty array is 0 so 0==0 is true

if([]==false){
    console.log('true');
}   //true
//reason is [] is converted to number and number of empty array is 0 so 0==0 is true

if([]==null){
    console.log('true');
}//false
//reason is null is only equal to undefined and not equal to anything else

if([]==undefined){
    console.log('true');
}//false
//reason is undefined is only equal to null and not equal to anything else
if([]==NaN){
    console.log('true');
}//false
//reason is NaN is not equal to anything even itself

if([]==[]){
    console.log('true');
}   //false
//reason is [] is a reference type and two different reference types are not equal to each other
if([]==![]){
    console.log('true');
}   //true

//reason is [] is converted to number and number of empty array is 0 so 0==![] is true because ![] is false and false is converted to 0 so 0==0 is true
if([]==!0){
    console.log('true');
}   //true
//reason is [] is converted to number and number of empty array is 0 so 0==!0 is true because !0 is true and true is converted to 1 so 0==1 is false
if([]==!false){
    console.log('true');
}   //true
//reason is [] is converted to number and number of empty array is 0 so 0==!false is true because !false is true and true is converted to 1 so 0==1 is false
if([]==!null){
    console.log('true');
}//true
//reason is [] is converted to number and number of empty array is 0 so 0==!null is true because !null is true and true is converted to 1 so 0==1 is false
if([]==!undefined){
    console.log('true');
}   //true
//reason is [] is converted to number and number of empty array is 0 so 0==!undefined is true because !undefined is true and true is converted to 1 so 0==1 is false
if([]==!NaN){
    console.log('true');
}   //true
//reason is [] is converted to number and number of empty array is 0 so 0==!NaN is true because !NaN is true and true is converted to 1 so 0==1 is false
if([]){
    console.log('true');
}//true
//  reason is [] is a reference type and reference types are truthy values so it will be true
if(![]){
    console.log('true');
} //false
//  reason is [] is a reference type and reference types are truthy values so it will be false
if(!0){
    console.log('true');
}//true
//reason is 0 is a falsy value so !0 will be true
if(!false){
    console.log('true');
}//true
//reason is false is a falsy value so !false will be true
if(!null){
    console.log('true');
}//true
//  reason is null is a falsy value so !null will be true
if(!undefined){
    console.log('true');
}//true
//  reason is undefined is a falsy value so !undefined will be true
if(!NaN){
    console.log('true');
}   //true
//  reason is NaN is a falsy value so !NaN will be true
if(0){
    console.log('true');
}//false
//  reason is 0 is a falsy value so it will be false
if(false){
    console.log('true');
}
//false
//  reason is false is a falsy value so it will be false
if(null){
    console.log('true');
}//false
//  reason is null is a falsy value so it will be false
if(undefined){
    console.log('true');
}//false
//  reason is undefined is a falsy value so it will be false
if(NaN){
    console.log('true');
}   //false
//  reason is NaN is a falsy value so it will be false

if(false){
    console.log('true');
}//false
//  reason is false is a falsy value so it will be false

// right triangle area=(base*heigth)/2

const rightT=(h,b)=>{
    return (h*b)/2
}

console.log(rightT(2,4))


//other using heron's formula
// s=(a+b+c)/2
//area=math.sqrt(s(s-a)*(s-b)*(s-c)

const Area=(a,b,c)=>{
    let s=(a+b+c)/2;
    let temp=s*(s-a)*(s-b)*(s-c)
    let area=Math.sqrt(temp)
    return area
}


console.log(Area(10,5,10))
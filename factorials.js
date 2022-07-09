
//Recursive
function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}

console.log(rFact(5))
// iterative

function sFact(num)
{
    let rval=1;
    for (let i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}
console.log(sFact(5))
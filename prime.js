const isPrime = num => {
    let s = Math.sqrt(num);
    console.log(s)
    for(let i = 2; i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
console.log(isPrime(11))
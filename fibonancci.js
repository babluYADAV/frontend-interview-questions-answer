function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 1; i <=n; i++) {
    let temp = a + b;
    console.log(temp)
    a = b;
    b = temp;
  }
}
console.log(fibonacci(13));

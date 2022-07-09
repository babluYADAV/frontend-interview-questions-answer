const SquareRoot = (n) => {
  if (n > 0) {
    let b = Math.sqrt(n);
    return b;
  } else {
    return undefined;
  }
};
console.log(SquareRoot(100));
console.log(SquareRoot(-100));

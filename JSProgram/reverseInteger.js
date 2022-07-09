const reverseInt = (n) => {
  let reverse;
  if (n < 0)
    return (reverse = -1 * parseInt(n.toString().split("").reverse().join("")));
  return (reverse = parseInt(n.toString().split("").reverse().join("")));
};

console.log(reverseInt(500));//5
console.log(reverseInt(-15));//-51

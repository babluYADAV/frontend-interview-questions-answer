const IsUnique = (str) => {
  let obj = {};
  for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;

  for (let i of obj) {
    if (obj[i] > 1) return false;
  }
  return true;
};

console.log(IsUnique("kunle"));//true
console.log(IsUnique("shivramyadav"));//false

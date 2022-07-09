function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return;
  }
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  if (str1 === str2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
checkStringsAnagram("indian", "ndiani");

const isObj = (str) => {
  let obj = {};
  for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;
  return obj;
};

const isPermutation = (str1, str2) => {
  if (str1 === str2) {
    return true;
  } else {
    if (str1.length !== str2.length) {
      return false;
    } else {
      let obj1 = isObj(str1);
      let obj2 = isObj(str2);
      for (let i in obj1) {
        if (obj1[i] !== obj2[i]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(isPermutation("indian", "shivrm"))
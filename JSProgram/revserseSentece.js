function wordsReverser(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(wordsReverser("Welcome to this Javascript Guide!"));

const reverseStr = (str) => {
  let strReverse = "";
  for (let x of str) {
    strReverse = x + strReverse;
  }
  return strReverse;
};

console.log(reverseStr("Welcome to this Javascript Guide!"));

const strCompression = (str1) => {
  let str = str1.split("").sort().join("");
  let n = str.length,
    output = "",
    uniqCount = 0,
    count = 1;
  for (let i = 0; i < n; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      output += str[i] + count;
      count = 1;
      uniqCount++;
    }
  }
  if (uniqCount === n) return str;
  else return output;
};

console.log(strCompression("aaabbbcccdddacdb")); //a3b3c3d3a1c1d1b1

const coutner = (string) => {
  let str = string.split("").sort().join("");
  let count = 1;
  let uniqCount = 0;
  let output = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i + 1] === str[i]) {
      count++;
    } else {
      output += str[i] + count;
      count = 1;
      uniqCount++;
    }
  }
  if (uniqCount === str.length) return str;
  else return output;
};

console.log(coutner("aaabbbccacdb")); //a3b3c3d3a1c1d1b1


function compressString(s) {
  let result = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
          count++;
      } else {
          result += s[i] + count;
          count = 1;
      }
  }

  return result;
}

// Example usage
const input = "aaabbbcccdddacdb";
const output = compressString(input);
console.log("Output:", output); // Output: "a3b3c3d3a1c1d1b1"

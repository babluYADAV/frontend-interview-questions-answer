let str = 'shivram yadav';
let histogram = {};
let len = str.length;
for (let i = 0; i < len; i++) {
  let letter = str[i];
  histogram[letter] = (histogram[letter] || 0) + 1;
}

console.log(histogram);

const maxChar = (str) => {
  let obj = {};
  for (let char of str) !obj[char] ? (obj[char] = 1) : obj[char]++;
  let maxNum = 0;
  let maximumChar = '';
  for (let char of str) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maximumChar = char;
    }
  }
  console.log(maximumChar + ':' + maxNum);
};
// let str = "shivram yadav";
maxChar(str);

const caps = (str) => {
  let strArr = str.split(' ');
  let outputArr = [];
  for (let word of strArr) {
    outputArr.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return outputArr.join(' ');
};

console.log(caps(str));

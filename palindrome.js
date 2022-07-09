// palindrome abba=true
// malayalam=true
//hannah-=true

const palindrome = (str) => {
  const reverse = str.split("").reverse().join("");
  if (str === reverse) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
};
palindrome("malayalam");

const Palindrome = (str) => {
  let reversed = "";
  for (let x of str) {
    reversed = x + reversed;
  }
  if (reversed === str) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
};
Palindrome("hannahs");

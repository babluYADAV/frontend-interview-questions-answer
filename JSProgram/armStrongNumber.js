// 153=1*1*1+5*5*5+3*3*3

const armStrong = (n) => {
  let temp = n;
  let sum = 0;
  let numberOfDigit = n.toString().length;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** numberOfDigit;
    temp = parseInt(temp / 10);
  }
  if (sum == n) {
    return true;
  } else {
    return false;
  }
};
console.log(armStrong(153)); //1^3+5^3+3^3 true

const armStrongNumber = (n) => {
  let temp = n;
  let sum = 0;
  let numberLength = n.toString().length;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** numberLength;
    temp = parseInt(temp / 10);
  }
  if (sum === n) {
    return true;
  } else {
    return false;
  }
};

const arm = (n) => {
  let temp = n;
  let sum = 0;
  let len = n.toString().length;
  while (temp > 0) {
    let digit = digit % 10;
    sum += digit ** len;
    temp = parseInt(temp / 10);
  }
  if (sum === n) return true;
  else return false;
};

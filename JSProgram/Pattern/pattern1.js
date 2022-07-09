const pattern1 = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

// console.log(pattern1(5));

// *
// **
// ***
// ****
// *****
const pattern2 = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  return str;
};

// console.log(pattern2(5));

// 1
// 12
// 123
// 1234
// 12345

const pattern3 = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    str += "\n";
  }
  return str;
};

// console.log(pattern3(5));
// 1
// 22
// 333
// 4444
// 55555

const pattern4 = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

// console.log(pattern4(5));
// ******
// *****
// ****
// ***
// **
// *

const pattern5 = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      str += j;
    }
    str += "\n";
  }
  return str;
};

// console.log(pattern5(5));
// 543210
// 54321
// 5432
// 543
// 54
// 5

const pattern6 = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = n; j >= i; j) {
      str += i;
    }
    str += "\n";
  }
  return str;
};

// console.log(pattern6(5));

// 000000
// 11111
// 2222
// 333
// 44
// 5

const pattern7 = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i; k++) {
      str +="*";
    }
    str += "\n";
  }
  return str
};

console.log(pattern7(5));
//     *
//    **
//   ***
//  ****
// *****

const pattern8 = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i; k++) {
      str +=i;
    }
    str += "\n";
  }
  return str
};

console.log(pattern8(5));
//     1
//    22
//   333
//  4444
// 55555


const pattern9 = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 1; k < i; k++) {
      str +=k;
    }
    str += "\n";
  }
  return str
};

console.log(pattern9(5));

//     0
//    01
//   012
//  0123
// 01234

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += i;
  }
  string += "\n";
}
console.log(string);
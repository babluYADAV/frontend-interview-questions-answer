// ***
// ***
// ***
// ***
// ***

const pyramid = (n) => {
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        star += "*";
      } else {
        if (j === 0 || j === n - 1) {
          star += "*";
        } else {
          star += " ";
        }
      }
    }
    star += "\n";
  }
  return star;
};
const p = pyramid(3);
console.log(p);

const pyramid2 = (n) => { 
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      star += " ";
    }
    for (let k = i; k =0; k--) {
      star += "*";
    }
    star += "\n";
  }

  return star;
};
const y = pyramid2(5);
console.log(y);

const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizzBuzz");
  } else if (n % 5 === 0) {
    console.log("buzz");
  } else if (n % 3 === 0) {
    console.log("fizz");
  } else {
    console.log("not match any group");
  }
};
// fizzBuzz(9);

const fizzBuzz2 = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log("not match any group", i);
    }
  }
};
fizzBuzz2(15);

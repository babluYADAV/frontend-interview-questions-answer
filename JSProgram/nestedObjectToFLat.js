const student = {
  name: 'shiv',
  address: {
    personal: {
      city: 'sultanpur',
      pin: '222302',
    },
    office: {
      city: 'lucknow',
      pin: '222303',
    },
  },
};

let output = {};
const recursion = (obj, name) => {
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      recursion(obj[key], name + '_' + key);
    } else {
      output[name + '_' + key] = obj[key];
    }
  }
};
recursion(student, 'student');
console.log(output);





const input = {
    A: (a, b, c) => a + b + c,
    B: (a, b, c) => a - b - c,
    C: (a, b, c) => a + b*c,
    D: {
      E: (a, b, c) => a + b + c
    },
  };
  
  const findOutput = (inp) => {

    for (let i in inp) {
      if (typeof inp[i] == 'object') {
        for (let j in inp[i]) {
        console.log(j=inp[i][j](1,2,3));
        }
      } else {
       console.log(i=inp[i](1,2,3)); 
      }
    }
   
  };
  
  findOutput(input);

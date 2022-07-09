const array = [0, 1, 0, 3, 2, 0, 9, 0, 7, 0, 4, 5, 0];

const moveZeros = (arr) => {
  for (let i = arr.length-1; i >=0 ; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
};

console.log(moveZeros(array));

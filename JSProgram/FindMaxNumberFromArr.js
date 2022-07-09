let array = [3, 4, 5, 7, 1,0, 2];

const findMax = (arr) => {
  let len = arr.length;
  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr[len - 1];
};
console.log(findMax(array));

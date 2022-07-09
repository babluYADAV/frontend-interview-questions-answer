const chunkArray = (arr, n) => {
  let chunked = [];
  for (let elem of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === n) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
};

const array = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2];
console.log(chunkArray(array, 5));

const arr = [2, 4, 5, 6, 7, 9];

Array.prototype.reduce = null;

Array.prototype.myReduce = function (callback, initialValue = 0) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

const sum = arr.myReduce((prevValue, currentValue) => prevValue + currentValue);

console.log(sum);

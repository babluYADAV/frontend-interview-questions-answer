const arr = [2, 4, 5, 6, 7, 9];

Array.prototype.filter = null;

Array.prototype.myFilter = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

const result = arr.myFilter((val) => val > 4);
console.log(result);

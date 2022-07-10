const arr = [2, 4, 5, 6, 7, 9];

Array.prototype.map = null;

Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
};

arr.myMap((val) => {
  console.log(val);
});

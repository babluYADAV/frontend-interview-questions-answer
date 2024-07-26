
function memoize() {
    let res = {};
    return function (...args) {
      let resCache = JSON.stringify(args);
      if (!res[resCache]) {
        res[resCache] = fn.apply(this, args);
      }
      return res[resCache];
    };
  }
  
  const clumsyproduct = (n1, n2) => {
    for (let i = 0; i < 100000000; i++) {}
    return n1 * n2;
  };
  const memoizeProduct = memoize(clumsyproduct);
  
  memoizeProduct(1, 2);
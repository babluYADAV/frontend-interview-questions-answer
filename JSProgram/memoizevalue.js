
function memoize(fn) {
    let cache = {};
    return function (...args) {
      let cacheKey = JSON.stringify(args);
      if(cacheKey in cache){
        console.log('from cache')
        return cache[cacheKey]
      }
      cache[cacheKey] = fn.apply(this, args);
      console.log('first time ')
      return cache[cacheKey];
    };
  }
  
  const clumsyproduct = (n1, n2) => {
    for (let i = 0; i < 100000000; i++) {}
    return n1 * n2;
  };
  const memoizeProduct = memoize(clumsyproduct);
  
  memoizeProduct(1, 2);zzzzzazx 
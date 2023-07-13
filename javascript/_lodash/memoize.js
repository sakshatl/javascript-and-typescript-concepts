const memoizedAdd = (() => {
  let cache = {};

  return (num) => {
    if (cache[num]) {
      console.log("retured from cache");
      return cache[num];
    } else {
      console.log("returned from calculation");
      cache[num] = num + 10;
      return num + 10;
    }
  };
})();

console.log(memoizedAdd(5));
console.log(memoizedAdd(10));
console.log(memoizedAdd(5));

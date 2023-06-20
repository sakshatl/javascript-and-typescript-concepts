// A function that return and array of chunks of size "k"
//  If array can't be split evenly, the final chunk will be the remaining elements.

function chunkIt(arr, k) {
  let result = [];

  let chunk = [];
  for(let i = 0; i < arr.length; i++) {
    if(chunk.length === k) {
      // chunk is made
      result.push(chunk);
      chunk = [];
    }
    chunk.push(arr[i]);
  }

  // remaining chunk
  if(chunk.length) {
    result.push(chunk);
  }

  return result;
}

console.log(chunkIt(['a', 'b', 'c', 'd'], 2));
console.log(chunkIt(['a', 'b', 'c', 'd'], 3));

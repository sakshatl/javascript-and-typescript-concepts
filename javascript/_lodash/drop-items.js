// creates an new array of items, with n items dropped from the start or end

function dropItems(arr, n, position = "start") {
  let result;
  if (position === "start") {
    result = dropFromStart(arr, n);
  } else {
    result = dropFromEnd(arr, n);
  }

  return result;
}

function dropFromStart(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.shift();
  }
  return arr;
}

function dropFromEnd(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.pop();
  }
  return arr;
}

console.log(dropItems([1, 2, 3, 4], 2, "start"));
console.log(dropItems([1, 2, 3, 4], 2, "end"));

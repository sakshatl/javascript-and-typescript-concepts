// check is an array of number is sorted or not

function isSorted(arr, index) {
  // base condition
  if (index === arr.length - 1) {
    return true;
  }

  return arr[index] < arr[index + 1] && isSorted(arr, index + 1);
}

function main() {
  console.log(isSorted([1, 2, 3, 11, 20], 0));
  console.log(isSorted([1, 2, 3, 11, 9], 0));
}

main();

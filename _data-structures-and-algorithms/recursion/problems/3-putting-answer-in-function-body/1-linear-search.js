function findAllIndexes(arr, target, index = 0) {
  let list = [];

  if (index === arr.length) {
    return list;
  }

  // this will contain answer for that function call only
  if (arr[index] === target) {
    list.push(index);
  }

  let answersFromAboveCalls = findAllIndexes(arr, target, index + 1);
  list.push(...answersFromAboveCalls);
  return list;
}

function main() {
  console.log(findAllIndexes([1, 2, 1, 3, 1], 1)); // [0, 2, 4]
}

main();

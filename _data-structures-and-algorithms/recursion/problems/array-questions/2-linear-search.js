function linearSearch(arr, target) {
  const helper = (arr, target, index = 0) => {
    if (index === arr.length) {
      return false;
    }

    if (arr[index] === target) {
      return true;
    } else {
      return helper(arr, target, index + 1);
    }
  };

  return helper(arr, target);
}

function findIndex(arr, target) {
  const helper = (arr, target, index = 0) => {
    if (index === arr.length) {
      return -1;
    }

    let elem = arr[index];
    if (elem === target) {
      return index;
    } else {
      return helper(arr, target, index + 1);
    }
  };

  return helper(arr, target);
}

function findLastIndex(arr, target) {
  const helper = (arr, target, index) => {
    if (index < 0) {
      return -1; // not found
    }

    let elem = arr[index];
    if (elem === target) {
      return index;
    } else {
      return helper(arr, target, index - 1);
    }
  };

  return helper(arr, target, arr.length - 1);
}

function findAllIndexes(arr, target) {
  const helper = (arr, target, index = 0, result = []) => {
    if (index === arr.length) {
      return result;
    }

    let elem = arr[index];

    if (elem === target) {
      // element found
      result.push(index);
    }

    return helper(arr, target, index + 1, result);
  };

  return helper(arr, target);
}

function main() {
  console.log(linearSearch([1, 4, 99, 77], 4)); // true
  console.log(linearSearch([1, 4, 99, 77], 10)); // false

  console.log(findIndex([1, 4, 2, 4, 5, 7, 4, 9, 4], 4)); // 1
  console.log(findLastIndex([1, 4, 2, 4, 5, 7, 4, 9, 4], 4)); // 8
  console.log(findAllIndexes([1, 4, 2, 4, 5, 7, 4, 9, 4], 4)); // [1, 3, 6, 8]
}

main();

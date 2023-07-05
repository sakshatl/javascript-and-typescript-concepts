function linearSearch(arr, target) {
  const helper = (arr, target) => {
    if (!arr.length) {
      return false;
    }

    let elem = arr[0];

    if (elem === target) {
      return true;
    } else {
      return helper(arr.slice(1), target);
    }
  };

  return helper(arr, target);
}

function main() {
  console.log(linearSearch([1, 4, 99, 77], 4));
  console.log(linearSearch([1, 4, 99, 77], 21));
}

main();

function countZeros(num) {
  const helper = (num, count = 0) => {
    if (num === 0) {
      return count;
    }

    let digit = num % 10;
    num = Math.floor(num / 10);

    if (digit === 0) {
      return helper(num, count + 1);
    } else {
      return helper(num, count);
    }
  };

  return helper(num);
}

function main() {
  console.log(countZeros(40001));
}

main();

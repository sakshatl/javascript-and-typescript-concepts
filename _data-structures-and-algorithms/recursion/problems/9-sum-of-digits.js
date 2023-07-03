function sumOfDigits(num) {
  // base case
  if (n === 0) {
    return 0;
  }

  let digit = num % 10;
  num = Math.floor(num / 10);

  return digit + sumOfDigits(num);
}

function main() {
  console.log(sumOfDigits(1234)); // 10
}

main();

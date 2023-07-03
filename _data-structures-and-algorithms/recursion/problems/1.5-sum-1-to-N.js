function sum(n) {
  // base condition
  if (n < 0) {
    return 0;
  }

  return n + sum(n - 1);
}

function sumBetweenARange(start, end) {
  if (start > end) {
    return 0;
  }

  return start + sumBetweenARange(start + 1, end);
}

function main() {
  console.log(sum(5)); // 5 + 4 + 3 + 2 + 1
  console.log(sumBetweenARange(5, 10));
  console.log(sumBetweenARange(1, 5));
}

// 5 - 10 -> 5 + 6 + 7 + 8 + 9 + 10

main();

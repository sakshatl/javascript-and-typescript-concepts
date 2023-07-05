function reverseCount(n) {
  if (n === 1) {
    console.log(1);
    return;
  }

  console.log(n);
  reverseCount(n - 1);
}

function forwardCount(n) {
  if (n === 1) {
    console.log(1);
    return;
  }

  forwardCount(n - 1);
  console.log(n);
}

function main() {
  reverseCount(10); // 10, 9, 8, ---- 1
  console.log("============================================");
  forwardCount(10); // 1, 2, 3, 4 --- 10
}

main();

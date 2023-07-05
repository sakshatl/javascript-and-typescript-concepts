// factorial of number

function factorial(n) {
  // base case
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function main() {
  console.log(factorial(4));
  console.log(factorial(5));
}

main();

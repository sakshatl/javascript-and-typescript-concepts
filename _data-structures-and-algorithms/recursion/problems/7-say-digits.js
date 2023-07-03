// print the digits in words 412 -> "four" "one" "two"

const DIGITS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function sayDigits(n) {
  if (n === 0) {
    return;
  }

  let digit = n % 10;
  n = Math.floor(n / 10);
  sayDigits(n);
  console.log(DIGITS[digit]);
}

function main() {
  sayDigits(412);
}

main();

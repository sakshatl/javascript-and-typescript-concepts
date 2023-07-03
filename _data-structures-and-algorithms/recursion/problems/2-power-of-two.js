function powerOfTwo(n) {
  if (n === 0) {
    return 1;
  }

  return 2 * powerOfTwo(n - 1);
}

console.log(powerOfTwo(3)); // 8
console.log(powerOfTwo(5)); // 32
console.log(powerOfTwo(6)); // 64

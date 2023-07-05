// https://www.geeksforgeeks.org/count-ways-reach-nth-stair/
/*
  There are n stairs, a person standing at the 0th stair wants to reach the top. 
  The person can climb either 1 stair or 2 stairs at a time. 
  Count the number of ways, the person can reach the top.
*/

function numberOfWays(n) {
  if (n < 0) {
    return 0;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let ans = numberOfWays(n - 1) + numberOfWays(n - 2);
  return ans;
}

function main() {
  console.log(numberOfWays(3));
  console.log(numberOfWays(5));
}

main();

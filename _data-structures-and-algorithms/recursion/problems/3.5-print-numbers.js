/**
 *
 * @param {number} n - number to be printed till
 * @returns {void}
 */

function nToOne(n) {
  // base case
  if (n === 0) {
    return;
  }

  console.log(n);
  nToOne(n - 1);
}

/**
 *
 * @param {number} n - number to be printed till
 * @returns {void}
 */
function oneToN(n) {
  if (n === 0) {
    return;
  }

  oneToN(n - 1);
  console.log(n);
}

function main() {
  nToOne(5);
  console.log("==================================");
  oneToN(5);
}

main();

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const revNum =
    x < 0
      ? -parseInt(x.toString().slice(1).split('').reverse().join(''))
      : parseInt(x.toString().split('').reverse().join(''));

  if (revNum > 2 ** 31 - 1 || revNum < -(2 ** 31)) return 0;

  return revNum;
};

console.log(reverse(1534236469));

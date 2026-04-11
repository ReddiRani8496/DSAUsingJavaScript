/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 1) return true;
  if (n < 1 || n % 2 != 0) return false;
  return isPowerOfTwo(n / 2);
};

// 2^0 = 1
// 2^1 = 2 2
// 2^2 = 4 2*2
// 2^3 = 8 2*2*2

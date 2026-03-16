// Reference leetcode
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let xcopy = x;
  let rev = 0;
  x = Math.abs(x);
  while (x > 0) {
    let lastDigit = x % 10;
    rev = rev * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;

  if (xcopy < 0) return -rev;
  else return rev;
};

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let total = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      right++;
    } else {
      left++;
    }
    if (left == right) {
      total++;
      left = 0;
      right = 0;
    }
  }

  return total;
};

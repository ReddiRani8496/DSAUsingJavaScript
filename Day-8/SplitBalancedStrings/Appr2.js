/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let total = 0;
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      temp++;
    } else {
      --temp;
    }
    if (temp == 0) {
      total++;
    }
  }

  return total;
};

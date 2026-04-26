/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  s = s.trim();
  let i = s.length - 1;
  while (i >= 0 && s.charAt(i) != " ") {
    count++;
    i--;
  }
  return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let start = 0;
  s = s.trim();
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charAt(i) == " " && s.charAt(i + 1) != " ") {
      start = i + 1;
    }
  }
  return s.substring(start).length;
};

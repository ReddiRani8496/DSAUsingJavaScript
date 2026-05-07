/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let x = 0;

  for (let i = 0; i < strs[0].length; i++) {
    let cur = strs[0][x];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != cur || x == strs[j].length) {
        return strs[0].substring(0, x);
      }
    }
    x++;
  }
  return strs[0].substring(0, x);
};

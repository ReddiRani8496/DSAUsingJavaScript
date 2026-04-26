/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let s = words[i];
    for (let j = 0; j < s.length; j++) {
      if (s[j] == x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let copy = [...strs];

  let group = new Map();
  for (let i = 0; i < strs.length; i++) {
    copy[i] = copy[i].split("").sort().join("");
  }

  for (let i = 0; i < copy.length; i++) {
    if (!group.has(copy[i])) {
      group.set(copy[i], [strs[i]]);
    } else {
      let val = group.get(copy[i]);
      val.push(strs[i]);
      group.set(copy[i], val);
    }
  }
  let res = [];

  for (let [key, words] of group) {
    let relatedWords = [];
    for (let word of words) {
      relatedWords.push(word);
    }
    res.push(relatedWords);
  }
  return res;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let copy = [...strs];

  let group = {};
  for (let i = 0; i < strs.length; i++) {
    let sorted = copy[i].split("").sort().join("");
    if (!group[sorted]) {
      group[sorted] = [strs[i]];
    } else {
      group[sorted].push(strs[i]);
    }
  }

  return [...Object.values(group)];
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let fmap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (fmap.has(s[i])) {
      console.log(fmap);
      let val = fmap.get(s[i]);
      if (val != t[i]) {
        return false;
      }
    } else {
      console.log(fmap);
      if (fmap.has(t[i]) && fmap.get(t[i]) != s[i]) return false;
      fmap.set(s[i], t[i]);
    }
  }

  return true;
};

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let alpha = new Map();
  for (let i = 0; i < s.length; i++) {
    if (alpha.has(s[i])) {
      let count = alpha.get(s[i]);
      alpha.set(s[i], count + 1);
    } else {
      alpha.set(s[i], 1);
    }
  }

  let vowelMax = 0;
  let consonant = 0;
  for (const [key, value] of alpha) {
    if (key == "a" || key == "e" || key == "i" || key == "o" || key == "u") {
      if (value > vowelMax) {
        vowelMax = value;
      }
    } else {
      if (value > consonant) {
        consonant = value;
      }
    }
  }
  return vowelMax + consonant;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt(0);
    if (code >= 65 && code <= 90) {
      arr.push(String.fromCharCode(code + 32));
    }

    if (code >= 97 && code <= 122) {
      arr.push(s[i]);
    }
    if (code >= 48 && code <= 57) {
      arr.push(s[i]);
    }
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

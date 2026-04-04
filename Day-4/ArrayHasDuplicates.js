function hasDuplicates(arr) {
  let map = {};

  for (let num of arr) {
    if (map[num]) {
      return true;
    }
    map[num] = 1;
  }

  return false;
}
console.log(hasDuplicates([1, 2, 3, 4])); // false
console.log(hasDuplicates([1, 2, 3, 2])); // true

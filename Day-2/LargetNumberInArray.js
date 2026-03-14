function findLargest(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let arr = [5, 0, 10, 8, 17, 1];

let result = findLargest(arr);
console.log(result);

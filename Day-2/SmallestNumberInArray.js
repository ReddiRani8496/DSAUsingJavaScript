function findLargest(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

let arr = [5, 0, 10, 8, 17, 1];

let result = findLargest(arr);
console.log(result);

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  // Find middle index
  let mid = Math.floor(arr.length / 2);

  // Divide array into two halves
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort both halves
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare elements and merge
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [38, 27, 43, 3, 9, 82, 10];
let sortedArr = mergeSort(arr);

console.log("Sorted Array:", sortedArr);

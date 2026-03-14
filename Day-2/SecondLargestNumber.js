function secondLargestNumber(arr) {
  if (arr.length < 2) return null;

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      firstLargest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

let arr = [4, 9, 0, 3, 8, 7, 1];

let result = secondLargestNumber(arr);
console.log(result);

// Edge cases
// Array is empty
// array has negative values
// Array has duplicates

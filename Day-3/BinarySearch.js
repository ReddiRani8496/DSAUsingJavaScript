let arr = [1, 2, 4, 5, 3];

let element = 4;

function searchElement(arr, element) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == element) return mid;
    else if (arr[mid] < element) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

let index = searchElement(arr, element);
console.log(index);

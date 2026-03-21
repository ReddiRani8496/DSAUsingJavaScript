let arr = [1, 2, 4, 5, 3];

let element = 4;

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) return i;
  }

  return -1;
}

let index = searchElement(arr, element);
console.log(index);

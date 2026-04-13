function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j >= 0) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      } else {
        break;
      }
      j--;
    }
  }

  return arr;
}

console.log(selectionSort([3, 1, 4, 2, 5]));

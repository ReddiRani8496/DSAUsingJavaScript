function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let prev = i - 1;
    let cur = arr[i];
    while (prev >= 0 && arr[prev] > cur) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = cur;
  }

  return arr;
}

console.log(selectionSort([3, 1, 4, 2, 5]));

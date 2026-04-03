let arr = [1, 0, 0, 1, 0, 1, 1];
let zeroes = 0;
let ones = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) zeroes++;
  else ones++;
}

console.log("Total zeroes: ", zeroes, " total ones: ", ones);

function printNto1(num) {
  if (num == 0) return;
  console.log(num);
  printNto1(num - 1);
}

let value = 5;
printNto1(5);

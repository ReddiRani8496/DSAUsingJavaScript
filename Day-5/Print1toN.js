function print1toN(num) {
  if (num == 0) return;
  print1toN(num - 1);
  console.log(num);
}

let value = 5;
print1toN(5);

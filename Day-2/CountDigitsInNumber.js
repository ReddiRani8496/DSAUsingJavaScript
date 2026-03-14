function countDigits(num) {
  if (num == 0) return 1;
  let count = 0;
  if (num < 0) {
    num = Math.abs(num);
  }
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }

  console.log(count);
}

countDigits(-123);

// Edge cases
// 1. if n = 0 then we have to print 1 or 0
// if n is negative?

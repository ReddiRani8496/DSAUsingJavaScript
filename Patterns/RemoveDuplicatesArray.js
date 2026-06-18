const arr = [1, 2, 1, 1, 3, 2, 5];

const result = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(result);

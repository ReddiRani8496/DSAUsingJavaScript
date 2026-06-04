const name = "reddirani";

const result = [...name].reduce((acc, char) => {
  if (acc[char]) {
    acc[char] += 1;
  } else {
    acc[char] = 1;
  }
  return acc;
}, {});

console.log(result);

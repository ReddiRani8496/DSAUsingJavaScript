var reverseStr = function (s, k) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let reversedPart = arr.slice(i, i + k).reverse();
    arr.splice(i, k, ...reversedPart);
  }

  return arr.join("");
};

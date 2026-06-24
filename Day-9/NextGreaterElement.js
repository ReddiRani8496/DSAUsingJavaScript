var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const nextGreaterMap = new Map();

  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      nextGreaterMap.set(stack.pop(), num);
    }
    stack.push(num);
  }

  while (stack.length) {
    nextGreaterMap.set(stack.pop(), -1);
  }

  return nums1.map((num) => nextGreaterMap.get(num));
};

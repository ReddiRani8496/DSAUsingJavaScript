/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let min = m > n ? m : n;
//   let j = 0;
//   let i = 0;
//   for (i = 0; i < m; i++) {
//     if (nums1[i] > nums2[j]) {
//       let temp = nums1[i];
//       nums1[i] = nums2[j];
//       nums2[j] = temp;
//     }
//   }

//   while (i < n + m) {
//     nums1[i++] = nums2[j++];
//   }
// };

// brute force approach

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = 0;
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[j++];
  }

  for (let i = 0; i < nums1.length; i++) {
    for (let k = 0; k < nums1.length - i - 1; k++) {
      if (nums1[k] > nums1[k + 1]) {
        let temp = nums1[k];
        nums1[k] = nums1[k + 1];
        nums1[k + 1] = temp;
      }
    }
  }
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

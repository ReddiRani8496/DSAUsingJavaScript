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

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//   let j = 0;
//   for (let i = m; i < nums1.length; i++) {
//     nums1[i] = nums2[j++];
//   }

//   for (let i = 0; i < nums1.length; i++) {
//     for (let k = 0; k < nums1.length - i - 1; k++) {
//       if (nums1[k] > nums1[k + 1]) {
//         let temp = nums1[k];
//         nums1[k] = nums1[k + 1];
//         nums1[k + 1] = temp;
//       }
//     }
//   }
//   console.log(nums1);
// };

// Approach - 2 using extra array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = 0;
  let extra = nums1.splice(0, m);
  let i = 0;
  let k = 0;
  while (i < extra.length && j < n) {
    if (extra[i] < nums2[j]) {
      nums1[k] = extra[i];
      i++;
      k++;
    } else {
      nums1[k] = nums2[j];
      k++;
      j++;
    }
  }

  while (i < extra.length) {
    nums1[k++] = extra[i++];
  }

  while (j < n) {
    nums1[k++] = nums2[j++];
  }

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

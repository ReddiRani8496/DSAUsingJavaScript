/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let min = m > n ? m : n;
  let j = 0;
  let i = 0;
  for (i = 0; i < m; i++) {
    if (nums1[i] > nums2[j]) {
      let temp = nums1[i];
      nums1[i] = nums2[j];
      nums2[j] = temp;
    }
  }

  while (i < n + m) {
    nums1[i++] = nums2[j++];
  }
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//     let res = 0;
//     for(let i=0;i<nums.length;i++) {
//         res ^= nums[i];
//     }
//     return res;
// };

// brute force approach

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  console.log(hash);
};

singleNumber([1, 2, 2]);

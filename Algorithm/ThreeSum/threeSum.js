// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let first,
    target,
    valid,
    result = [];

  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    if(nums[i] === nums[i - 1]) continue;

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right + 1]) right++;

        left++;
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
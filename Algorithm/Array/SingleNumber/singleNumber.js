// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let newObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!newObj[nums[i]]) {
      newObj[nums[i]] = 1;
    } else {
      newObj[nums[i]] += 1;
    }
  }

  for (let item in newObj) {
    if (newObj[item] === 1) {
      return item;
    }
  }
};

const singleNumber_best = function(nums) {
  let a= 0;
  for (let i of nums) {
    a ^= i;
  }
  return a;
};

console.log(singleNumber([4,1,2,1,2]));
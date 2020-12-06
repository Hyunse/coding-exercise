// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      length--;
    }
  }

  return nums;
};

var moveZeroes2 = function (nums) {
  let j = 0

  for (let i = 0; i < nums.length; i += 1) {
    if (i == j && nums[i] != 0) j += 1
    else if (nums[i] != 0) {
      nums[j++] = nums[i]
      nums[i] = 0
    }
  }

  return nums
};


console.log(moveZeroes2([0, 1, 0, 3, 12]));
console.log(moveZeroes2([0, 0, 1]));

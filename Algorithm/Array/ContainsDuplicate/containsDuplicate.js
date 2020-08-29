// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  let newObj = {};
  let valid = false;

  for (let i = 0; i < nums.length; i++) {
    if (!newObj[nums[i]]) {
      newObj[nums[i]] = 1;
    } else {
      newObj[nums[i]] += 1;
    }
  }

  for (let item in newObj) {
    if (newObj[item] > 1) {
      valid = true;
    }
  }

  return valid;
};

const containsDuplicate_bset = function (nums) {
  let set = new Set(nums);
  return set.size < nums.length;
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

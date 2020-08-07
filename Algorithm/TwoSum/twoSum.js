// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1 ;
  
  while(i < j) {
    // if sum is less than target, increase index 1
    if(numbers[i] + numbers[j] < target) {
      i++;
    }

    // if sum is bigger than target, decrease index 2
    if(numbers[i] + numbers[j] > target) {
      j--;
    }

    // if sum equals target, break
    if(numbers[i] + numbers[j] === target) {
      break;
    }
  }

  return [i+1, j+1];
}
console.log("target: 9", (twoSum([2,7,11,15], 9)));
console.log("target: 18", (twoSum([2,7,11,15], 18)));
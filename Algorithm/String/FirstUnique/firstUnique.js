// First Unique Character in a String

// Solution
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const charMap = {};
    const arr = s.split('');

    for(let i = 0; i < arr.length; i++) {
      if(!charMap[arr[i]]) charMap[arr[i]] = 1;
      else charMap[arr[i]] += 1;
    }

    for(let j = 0; j < arr.length; j++) {
      if(charMap[arr[j]] === 1) return j;
    }

    return -1;
};

console.log(firstUniqChar(''));
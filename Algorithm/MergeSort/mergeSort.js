// Given two sorted integer arrays nums1 and nums2, merge

// Input: [3,2,5,1,2,6]
// Output: [1,2,2,3,5,6]

var merge = function (num1, num2) {
  let arr = [];
  while (num1.length && num2.length) {
    if(num1[0] < num2[0]) {
      arr.push(num1.shift());
    } else {
      arr.push(num2.shift());
    }
  }
  console.log(arr.concat(num1.slice().concat(num2.slice())));
  return arr.concat(num1.slice().concat(num2.slice()));
};

var mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log("Merge Sort", mergeSort([3,2,5,1,2,6]));

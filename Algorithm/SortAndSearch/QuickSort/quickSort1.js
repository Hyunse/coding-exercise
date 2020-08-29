// Quick Sort 1 : not in place

// Input: [3,2,5,1,2,6]
// Output: [1,2,2,3,5,6]

var quickSort = function(arr) {
  if(arr.length < 2) {
    return arr;
  }

  const pivot = [arr[0]];
  const left = [];
  const right = [];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else if(arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log("Quick Sort", quickSort([3,2,5,1,2,6]));

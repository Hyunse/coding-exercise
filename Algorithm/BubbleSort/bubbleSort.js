// Bubble Sort

// Input: [3,2,5,1,2,6]
// Output: [1,2,2,3,5,6]

var bubbleSort = function (arr) {
  let temp;

  for (let i = 0; i < arr.length - 1; i++) {
    for(let j  = 0; j < arr.length - 1 - i; j++) {
      // Compare j and j + 1
      if(arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp; 
      }
    }
  }
  return arr;
};


console.log(bubbleSort([3,2,5,1,2,6]));
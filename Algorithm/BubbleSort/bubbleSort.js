// Bubble Sort

// Input: [3,2,5,1,2,6]
// Output: [1,2,2,3,5,6]

var bubbleSort = function (arr) {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for(let j  = i+1; j < arr.length; j++) {
      // Compare i and i+1
      if(arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp; 
      }
    }
  }
  return arr;
};


console.log(bubbleSort([3,2,5,1,2,6]));
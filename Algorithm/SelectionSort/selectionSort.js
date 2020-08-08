// Selection Sort

// Input: [3,2,5,1,2,6]
// Output: [1,2,2,3,5,6]

var selectionSort = function (arr) {
  let min, temp;

  for (let i = 0; i < arr.length; i++) {
    // Set Min Index is i
    min = i;

    for (let j = i; j < arr.length; j++) {
      // Find min value
      if (arr[min] > arr[j]) {
        min = j;
      }

      // When reaching last j index
      if (j === arr.length - 1) {
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

console.log(selectionSort([3, 2, 5, 1, 2, 6]));

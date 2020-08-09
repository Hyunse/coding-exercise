// Input: [3,2,5,1,2,6]
// Output: [1,2,2,3,5,6]

var insertionSort = function(arr) {
  let i, j, key;

  for(i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while(j >= 0) {
      if(key < arr[j]) {
        arr[j+1] = arr[j]
      } else {
        break;
      }
      j--;
    }

    arr[j+1] = key;
  }

  return arr;
}

console.log("Insertion Sort", insertionSort([3,2,5,1,2,6]));
// Shell Sort

// Input: [3,2,5,1,2,6]
// Output: [1,2,2,3,5,6]

var shellInsertSort = function (arr, gap) {
  let i, j, key;

  for (i = gap; i < arr.length; i++) {
    key = arr[i];
    j = i;

    while(j >= gap) {
      if(key < arr[j - gap]) {
        arr[j] = arr[j - gap];
      } else {
        break;
      }
      j -= gap;
    }

    arr[j] = key;
  }

  return arr;
}

var shellSort = function (arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    arr = shellInsertSort(arr, gap);
    gap = Math.floor(gap / 2);
  }

  return arr;
};

console.log(shellSort([3, 2, 5, 1, 2, 6]));

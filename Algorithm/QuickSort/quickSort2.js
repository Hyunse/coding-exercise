// Quick Sort 2 : in place

// Input: [3,2,5,1,2,6]
// Output: [1,2,2,3,5,6]

var divide = function (arr, left, right) {
  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  let temp;

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return left;
};

var quickSort = function (arr, left = 0, right = arr.length - 1) {
  const partition = divide(arr, left, right);

  if (left < partition - 1) quickSort(arr, left, partition - 1);
  if (right > partition) quickSort(arr, partition, right);

  return arr;
};

console.log('Quick Sort', quickSort([3, 2, 5, 1, 2, 6]));

// Binary Search
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const binarySearch = (sortedArray, itemToFind) => {
  let lowIndex = 0;
  let highIndex = sortedArray.length - 1;

  while (lowIndex <= highIndex) {
    let mid = Math.floor((lowIndex + highIndex) / 2);
    
    if (sortedArray[mid] === itemToFind) {
      return mid;
    } else if (sortedArray[mid] < itemToFind) {
      lowIndex = mid + 1;
    } else {
      highIndex = mid - 1;
    }
  }
  return null;
};

console.log('BinarySearch: ', binarySearch(arr, 'b'));

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
    let sum = 0,
        startNum = (n - 1) * n + 1;

    for (let i = 0; i < n; i++) {
        sum += startNum + 2*i;
    }

    console.log(sum);
}

rowSumOddNumbers(1);
rowSumOddNumbers(42);

// Best Soltion
// function rowSumOddNumbersBest(n) {
//     return Math.pow(n, 3);
// }

// function rowSumOddNumbers(n) {
//     return n*n*n
// }
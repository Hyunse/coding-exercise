// Write a function that takes an (unsigned) integer as input // 
// and returns the number of bits that are equal to one in the binary representation of that number.

// Example: The binary representation of 1234 is 10011010010 // so the function should return 5 in this case

var countBits = function(n) {
    var butArr= n.toString(2).match(/1/gi);
  
    if(butArr != null && butArr.length > 0) {
        return butArr.length;
    }

    return 0;
};

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2
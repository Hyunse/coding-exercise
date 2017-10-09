// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    // Your code here
    let numStr = num.toString();
    let result = '';
    console.log(numStr.length);
    Array.prototype.map.call(numStr, (val, idx) => {
        if (val != '0') {
            if (idx != 0) result += ' + ';
            result += val * Math.pow(10, numStr.length - idx - 1);
        }
    });
    return result;
}


console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));

// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
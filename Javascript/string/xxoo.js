function XO(str) {

    let count = 0;

    Array.prototype.map.call(str.toLowerCase(), char => {
        if (char === 'x') {
            count--;
        } else if (char === 'o') {
            count++;
        }
        return char;
    });

    if (count != 0) {
        return false;
    } else {
        return true;
    }
}

console.log(XO('Xo'));

// Best 
function XOBest(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

console.log(XO("xxOo"));


// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);
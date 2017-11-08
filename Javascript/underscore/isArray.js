var nativeIsArray = Array.isArray;

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
var isArray = nativeIsArray || function (obj) {
    return toString.call(obj) === '[object Array]';
};

var testArr = [1, 2, 3];

function isArrayFunc(obj) {
    return  Object.prototype.toString.call(obj) === '[object Array]';
};

console.log(nativeIsArray(testArr));
console.log(isArrayFunc(1));
console.log(Object.prototype.toString.call([]));
console.log(isArray(testArr));
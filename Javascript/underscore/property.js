var property = function(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key]
    }
}

var getLength = property('length');

var testObj = {
    name: 'kim',
    length: 50
};

var testArr = [1,2,3,4,5];


console.log('getLength Obj : ' + getLength(testObj));
console.log('getLength Arr : ' + getLength(testArr));
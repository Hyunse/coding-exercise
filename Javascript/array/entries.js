var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

// entries next
console.log(eArr.next()); // { value: [0, 'a'], done: false}
console.log(eArr.next()); // { value: [1, 'b'], done: false}
console.log(eArr.next()); // { value: [2, 'c'], done: false}
console.log(eArr.next()); // { undeifined, done: true}

// for of entries
for(let [index, value] of arr.entries()) {
    console.log('Index : ' + index + ', Value : ' + value );
}

// Object entries() 존재 ECMA 2017
// var obj = { foo: 'bar', baz: 42 };
// var eObj = Object.entries(obj);

// console.log(eObj);
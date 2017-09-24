
function myConcat(sep) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    return argsArr.join(sep);
}

console.log(myConcat(',', 'kim', 'park', 'lee'));
console.log(myConcat('::', 'kim', 'park', 'lee'));
console.log(myConcat('  ', 'kim', 'park', 'lee'));

// 나머지 매개변수, 기본 매개변수 또는 비구조화된 매개변수와 함께 사용 가능
function foo(...args) {
    return arguments;
}

console.log(foo(1,2,3));
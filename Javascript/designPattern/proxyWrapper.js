/**
 * 프록시를 활용한 래퍼 기능 구현
 * 함수 호출시 전처리
 */
(function () {
    function wrap(func, wrapper) {
        return function () {
            var args = [func].concat(Array.prototype.slice.call(arguments));
            return wrapper.apply(this, args);
        };
    };

    function existingFunction () {
        console.log('Existing function is called with arguments');
        console.log(arguments);
    }

    var wrapperdFunction = wrap(existingFunction, function (func) {
        console.log('Wrapper fnction is called with arguments');
        console.log(arguments);
        func.apply(this, Array.prototype.slice.call(arguments, 1));
    });

    console.log('1. Calling exising function');
    existingFunction('first argument', 'second argument', 'third argument');

    console.log('2. Calling wrapped function');
    wrapperdFunction('first argument', 'second argument', 'third argument');

    // 기존 함수명과 같은 이름으로 래퍼 함수 활용
    (function() {
        var existingFunction = wrapperdFunction;
        console.log('3. Calling wrapped existing function');
        existingFunction('first argument', 'second argument', 'third argument');
    }());
}());
Function
===============
## arguments 객체

함수에 전달된 인수에 해당하는 Array같은 '객체'.

arguments 객체는 Array가 아님. Array와 비슷하지만 length 빼고는 어떤 Array 속성도 없음.

그러나 실제 Array로 변환 가능.

>var args = Array.prototype.slice.call(arguments);

arguments에 slice를 사용하면 일부 JavaScript 엔진(예를 들어 V8 - 자세한 정보는 여기)에서 최적화를 막음.

대안은 함수로서 멸시된(despised) Array 생성자를 사용하는 것

> var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments))

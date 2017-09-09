// 소스 간의 충돌은 모듈화를 하거나 클로저를 통해서 대부분 예방
// 클로저를 사용하면 일반적인 방법으로는 변숫값에 접근하기 힘들다.
var getVariable = 'global';
(function() {
    var getVariable = 'immediate function';

    insideFunction();
    console.log('2. Immidate function: '+ getVariable);

    function insideFunction() {
        console.log('1. Inside Function: ' + getVariable);
        getVariable = 'will I be global?';
    }
}());

console.log('3. Global: ' + getVariable);
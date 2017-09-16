/**
 * Object.create를 지원하지 않는 브라우저 사용자를 위해 임의로 만들어서 사용
 */
(function(){
    if(!Object.create) {
        Object.create = (function () {
            function F() {}
            return function (o) {
                F.prototype = o;
                return new F();
            }
        }());
    }
}())
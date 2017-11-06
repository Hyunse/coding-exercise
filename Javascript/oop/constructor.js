// underscore.js 에서
// Create a safe reference to the Underscore object for use below.
var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
};

// 사용자 정의 생성자 함수

// 생성자의 반환값
var testObj =  function () {
    this.name = 'kim'
};

// new 로 호출
var newTestObj1 = new testObj();

console.log(typeof newTestObj1);
console.log(newTestObj1.name);

// New 가 없이 호출
// New 가 없다면 객체 안의 this가 전역객체가 되버린다.
var newTestObj2 = testObj();

// console.log(typeof newTestObj2);
// console.log(window.name);

// 대안
// safe reference
var safeObj = function () {
    if (!(this instanceof safeObj)) {
        return new safeObj();
    }
    this.name = 'park';
}

var newSafeObj1 = safeObj();

console.log(typeof newSafeObj1);
console.log(newSafeObj1.name);
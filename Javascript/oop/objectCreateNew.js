/**
 * Object.create 와 new를 이용한 초기화
 */

function Person() {
    this.name = 'anonymous';
}

function Kim() {
    this.name = 'kim';
}

// Object.create 2번째 인자로 Kim.prototype의 생성자 속성을 읽기 전용으로 설정하여
// 기존에 있던 자바스크립트가 자체적으로 가지고 있었던, 생성자의 연결이 깨졌던 현상을 보완.
Kim.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Kim
    }
});

var kim = new Kim();
console.log(kim instanceof Kim);
console.log(kim instanceof Person);
console.log(kim.constructor);

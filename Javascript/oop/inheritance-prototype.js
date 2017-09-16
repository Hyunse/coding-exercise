/**
 * 프로토타입을 이용한 상속 구현.
 * 생성자(constructor) 속성은 객체가 가지고 있는 것이 아니라 프로토타입이 가지고 있고,
 * 객체에서 내부 링크(implicit link)로 프로토타입에 있는 생성자 속성을 참조한다.
 * 그런데 new Person()으로 객체를 생성하여 원래의 생성자를 가지고 있는 프로토타입을 덮어씌우면,
 * 자신의 생성자는 상실하고 새로 덮어씌운 new Person() 객체가 참조하는 생성자를 가지게 된다.
 */
function Person() {
    this.name = 'anoymous';
    this.sayHello = function () {
        console.log("Hello, my name is " + this.name );
    }
}

function Kim() {
    this.name = "KIM"
}

Kim.prototype = new Person();

var kim = new Kim();

kim.sayHello();
console.log(kim instanceof Person);
console.log(kim instanceof Kim);
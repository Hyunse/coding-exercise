/**
 * class와 extends를 사용한 상속
 */
class Person {
    constructor() {
        this.name = 'anonymous';
    }
}

class Kim extends Person {
    constructor() {
        super();
        this.name = "Kim";
    }
}

var kim = new Kim();
console.log(kim.name);
console.log(kim instanceof Kim);
console.log(kim instanceof Person);
console.log(kim.constructor);
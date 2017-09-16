/**
 * Object.create()
 * new 키워드를 쓰지 않고 객체생성.
 */

 /*
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
 */

 function Person(name) {
     this.name = name;
 }

 Person.prototype = {
     yell: function () {
         console.log("My name is " + this.name);
     }
 }

 // Object.create(prototype)
 var kim = Object.create(Person.prototype);
 kim.name = "kim";
 kim.yell();
/**
 * Object.create() 객체 초기화
 */

 function Person(name) {
     this.name = name;
 }

 Person.prototype = {
     yell: function () {
         console.log("My name is " + this.name);
     }
 }

var kim = Object.create(Person.prototype, {
    name: {
        value: "Kim",        // 설정할 속성의 값
        configurable: true,  // 속성을 지우거나 value 속성 이외의 설정 속성을 바꿀지 여부 
        enumerable: true,    // for-in 루프에서 해당 속성도 참조할지 여부 
                             // *for–in 구문은 일반 Object의 문자열 키(key)를 순회하기 위해 만들어진 문법
        writable: true       // 속성의 값 설정 가능 여부
        //get                // 속성을 참조하게 되면 참조용으로 호출할 함수
        //set                // 속성을 설정하게 되면 설정용으로 호출할 함수 

    }
});

kim.yell();

kim.name = "Park";
kim.yell(); // My name is Kim !? 

// Object.create 함수를 통해서 값만 설정하면 읽기 전용 속성이 되어 값을 수정할 수 없게 된다.

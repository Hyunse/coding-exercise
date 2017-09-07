var color1 = new String('blue');
var color2 = 'blue';
var color3 = String('blue');

console.log(color1 instanceof String); // true
console.log(color2 instanceof String); // false
console.log(color3 instanceof String); // false

console.log(color1 === color3); // false
console.log(color2 === color3); // true

// color2 === color3    ture
// ToString(value) -> 생성자로 호출 된게 아니라면 value를 반환 , 생성자로 호출했다면 String 객체로 반환
// Stirng('blue') 는 기본형으로 반환 되기때문에 true.

// *심볼(symbol) 은 고유하고 수정 불가능한 데이터 타입이며 주로 객체 속성(object property)들의 식별자로 사용된다.
//////////////////////////////////////////////
//////////////////////////////////////////////
//기본형은 추가속성을 선언 할 수 없다.
var str = new String('home');
str.location = 'busan';

console.log(str);

var str2 = 'home';
str2.location = 'seoul';

console.log(str2);

// prototype을 연계하면 기본형에서도 함수를 사용 가능

String.prototype.trime = function() {
    return this.replace(/^\s+|\s+$/g, "" );
};

// 기본형 속성에 접근하고자 할떄 내부적으로 String 객체로 변경
console.log("                   str               ".trime() === "str");
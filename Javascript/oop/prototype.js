function Car() {
    this.wheel = 4;
    this.beep = "BEEP";
};

Car.prototype.go= function () {
    console.log(this.beep);
};


function Truck() {
    this.wheel = 6;
    this.beep = "Hook";
}

Truck.prototype = new Car();

function SUV() {
    this.beep = "Wank";
}

SUV.prototype = new Car();

var truck = new Truck(),
    suv = new SUV();

console.log(truck.wheel); //6
console.log(suv.wheel); // 4
console.log(truck.beep); // Hook
console.log(suv.beep); // Wank
truck.go(); // Hook
suv.go(); // Wank

// 프로토타입 체인 (prototype chain)
// truck.go
// 1) truck 객체에 go 속성이 있는지 검사
// 2) Truck.prototype(new Car()) 에 go 속성이 있는지 검사
// 3) new Car()에 go 속성이 없으면 new Car()로 생성된 객체의 프로토타입인 Car.prototype의 go 속성이 있는지 검사
// 4) Car.prototype.go 속성 참조

// hasOwnProperty() 
// 해당 속성이 객체 자체의 속성인지 프로토타입 체인에 있는 속성인지 구분

function Person(name, blog) {
    this.name = name;
    this.blog = blog;
};

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.getBlog = function () {
    return this.blog;
};

var kim = new Person('kim','www.kimhyunse.com');

// for of : data 순회에 유용
// for prop in object : object를 순회할때 유용. array시 무작위 순회, 인덱스 문자열인점
// 프로토타입체인까지 순회
for(let prop in kim){
    if(kim.hasOwnProperty(prop)){
        console.log("kim[" + prop + "] = " + kim[prop]);
    }
}

// 해당 객체에 자주 접근해서 참조해야 하는 속성이라면 프로토타입에 있는 값은 기본값으로만 활용.
// 객체 자체의 속성으로 새로 추가하여 프로토타입 체인 탐색을 최소화 하는 것이 현명.
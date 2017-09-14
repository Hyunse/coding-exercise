// Function 으로 new
// Javascript의 function은 자바의 class와 생성자를 합쳐 놓은 개념
function Person1 (name, blog) {
    this.name = name;
    this.blog = blog;
}

var kim = new Person1('KimHyunse', 'www.kimhyunse.com');
console.log(kim.name);

// class 생성 가능
// function과 다르게 바로 실행하면 에러 발생 
class Person2 {
    constructor(name, blog) {
        this.name = name;
        this.blog = blog;
    }
}

var park = new Person2('ParkJisung', 'www.park.com');

console.log(park.name);
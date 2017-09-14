// 함수를 호출하는 방식
// 1 일반 함수로의 호출
// this = global this
function say(something) {
    console.log(something);
}

say('hi');

// 2 멤버 함수로의 호출
// this = kim
var kim = {
    say : function (something) {
        console.log(something);
    }
};

kim.say('hiyo');

// 3 call : (this, 인자)
// 4 apply : (this, 배열)
// 인자가 없을 시( null 또는 undefined) this = global this 
say.call(undefined, 'Hi call');
say.apply(undefined, ['Hi appply'])
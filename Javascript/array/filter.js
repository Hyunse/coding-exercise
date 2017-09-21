
//모든 작은 값 걸러내기
function isBigEnough(value) {
    return value >= 10;
}

var filtered = [12, 3, 5, 11, 13, 55].filter(isBigEnough);
console.log(filtered);

// JSON 무효한 값 거르기
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

function filterByID(obj) {
    // in 연산자는 명시된 속성이 명시된 객체에 존재하면 true를 반환
    if('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
        return true;
    } else {
        return false;
    }
}

var jsonFiltered = arr.filter(filterByID);
console.log('JSON Filter :: ' + jsonFiltered);
for( let obj of jsonFiltered ) {
    console.log(obj);
}

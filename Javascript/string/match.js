var str = 'abcdeftggdasdasgb';
var reg = /[a-c]/;
var result = str.match(reg);

console.log(result);

var reg2 = /[a-c]/gi;

result = str.match(reg2);

console.log(result);

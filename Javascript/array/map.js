var numbers1 = [1, 4, 9];
var roots = numbers1.map(Math.sqrt);

console.log(roots);

var numbers2 = [1, 4, 9];
var doubles = numbers2.map(function(num) {
  return num * 2;
});

console.log(doubles);

var map = Array.prototype.map;
var a = map.call('Hello world', function(x) {
    return x.charCodeAt(0);
});

console.log(a);

var s = '12345';
var reverse = [].map.call(s, x => {
    return x
}).reverse().join('');
// reverse().join('');

console.log(reverse);

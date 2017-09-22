// 배열 합
var sum = [0,3,5,5].reduce(function(pre, cur) {
    return pre + cur;
});

console.log(sum);

// 2차 -> 1차
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
  }, []);

  console.log(flattened);
var findTheDifference = function(s, t) {
  const tArr = t.split('');
  const tSet = new Set(t);

  s.split('').filter((ch) => tSet.delete(ch));

  return Array.from(tSet).join('');
};

console.log(findTheDifference('abcd', 'abcde'));
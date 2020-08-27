/* Tower Of Hanoi */

function solution(n) {
  const answer = [];

  const hanoi = (n, from, to) => {
    const dropBy = 6 - from - to;

    if(n === 1) {
      answer.push([from,to]);
    } else {
      hanoi(n-1, from, dropBy);
      answer.push([from,to]);
      hanoi(n-1, dropBy, to);
    }
  }

  hanoi(n,1,3)

  return answer;
}

console.log('Tower of Hanoi:', solution(3));
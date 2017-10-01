Regex
===============
## 정규식 표현
1
> var regex = /ab+c/;

2
> var regex = new RegExp('ab+c');

- \ : 특수문자를 특별하게 읽지 않고 문자 그대로 표현하기 위해 사용. ex)  /a*/ : 0 이상의 a , /a\*/ : a* 과 일치하는 문자
- ^ : 입력의 시작에 일치.
- $ : 입력의 끝과 일치.
- \* : 0회 이상 연속으로 반복되는 앞선 문자와 일치.  {0,} 와 동일.
> var regex = /bo*/;

> console.log(regex.test('A bird warbled'));  // true b와 일치

> console.log(regex.test('A goat grunted'));  // false 아무것도 일치 안함

- \+ : 1회 상 연속으로 반복되는 앞선 문자에 일치. {1,} 와 동일.

> var reg = /ab+/;

> console.log(reg.test('caaad')); // true

- ? : 0 또는 1개의 문자에 일치. {0,1}와 동일.

- . : 1개 문자와 일치.

- \cX : X는 A~Z까지의 문자중 하나와 일치.

- \d : 숫자 문자와 일치. [0-9].

- \D : 숫자 문자가 아닌 문자에 일치. [^0-9].

- \w : 밑줄 문자를 포함한 영숫자 문자에 일치. [A-Za-z0-9_].
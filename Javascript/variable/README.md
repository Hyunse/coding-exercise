# Javascript의 typeof
```
- Undifined : "undefined"
- Null      : "object"
- Boolean   : "boolean"
- Number    : "number"
- String    : "string"
- Symbol    : "symbol"
- Object    : "object" ( call 구현 x )
- Object    : "function" ( call 구현 o)
```
# call ? 
## 함수를 선언 후 호출 하는 방식 중 하나
```
- 함수뒤 ()
    fun()
- call
    fun.call(thisArg[, arg1[, arg2[, ...]]])
- apply
    fun.apply(thisArg, [argsArray])
```

# 상위 스코프에 있는 변수명을 찾는 단계
GetIdentifierReference
내부적으로 envRec의 환경레코드에 변수가 정의되었는지 확인 다음 없다면 상위 환경으로 재귀적으로
GetIdentifierReference() 함수를 호출한다. 이런식으로 변수 정의 환경 탐색을 재귀로 실행한다.
따라서 상위 스코프에 있는 변수를 탐색하는 것은 컴퓨팅 자원을 조금 소모한다.
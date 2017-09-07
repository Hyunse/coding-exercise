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
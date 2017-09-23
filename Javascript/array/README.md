Array
===============
## Array.prototype.filter()
> var new_array = arr.filter(callback[, thisArg])

제공된 함수로 구현된 테스트를 통과하는 모든 요소가 있는 새로운 배열을 만듬.

## Array.prototype.map()
> arr.map(callback[, thisArg])

callback함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 리턴값(결과값)으로 새로운 배열을 만듬.

## Array.prototype.reduce()
> arr.reduce(callback[, initialValue])

배열에 있는 구멍(빈 값)은 제외한 각 요소에 대해 callback 함수를 한 번 실행.

## Array.prototype.concat()
> var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

배열 뒤에 각 인수를 순서대로 붙인 새 배열을 만듬

## Array.prototype.entries()
> arr.entries()

배열의 각 인덱스에 대한 key/value 쌍을 가지는 새로운 Array Iterator 객체를 반환 
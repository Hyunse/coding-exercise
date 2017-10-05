// Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings.
// All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
    var str = this,
        arr = str.split(' ').filter(val => { return (val != '' ? true : false) });

    var camelCaseWord = arr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');

    return camelCaseWord;
}

"test case".camelCase(); // "TestCase"
"camel case method".camelCase(); // "CamelCaseMethod"
"say hello ".camelCase(); // "SayHello"
" camel case word".camelCase(); // "CamelCaseWord"
"".camelCase(); // ""

var nativeKeys = Object.keys;

var optimizeCb = function (func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function (value) {
      return func.call(context, value);
    };
    case 2: return function (value, other) {
      return func.call(context, value, other);
    };
    case 3: return function (value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function (accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function () {
    return func.apply(context, arguments);
  };
};

var property = function (key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key]
  }
};

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var getLength = property('length');
var isArrayLike = function (collection) {
  var length = getLength(collection);
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

// Is a given variable an object?
var isObject = function (obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
var _keys = function (obj) {
  if (!isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var keys = [];
  for (var key in obj) if (has(obj, key)) keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, keys);
  return keys;
};
// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
var has = function (obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
};
// Return the results of applying the iteratee to each element.
var map = function (obj, iteratee, context) {
  // iteratee = cb(iteratee, context);
  var keys = !isArrayLike(obj) && _keys(obj),
    length = (keys || obj).length,
    results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = keys ? keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
};

var testObj = {
  name: 'kim',
  age: 30
};

var testArr = [1,2,3];

var inter = (value, index, context) => {
    return value + ' hi';
}

console.log(map(testArr,inter));
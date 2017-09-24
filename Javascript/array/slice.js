// Array like Object
function list() {
    return Array.prototype.slice.call(arguments);
  }
  
console.log(list(1, 2, 3));


// slice bind
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function listBind() {
return slice(arguments);
}
  
console.log(listBind(1, 2, 3)); 
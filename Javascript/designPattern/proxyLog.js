

var car = {
    beep: function beep() {
        console.log('beep');
    },
    brake: function brake() {
        console.log('stop!');
    },
    accelerator: function accelerator() {
        console.log('go');
    }
};

function wrap(func, wrapper) {
    return function() {
        // Array.prototype.slice.call(arguments)는 arguments.slice(), 즉 주어진 인자들의 배열을 복사한 배열을 얻는 역할
        var args = [func].concat(Array.prototype.slice.call(arguments));
        return wrapper.apply(this, args);
    }
}

function wrapObject(obj, wrapper) {
    var prop;
    for(prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] === 'function') {
            obj[prop] = wrap(obj[prop], wrapper);
        }
    }
}

wrapObject(car, function (func) {
    console.log(func.name + ' has benn ivoked');

    console.log(arguments);
    func.apply(this, Array.prototype.slice(arguments, 1));
});

car.accelerator();
car.beep();
car.brake();
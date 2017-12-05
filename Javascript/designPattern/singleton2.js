// closure 

var Universe;

(function () {
    var instance;

    Universe = function Universe() {

        if(instance) {
            return instance;
        }

        instance = this;

        this.start_time = 0;
        this.bang = 'Big';
    }
}());

var uni = new Universe();
var uni2 = new Universe();

console.log(uni === uni2);
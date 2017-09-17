/**
 * 모둘 패턴의 기본 패턴
 */


var myLibrary = (function () {
    var myLibrary = {
        helloworld : function () {
            console.log('HelloWorld');
        },
        hello : {
            world : function () {
                console.log("Hi");
            }
        }
    }
    return myLibrary;
}());

myLibrary.helloworld();
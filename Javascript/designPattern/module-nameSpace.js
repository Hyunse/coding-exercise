/**
 * name space 활용한 모듈 확장
 */

 (function (windows, undefined){

    var _myLibrary = window.myLibrary;
    if(!_myLibrary) {
        _myLibrary = {};
    }
    if(!_myLibrary.kim) {
        _myLibrary.kim = {};
    }
    _myLibrary.kim.sayHello = function () {
        console.log("Hello, my name is Kim");
    };
    
    window.myLibrary = _myLibrary;
 }(window));
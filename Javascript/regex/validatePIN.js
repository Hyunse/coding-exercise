// codewar 문제
/**
 * ATM machines allow 4 or 6 digit PIN codes 
 * and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 */

/**
 * validatePIN("1234") === true 
 * validatePIN("12345") === false
 * validatePIN("a234") === false
 */
// My Solution
function validatePIN(pin) {
    //return true or false
    var numCheck = /^[0-9]*$/;
    if (numCheck.test(pin) && (pin.length == 4 || pin.length == 6)) {
        return true;
    } else {
        return false;
    }
}
// Other Best Solution
// ^       a string that starts with...
// (       either
//   \d    a digit (0-9)...
//   {4}   that repeats four times...
// |       or
//   \d    a digit (0-9)...
//   {6}   that repeats six times...
// )
// $       and then ends
function validatePINBest(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
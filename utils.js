"use strict";
exports.__esModule = true;
exports.isPalindrome = void 0;
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;

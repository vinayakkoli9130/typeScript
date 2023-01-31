"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//npm
//npm i
//-g
var x;
x = "Vinayak Koli";
console.log(x);
var a;
a = 200;
var b;
b = 100;
console.log("Addition of a and b-:", a + b);
console.log("-----------------Inheritance---------------------------------");
//parent class , Base class , Super 
var Animal = /** @class */ (function () {
    // parameterised constructor 
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distnace) {
        console.log("".concat(distnace));
    };
    return Animal;
}());
//child class , sub , derived
//Dog class derived from Animal class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function (barking) {
        console.log(barking);
        // console.log('bho bho');
    };
    return Dog;
}(Animal));
var objDog = new Dog("Tommy");
console.log(objDog);
objDog.bark("Bho Bho");
objDog.move(10);
objDog.bark("bhou bhou");
console.log("-------------------------------------------------------------");
//3rd lecture Tutorial
console.log("----------------String In typeScript----------------------------");
var s1 = "you are the creater of your destiny";
var s2 = "powerful people come from powerful places";
var s3 = '';
console.log("----------------boolean In typeScript----------------------------");
var b1 = true;
var b2 = false;
var b3;
console.log("--------------function return boolean value-------------");
function test() {
    return b3 = false;
    console.log('line no 13', b3); // o/p false
}
console.log('line no 16', test()); // undefined 
// log("test");
// The unknown type is only assignable to the any type and the unkown type itself.//
// let val: any; 
// let value : unknown;
// let value1: unknown = vvvvvv;
// //let value2: boolean = value;
// let s: string = val;
console.log("toFixed() method is used on number not on others dataType");
function log(value) {
    console.log(value.toFixed(4)); //262.7727 used to how much decimal number can be show or fixed
}
log(262.77272626);
console.log("====================================================================================");
function loadString() {
    return '  Some String  ';
}
function loadNumber() {
    return 123.456;
}
var someVariable;
someVariable = loadString();
console.log(someVariable.trim());
// // to avoid this we can use unknown.
var someVariables;
someVariables = loadString();
if (typeof someVariables == 'string') {
    console.log(someVariables.trim());
}
someVariables = loadNumber();
if (typeof someVariables == 'number') {
    console.log(someVariables.toFixed(2));
}
console.log("-----------------------------------------------------------------------------------------");
// // typecasting \\ \\
// let leet;
// later 
// leet = '1234556';
// // use as number
// const numberes = leet as number;
// console.log(numberes === 1234556);
// console.log(numberes);
console.log("--------------:Type Casting:--------------------");
//using (+) plus operator you can perform type casting.
var leet;
// later 
leet = '1234556';
// use as number
var numberes = +leet;
console.log(numberes === 1234556);
console.log(numberes);
var utils_1 = require("./utils");
console.log((0, utils_1.isPalindrome)('madam'));
console.log((0, utils_1.isPalindrome)('madan'));
console.log("-----------------check typeOf-------------------------------------");
function shows(value) {
    if (typeof value == 'number') {
        console.log("To Fix Decimal Point Of Number-:", value.toFixed(3));
    }
    else {
        console.log("Other Values-:", value);
    }
    // console.log(value.toFixed(3));
}
shows(42.32766);
shows("test");
shows('Hello world');
console.log("-------------Type Assertion----------------------------------");
//Using "as" use can perform type assertion.
function load() {
    return 'Hello World  ';
}
var hello = load();
// const trimmed = hello.trim();
var trimmed = hello.trim(); //hello can hold load() function.
console.log(trimmed);
console.log("----------------Palindrome Program-----------------------------");
//Modules
var variable = require("./utils");
console.log(variable.isPalindrome('madam')); // true
console.log(variable.isPalindrome('madan')); // false

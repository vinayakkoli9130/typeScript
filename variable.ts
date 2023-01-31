//npm
//npm i
//-g
let x : string;
x="Vinayak Koli";
console.log(x)

let a: number;
a=200;
let b:number;
b=100;

console.log("Addition of a and b-:",a+b);
console.log(`-----------------Inheritance---------------------------------`);

//parent class , Base class , Super 
class Animal {
     name: string;
    // parameterised constructor 
    constructor(name: string) {
        this.name = name;
    }
     move(distnace: number) {
        console.log(`${distnace}`);
     }
    }
     //child class , sub , derived
     //Dog class derived from Animal class
    class Dog extends Animal {
     constructor(name: string) {
        super(name);
     }
      bark(barking: string) 
      {
        console.log(barking);
        // console.log('bho bho');
      }
    }
     var objDog = new Dog("Tommy");
console.log(objDog);
    objDog.bark("Bho Bho");
    objDog.move(10);
     objDog.bark("bhou bhou");
     console.log(`-------------------------------------------------------------`);
     
    //3rd lecture Tutorial
console.log(`----------------String In typeScript----------------------------`);

var s1: string = "you are the creater of your destiny";
var s2 : string = `powerful people come from powerful places`; 
var s3 : string = ''; 

console.log(`----------------boolean In typeScript----------------------------`);
var b1 : boolean = true;
var b2: boolean = false;
var b3: boolean;

console.log(`--------------function return boolean value-------------`);

function test() : boolean {
  return  b3 = false;
    console.log('line no 13', b3); // o/p false
}
console.log('line no 16',test());  // undefined 
// log("test");

// The unknown type is only assignable to the any type and the unkown type itself.//
// let val: any; 
// let value : unknown;

// let value1: unknown = vvvvvv;

// //let value2: boolean = value;

// let s: string = val;

 
console.log(`toFixed() method is used on number not on others dataType`);
function log(value) 
{
    console.log(value.toFixed(4));//262.7727 used to how much decimal number can be show or fixed
}
log(262.77272626)

console.log(`====================================================================================`);

function loadString(): any {
    return '  Some String  ';
}
function loadNumber(): any {
    return 123.456;
}
let someVariable : any;
someVariable = loadString();
console.log(someVariable.trim());
// // to avoid this we can use unknown.

let someVariables : any ;
someVariables = loadString();
if (typeof someVariables == 'string') {
    console.log(someVariables.trim());
}
someVariables = loadNumber();

if( typeof someVariables == 'number') 
{
    console.log(someVariables.toFixed(2))
}
console.log(`-----------------------------------------------------------------------------------------`);


// // typecasting \\ \\

// let leet;

// later 

// leet = '1234556';

// // use as number

// const numberes = leet as number;

// console.log(numberes === 1234556);
// console.log(numberes);

console.log(`--------------:Type Casting:--------------------`);
//using (+) plus operator you can perform type casting.
let leet;
// later 
leet = '1234556';
// use as number
const numberes = +leet;
console.log(numberes === 1234556);
console.log(numberes);

import {isPalindrome} from './utils';
console.log(isPalindrome('madam'));
console.log(isPalindrome('madan'));
console.log(`-----------------check typeOf-------------------------------------`);
function shows(value: unknown) {
    if (typeof value == 'number') {
    console.log("To Fix Decimal Point Of Number-:",value.toFixed(3));
    } else {
    console.log("Other Values-:",value);
    }
    // console.log(value.toFixed(3));
     }
     shows(42.32766);
    shows("test");
    shows('Hello world');
console.log(`-------------Type Assertion----------------------------------`);
//Using "as" use can perform type assertion.
    function load(): unknown {
      return 'Hello World  ';
       }
      let hello = load();
      // const trimmed = hello.trim();
      const trimmed = ( hello as string).trim();//hello can hold load() function.
      console.log(trimmed);
console.log(`----------------Palindrome Program-----------------------------`);
//Modules
      import * as variable from './utils';
console.log(variable.isPalindrome('madam')); // true
console.log(variable.isPalindrome('madan')); // false
      
 
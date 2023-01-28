// parameterised constructor .
// class Person1 {
//     public fname: string;
//     public age: number;
//     // parameterised constructor .
//     constructor(fname: string, age: number) {
//         this.fname = fname;
//         this.age = age;
//     }
// }
// const jack = new Person1('Jack', 30);
// console.log(jack.fname, jack.age);
var Person = /** @class */ (function () {
    // parameterised constructor.
    //constructor is function and hence can be  parameters.
    function Person(fname, age) {
        this.fname = fname;
        this.age = age;
    }
    return Person;
}());
var jack = new Person('Jack', 30);
console.log(jack.fname, jack.age);
console.log(jack);

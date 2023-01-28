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


class Person{
    // parameterised constructor.
    //constructor is function and hence can be parameters.
    constructor( public fname: string, public age: number) {

    }
}

const jack = new Person('Jack', 30);
console.log(jack.fname, jack.age);
console.log(jack);

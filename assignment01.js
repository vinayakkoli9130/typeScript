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
var num = 123; //we can assign value only number otherwise its return true
console.log(num);
console.log(typeof num);
var string1 = "Hello World";
console.log(string1, typeof (string1));
var booleans = true;
console.log(booleans, typeof booleans);
var x = 100;
var y = 200;
console.log(x + y);
// let str:string|number=373
// console.log(str);
// console.log(typeof str);
console.log("-------------Inheritance------------");
//parent class/base class/super class
var Animal = /** @class */ (function () {
    function Animal(name, age, isMarried) {
        this.name = name,
            this.age = age,
            this.isMarried = isMarried;
    }
    Animal.prototype.move = function (distance) {
        console.log(distance);
    };
    return Animal;
}());
//child class/sub class/derived class
//dog is child class/sub class/derived class of Animal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, isMarried) {
        return _super.call(this, name, age, isMarried) || this;
    }
    Dog.prototype.bark = function (barking) {
        console.log(barking);
    };
    return Dog;
}(Animal));
var objDog = new Dog("Tommy", 2.5, true);
console.log(objDog);
objDog.move(10);
objDog.bark("Bhou Bhou");
console.log("-------------------------------------------");
var Animals = /** @class */ (function () {
    function Animals(id, name, age, department) {
        this.id = id, this.name = name, this.age = age, this.department = department;
    }
    Animals.prototype.move = function (distance) {
        console.log(distance);
    };
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs(id, name, age, department) {
        return _super.call(this, id, name, age, department) || this;
    }
    Dogs.prototype.bark = function (barking) {
        console.log(barking);
    };
    return Dogs;
}(Animals));
var tommy = new Dogs(1, "Tommy", 2, "Black Dog");
console.log(tommy);
tommy.move(20);
tommy.bark("Bhou Bhou");
// let emp1=new Employee(1,"Vinayak",25,"It")
// console.log(emp1);
// emp1.salary(100000)
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(id, name, age, department) {
        return _super.call(this, id, name, age, department) || this;
    }
    Cat.prototype.color = function (rgb) {
        console.log(rgb);
    };
    return Cat;
}(Animals));
var cat = new Cat(2, "Manny", 1, "white cat");
console.log(cat);
cat.move(20);
cat.color("Navy White");
var b3;
console.log("-------------function return boolean value------------");
function test() {
    return b3 = true;
}
console.log(test());
console.log("--------------toFixed()------------");
/*toFixed()-:used to how much decimal number can be show or fixed*/
function value(val) {
    return val.toFixed(3);
}
console.log(value(5));
console.log(value(23.46364764));
console.log(value(21.3));
function loadString() {
    return '  Some String     ';
    // return true
}
function loadNumber() {
    return 123.4567;
}
var someVariable;
someVariable = loadString();
console.log(someVariable.length);
console.log(someVariable.trim());
//to avoid this we can use unknown type
var someVariables;
someVariables = loadString();
//  console.log(someVariables.length);
if (typeof someVariables === "string") {
    console.log(someVariables.trim().length);
}
console.log("Type Casting");
//use + operator to type casting
var leet = "12345";
var numbers = +leet;
console.log(numbers === 12345);
console.log("-----------check typeof()-----------");
function shows(value) {
    if (value == 'number') {
        console.log(value.toFixed(3));
    }
    else {
        console.log(value);
    }
}
shows(56);

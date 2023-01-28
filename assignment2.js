console.log("-------Practice on Union Type------------------");
console.log("-------Using Function------------");
function employee(name) {
    console.log("".concat(name));
}
employee("Vinayak");
employee(7620352536);
employee(true);
console.log("----------Using Variable-------------------------");
var emp;
emp = "Vinayak";
console.log("String-:", emp);
emp = 7620352536;
console.log("Number-:", emp);
emp = true;
console.log("boolean-:", emp);
console.log("----------Class parameter properties-----------");
var Name = /** @class */ (function () {
    function Name(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    return Name;
}());
var vinny = new Name("Vinayak", 23, false);
console.log(vinny);
console.log("--------Intersection Type-------------");
function inf(param) {
    console.log("Dear ".concat(param.name, " .\n    I hope you have received our email at ").concat(param.email, ".\n    We will call you at ").concat(param.number, " shortly ,"));
}
// let information:Names & Emails & Mobile  ={name:"Vinayak",email:"vinayakkoli9130@gmail.com",number:7620352536}
var informations = { name: "Vinayak", email: "vinayakkoli9130@gmail.com", number: 7620352536 };
inf(informations);
console.log("--------------Optional Parameter-------------");
function empid(name, age, isMarried) {
    console.log("Name-:", name);
    console.log("Age-:", age);
    if (isMarried !== undefined) {
        console.log("Is Married=:", isMarried);
    }
}
empid("Vinayak", 23);
empid("Arman", 24, true);

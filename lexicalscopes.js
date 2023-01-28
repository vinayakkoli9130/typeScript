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
//lexicalscope/lexicalthis-:by using arrow function we can access a particular class member.
//without arrow function they can't perform growOld() method operation
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () {
            _this._age++; //return
        };
        this._age = age;
    }
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var objPerson1 = new Person(4); // object 
// objPerson1.growOld();
var growAge = objPerson1.growOld; // 
growAge();
console.log('age', objPerson1.age());
// console.log('Age',objPerson1.growOld());// return
console.log("======================================================================");
var MoterScical = /** @class */ (function () {
    function MoterScical() {
    }
    MoterScical.prototype["while"] = function () {
        return "Four Whelear";
    };
    MoterScical.prototype.carborator = function () {
        return " Available Carborator";
    };
    MoterScical.prototype.stearing = function () {
        return "Power Stearing";
    };
    return MoterScical;
}());
var Platina = /** @class */ (function (_super) {
    __extends(Platina, _super);
    function Platina() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Platina.prototype.price = function () {
        return 90000;
    };
    Platina.prototype.color = function () {
        return "Black";
    };
    Platina.prototype.average = function () {
        return 60.56;
    };
    return Platina;
}(MoterScical));
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.price = function () {
        return 120000;
    };
    Hero.prototype.color = function () {
        return "Silver";
    };
    Hero.prototype.average = function () {
        return 55.67;
    };
    return Hero;
}(MoterScical));
var platina = new Platina();
var hero = new Hero();
console.log("Platina Bike Color-:", platina.color());
console.log("Hero Bike Color-:", hero.color());
console.log("==============================================================================");
var Emps = /** @class */ (function () {
    function Emps(name, paymentPerHour) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }
    return Emps;
}());
var Cons = /** @class */ (function (_super) {
    __extends(Cons, _super);
    function Cons(name, paymentPerHour, hoursOfWorking) {
        var _this = _super.call(this, name, paymentPerHour) || this;
        _this.hoursOfWorking = hoursOfWorking;
        return _this;
    }
    Cons.prototype.calculate = function () {
        return this.paymentPerHour * this.hoursOfWorking;
    };
    return Cons;
}(Emps));
var FullTimes = /** @class */ (function (_super) {
    __extends(FullTimes, _super);
    function FullTimes(name, paymentPerHour) {
        return _super.call(this, name, paymentPerHour) || this;
    }
    FullTimes.prototype.calculate = function () {
        return this.paymentPerHour * 8;
    };
    return FullTimes;
}(Emps));
var contracts = new Cons("Vijay", 8, 10);
var fullTime = new FullTimes("Vinayak", 9);
console.log(contracts);
console.log(fullTime);
console.log(contracts.calculate());
console.log(fullTime.calculate());

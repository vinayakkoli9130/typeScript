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
var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars.prototype.wheel = function () {
        return "4 Wheeler";
    };
    Cars.prototype.checkAc = function () {
        return "Ac Is Available";
    };
    Cars.prototype.callFacility = function () {
        return "Call Facility Supported";
    };
    return Cars;
}());
var Toyata = /** @class */ (function (_super) {
    __extends(Toyata, _super);
    function Toyata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyata.prototype.price = function () {
        return 1000000;
    };
    Toyata.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyata.prototype.color = function () {
        return "White";
    };
    Toyata.prototype.gps = function () {
        return "Gps Is Not Available In Toyata";
    };
    return Toyata;
}(Cars));
var Hundyais = /** @class */ (function (_super) {
    __extends(Hundyais, _super);
    function Hundyais() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundyais.prototype.price = function () {
        return 900000;
    };
    Hundyais.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyais.prototype.color = function () {
        return "Gray";
    };
    Hundyais.prototype.gps = function () {
        return "GPS Available In Hundyai";
    };
    return Hundyais;
}(Cars));
var toyata = new Toyata();
var hundyai = new Hundyais();
console.log("---------------------:1) Toyota Car Information:------------------------------");
console.log("Price Of Toyota Car Is-:", toyata.price());
console.log("Total Seats In Toyota Car Is-:", toyata.getTotalSeats());
console.log("Color Of Toyota Car Is-:", toyata.color());
console.log("GPS Available Or Not In Toyota Car-:", toyata.gps());
console.log("---------------------:2) Hundai Car Information:------------------------------");
console.log("Price Of Hundai Car Is-:", hundyai.price());
console.log("Total Seats In Hundai Car Is-:", hundyai.getTotalSeats());
console.log("Color Of Hundai Car Is-:", hundyai.color());
console.log("GPS Available Or Not In Hundai Car-:", hundyai.gps());

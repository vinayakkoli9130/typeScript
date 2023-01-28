var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.display = function () {
        return 23;
    };
    return Product;
}());
var product = new Product();
console.log(product.display());
console.log(product.name);
var EXCEL = /** @class */ (function () {
    function EXCEL() {
    }
    EXCEL.prototype.print = function () {
        console.log('EXCEL');
    };
    return EXCEL;
}());
var DOC = /** @class */ (function () {
    function DOC() {
    }
    DOC.prototype.print = function () {
        console.log("DOC");
    };
    return DOC;
}());
var PDF = /** @class */ (function () {
    function PDF() {
    }
    PDF.prototype.print = function () {
        console.log("PDF");
    };
    return PDF;
}());
var objEXCEL = new EXCEL();
objEXCEL.print();
var pdf = new PDF();
pdf.print();
console.log("--------------:Student Information Using Interface:------------------");
var Arman = /** @class */ (function () {
    function Arman() {
        this.name = "Arman";
        this.collegeName = "D.Y.Patil Kolhapur";
        this.age = 24;
    }
    return Arman;
}());
var Mahesh = /** @class */ (function () {
    function Mahesh() {
        this.name = "Vinayak";
        this.collegeName = "Sangola College Sangola";
        this.age = 23;
    }
    return Mahesh;
}());
var mahesh = new Mahesh();
console.log(mahesh.name, mahesh.collegeName, mahesh.age);
var arman = new Arman();
console.log(arman);

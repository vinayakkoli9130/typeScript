var math = Number(prompt("maths-:"));
var physics = Number(prompt("physics-:"));
var chem = Number(prompt("Chemestry-:"));
console.log("Math-:", math);
console.log("Physics-:", physics);
console.log("Chemestry-:", chem);
var marks = math + physics + chem;
var average = marks / 3;
console.log("The Average Of Three Subjects Is-:", average);
var grade = average;
if (grade < 70) {
    console.log("Grade-:C Grade");
}
 if (grade > 70 || grade < 90) {
    console.log("Grade-:B Grade");
}
 (grade > 90) {
    console.log("Grade-:A Grade");
}

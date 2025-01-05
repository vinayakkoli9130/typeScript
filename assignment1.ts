let math=Number( prompt(`maths-:`))
let physics=Number( prompt(`physics-:`))
let chem=Number( prompt(`Chemestry-:`))
console.log("Math-:",math);
console.log("Physics-:",physics);
console.log("Chemestry-:",chem);
let marks=math+physics+chem;
let average=marks/3
console.log("The Average Of Three Subjects Is-:",average);

let grade =average//
if (grade<70) {
console.log(`Grade-:C Grade`);
}
if (grade>70 || grade<90) {
    console.log(`Grade-:B Grade`);  
}
if (grade>90) {
    console.log(`Grade-:A Grade`);
}


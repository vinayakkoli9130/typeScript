//enum-:enum is collection of constunt value.
//enums are a new data type supported in typescript.
enum Gender {
    Other, 
    Male=0,   // 0
    Female=1  // 1
}

console.log(Gender.Male);
console.log(Gender.Female);

console.log(Gender[0]);
console.log(Gender[1]);
console.log(Gender[2]);


// enum UserLogin {
//     Email,
//     Social
// }
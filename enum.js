//
var Gender;
(function (Gender) {
    Gender[Gender["Other"] = 0] = "Other";
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female"; // 1
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
console.log(Gender[2]);
// enum UserLogin {
//     Email,
//     Social
// }

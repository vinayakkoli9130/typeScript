//reverse string
function reverses(val) {
    return val.split('').reverse().join('');
}
console.log(reverses("MOHIT"));
//using for loop
var str = "Nayan";
var rvsString = [];
for (var i = 0; i < str.length; i++) {
    var el = str[i];
    rvsString.unshift(el);
}
console.log(rvsString);

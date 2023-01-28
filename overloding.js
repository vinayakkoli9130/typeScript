// function / method overloading-: same name with different parametres or arguments.
function doubleMe(x) {
    if (x && typeof x === 'number') //&& and operator check condition.
     {
        console.log(x * 2);
    }
    else if (typeof x === 'string') {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) { // ["a"]
        return x.map(function (name) { return console.log(name); });
    }
}
doubleMe(2); // o/p 4 
doubleMe('Jack'); // jack jack 
doubleMe(["a"]); // a

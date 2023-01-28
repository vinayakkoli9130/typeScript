// function / method overloading-: same name with different parametres or arguments.

//Function Declaration\\
function doubleMe(x: number);
function doubleMe(x: string);
function doubleMe(x: string[]);

function doubleMe(x: any) {
    if(x && typeof x === 'number') //&& and operator check condition.
    {
        console.log(x*2);
    } else if ( typeof x === 'string') {
        console.log(x + " " + x)
    } else if(Array.isArray(x)) { // ["a"]
        return x.map(name => console.log(name))
    }
}
doubleMe(2); // o/p 4 
doubleMe('Jack') // jack jack 
doubleMe(["a"]) // a



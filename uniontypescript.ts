//Union Type-:Combining Different Data Type.Using Pipe (|).
    //string   or number combining
var sn: string | number;
sn = 'codemind';
console.log(sn);
sn = 100; 
console.log(sn);
//input combining string and string array
function formatCommandLine(input: string | string[]) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}
console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // hello world
// console.log(formatCommandLine(123457));
//reverse string

function reverses(val:string){
    return val.split('').reverse().join('')
}
console.log(reverses("MOHIT"));

//using for loop
let str:string="Nayan"
let rvsString=[]
for(let i=0;i<str.length;i++){
    const el=str[i]
   rvsString.unshift(el)  
}
console.log(rvsString);

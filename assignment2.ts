console.log("-------Practice on Union Type------------------");
//union type-:union type is combination of different data type.using pipe operator (|).
console.log(`-----------Using Function------------`);

function employee(name:string| number |boolean) {
    console.log(`${name}`); 
}
employee("Vinayak")
employee(7620352536)
employee(true)
console.log(`----------Using Variable-------------------------`);

var emp:string|number|boolean
emp="Vinayak";
console.log("String-:",emp);
emp=7620352536
console.log("Number-:",emp);
emp=true;
console.log("boolean-:",emp);
console.log(`----------Class parameter properties-----------`);
class Name{
constructor(public name:string ,public age:number,public isMarried:boolean){//
}
}
let vinny=new Name("Vinayak",23,false)
console.log(vinny);

console.log(`--------Intersection Type-------------`);//intersection combing differnt data type.using and (&) operator.
type Names={
name:string;
}
type Emails={
    email:string
}
type Mobile={
    number:number
}
type Info=
&Names&Emails&Mobile;
function inf(param:Info) {
    console.log(`Dear ${param.name} .
    I hope you have received our email at ${param.email}.
    We will call you at ${param.number} shortly ,`) ;   
}
// let information:Names & Emails & Mobile  ={name:"Vinayak",email:"vinayakkoli9130@gmail.com",number:7620352536}
let informations:Info={name:"Vinayak",email:"vinayakkoli9130@gmail.com",number:7620352536}
inf(informations)


console.log(`--------------Optional Parameter-------------`);

function empid(name:string,age:number,isMarried?:boolean) {
    console.log("Name-:",name);
    console.log("Age-:",age);

    if (isMarried !== undefined) {
        console.log("Is Married=:",isMarried);
        
        
    }   
}
empid("Vinayak",23)
empid("Arman",24,true)










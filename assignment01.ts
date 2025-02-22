let num:number=123//we can assign value only number otherwise its return true
console.log(num);
console.log(typeof num);

let string1:string="Hello World"
console.log(string1,typeof(string1));

let booleans:boolean=true

console.log(booleans,typeof booleans);

let x:number=100
let y:number=200
console.log(x+y);

// let str:string|number=373
// console.log(str);
// console.log(typeof str);

console.log("-------------Inheritance------------");
//parent class/base class/super class
class Animal{
    name:string
    age:number
    isMarried:boolean
    constructor(name:string,age:number,isMarried:boolean){
this.name=name,
this.age=age,
this.isMarried=isMarried
    }
    move(distance:number){
        console.log(distance);
        
    }
}
//child class/sub class/derived class
//dog is child class/sub class/derived class of Animal
class Dog extends Animal{
constructor(name:string,age:number,isMarried:boolean){
    super(name,age,isMarried);
}
bark(barking:string){
console.log(barking);

}
}
let objDog= new Dog("Tommy",2.5,true)
console.log(objDog);
objDog.move(10)
objDog.bark("Bhou Bhou")
console.log("-------------------------------------------");

class Animals{
    id;
    name;
    age;
    department;
    constructor(id:number,name:string,age:number,department:string){
this.id=id,this.name=name,this.age=age,this.department=department
    }
  move(distance:number){
    console.log(distance);
    
  }
}

class Dogs extends Animals{
    constructor(id:number,name:string,age:number,department:string){
        super(id,name,age,department)
    }
    bark(barking:string){
        console.log(barking);
        
    }
}

let tommy=new Dogs(1,"Tommy",2,"Black Dog")
console.log(tommy);
tommy.move(20)
tommy.bark("Bhou Bhou")
// let emp1=new Employee(1,"Vinayak",25,"It")
// console.log(emp1);
// emp1.salary(100000)
class Cat extends Animals{
    constructor(id:number,name:string,age:number,department:string){
        super(id,name,age,department)
    }
    color(rgb:string){
        console.log(rgb);
        
    }
}
let cat=new Cat(2,"Manny",1,"white cat")
console.log(cat);
cat.move(20)
cat.color("Navy White")

let b3:boolean
console.log("-------------function return boolean value------------");
function test():boolean{
    return b3= true
   
    
}
console.log(test());

console.log("--------------toFixed()------------");
/*toFixed()-:used to how much decimal number can be show or fixed*/
function value(val):number{
return val.toFixed(3)
}
console.log(value(5));
console.log(value(23.46364764));
console.log(value(21.3));

function loadString():any{
    return '  Some String     '
    // return true
}
function loadNumber():any{
    return 123.4567
}
 let someVariable:any
 someVariable=loadString()
 console.log(someVariable.length);
 
 console.log(someVariable.trim());

 //to avoid this we can use unknown type

 let someVariables:any
 someVariables=loadString()
//  console.log(someVariables.length);
 
 if(typeof someVariables==="string"){
    console.log(someVariables.trim().length);
    
 }
console.log("Type Casting");
//use + operator to type casting
let leet="12345"
const numbers=+leet
console.log(numbers===12345);

console.log("-----------check typeof()-----------");
function shows(value : unknown){
    if(value == 'number'){
        
        
    }else{
console.log(value);

    }
}
shows(56)
 




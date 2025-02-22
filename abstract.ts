//Abstract Class-:abstract is keyword, abtract class is typicaly used definde comman behevior/property.
//Abstract-:abstract is keyword. they have not body only can declare.
//Abstract Class-:abstract is keyword, abtract class is tipicaly used definde comman behevior/property.
// in abstract class we can create abstract methods as well as non-abstract method.
abstract class Car {//abstract class
    Wheel(): string {//non abstract method-:A Method Have Body({ }) Is Called As Abstract Method. 
        return '4 wheeler';
    }

    CheckAC(): string {
        return 'Ac is available';
    }

    CallFacility() : string {
        return "Call facility supported"
    }

    abstract Price(): number;//abstract method
    abstract getTotalSeats(): number;
    abstract Color(): string;
}

class Hundyai extends Car {
    Price(): number {
        return 900000;
    }
    getTotalSeats(): number {
        return 7;
    }
    Color(): string {
        return 'gray';
    }
}

let hundai = new Hundyai();

console.log(hundai.CallFacility());

class Toyota extends Car {
    Price(): number {
       return 1000000;
    }
    getTotalSeats(): number {
       return 5;
    }
    Color(): string {
        return 'white';
    }
   
}

class Tata extends Car {
    Price(): number {
        return 11000000;
     }
     getTotalSeats(): number {
        return 7;
     }
     Color(): string {
        return 'white';
    }
}

let toyota = new Toyota();

console.log(toyota.CallFacility());
console.log(toyota.Wheel());

// 

// Price -- both have price but diff price .. 
// Total seats -- both have total seats but diff seats 
// colors-- both car are the diff colors .

// we can solve this problem by using abstract class ..

// 

// we can not create a instace or object of abstract class .

// let objCar = new Car();

// full time  8 

// contract 
console.log(`====================================================================================`);


abstract class Employee {
    name: string;
    paymentPerHour: number;

    // parameterisied constructor
    constructor(name: string, paymentPerHour: number) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }

    // this method is abstract method only declartion 
    public abstract CalculateSalary(): number;
}

//let empl = new Employee();

class Contractor extends Employee {
   
    hoursOfWorking: number;

    constructor(name: string, paymentPerHour: number, hoursOfWorking: number) 
    {
        // parent class constructor by using super.
        super(name, paymentPerHour);
        this.hoursOfWorking = hoursOfWorking;
    }
    public CalculateSalary(): number {
        return this.paymentPerHour * this.hoursOfWorking;
    }
}


class FullTimeEmployee  extends Employee {
   
    // parameterised contructor
    constructor(name: string, paymentPerHour: number) {
        super(name, paymentPerHour);
    }

    public CalculateSalary(): number {
       return this.paymentPerHour * 8;
    }
}

let  objcontractor = new Contractor('Harry', 8, 10); // 40 
let objfullTimeEmployee = new FullTimeEmployee('Jack', 8);

console.log(objcontractor.CalculateSalary());
console.log(objfullTimeEmployee.CalculateSalary());
console.log(`===================================================================`);

console.log(`======================================================================`);
abstract class MoterScical {
  while ():string {
    return "Four Whelear"
  }
  carborator ():string{
    return " Available Carborator"
  }
  stearing():string{
    return "Power Stearing"
  }
  abstract price():number;
  abstract color():string;
  abstract average():number;
}

class Platina extends MoterScical{
    price(): number {
        return 90000
    }
    color(): string {
      return "Black"
    }
    average():number {
      return 60.56
    }
}
class Hero extends MoterScical {
    price(): number {
       return 120000
    }
    color(): string {
        return "Silver"
    }
    average(): number {
        return 55.67
    }   
}
let platina= new Platina()
let hero=new Hero()

console.log("Platina Bike Color-:",platina.color());
console.log("Hero Bike Color-:",hero.color());
console.log(`==============================================================================`);

abstract class Emps{
    name:string;
    paymentPerHour:number;
    constructor(name:string,  paymentPerHour:number) {
       this.name=name;
       this.paymentPerHour=paymentPerHour; 
    }
    abstract calculate():number;
}
class Cons extends Emps{
   
    hoursOfWorking:number
    constructor(name:string,paymentPerHour:number,hoursOfWorking:number){
        super(name,paymentPerHour);
    this.hoursOfWorking=hoursOfWorking
    }
    calculate(): number {
        return this.paymentPerHour * this.hoursOfWorking
     }
}
class FullTimes extends Emps{
    constructor(name: string,paymentPerHour: number) {
        super(name,paymentPerHour); 
    }
   public calculate(): number {
        return this.paymentPerHour*8
      }
}

let contracts= new Cons("Vijay",8,10);
let fullTime= new FullTimes("Vinayak",9)
console.log(contracts);
console.log(fullTime);
console.log(contracts.calculate());
console.log(fullTime.calculate());




 
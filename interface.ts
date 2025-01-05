//interface-:interface is one kind of contract.you can't add new property  in impliments object.
//interface is contract we need follow the rule with them.
//impements-: by using impliments keyword you can derive new class from the interface.
//in interface we have only abstarct method.
interface IProduct {
    id: number;
    name: string;
    description: string;
    price?: number;
    display() : number; // only declaration //abstract method.
}
class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price?: number | undefined;
    display(): number {
    return 23; 
    }
}
let product=new Product()
console.log(product.display());
console.log(product.name);




// abstarct class ad interface 

// abstarct class have abstarct method or non abstarct method.
// we have only abstarct method.
// 
interface IPrint {
    print():void;//by default method datatype is void
}

class EXCEL implements IPrint {
    print(): void {
       console.log('EXCEL');
    }

}

class DOC implements IPrint {
    print(): void {
       console.log("DOC");
    }

}

class PDF implements IPrint {
    print(): void {
        console.log("PDF");
    }

}

let objEXCEL = new EXCEL();
objEXCEL.print();
let pdf= new PDF();
pdf.print();

console.log(`--------------:Student Information Using Interface:------------------`);

interface Student{
    name:string;
    collegeName:string;
    age:number;
}
 class Arman implements Student{
     name: string="Arman"
     collegeName: string="D.Y.Patil Kolhapur"
     age: number=24
   

}
class Mahesh implements Student{
    name: string="Vinayak"
    collegeName: string="Sangola College Sangola"
    age: number=23

}
let mahesh=new Mahesh()
console.log(mahesh.name,mahesh.collegeName,mahesh.age);
const arman = new Arman();
console.log(arman);



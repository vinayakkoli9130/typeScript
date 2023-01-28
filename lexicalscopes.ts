//lexicalscope/lexicalthis-:by using arrow function we can access a particular class member.
//without arrow function they can't perform growOld() method operation
class Persons {
    
    private _age: number;
    constructor(age: number) {//member of class
        this._age = age;
    
    }
    growOld=()=>  {//By Using Arrow Function
       this._age ++;//return
    }

    age() {
        return this._age;
    }
}

const objPerson1 = new Persons(4); // object 

// objPerson1.growOld();

const growAge = objPerson1.growOld; // 

growAge();
console.log('age', objPerson1.age());
// console.log('Age',objPerson1.growOld());// return












    


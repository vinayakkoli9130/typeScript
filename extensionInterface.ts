interface IExterior {
    color: string;
    numOfDoors: number;
}

interface IInterior {
    seats: number;
    auto: boolean;
}

interface IAC {
    ac: boolean;

}
interface ICar extends IExterior, IInterior,IAC{
    make: string;
    model: string;
    year: number
}

var myCar : ICar=  {
    make: "Tata",
    model: "Altroz",
    year: 2018,
    color: "BLACK",
    numOfDoors: 4,
    seats: 5,
    auto: false,
    ac: false
}
console.log(myCar);

let fourWheelar:ICar={
    make: "TATA",
    model: "Tigor",
    year:2022,
    color: "Gray",
    numOfDoors: 4,
    seats: 4,
    auto: false,
    ac: true
}
console.log(fourWheelar);




console.log(`----_--------_-------_----------_-------_-------_------_-------_-------_------_-----_-----_---_-`);

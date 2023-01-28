abstract class Cars{
   wheel():string{
    return "4 Wheeler"
   }
   checkAc():string{
    return "Ac Is Available"
   }
   callFacility():string{
    return "Call Facility Supported";
   }
   abstract price():number;
   abstract getTotalSeats():number;
   abstract color():string
   abstract gps():string;
}
class Toyata extends Cars{
    price(): number {
        return 1000000;
    }
    getTotalSeats(): number {
        return 5
    }
    color(): string {
        return "White";
    }
    gps(): string {
       return "Gps Is Not Available In Toyata"
    }
}
class Hundyais extends Cars{
    
    price(): number {
      return 900000
    }
    getTotalSeats(): number {
       return 7;
    }
    color(): string {
      return "Gray"
    }
    gps(): string {
       return "GPS Available In Hundyai"
    }
}
let toyata=new Toyata()
let hundyai=new Hundyais()

console.log(`---------------------:1) Toyota Car Information:------------------------------`);

console.log("Price Of Toyota Car Is-:",toyata.price());
console.log("Total Seats In Toyota Car Is-:",toyata.getTotalSeats());
console.log("Color Of Toyota Car Is-:",toyata.color());
console.log("GPS Available Or Not In Toyota Car-:",toyata.gps());





console.log(`---------------------:2) Hundai Car Information:------------------------------`);
console.log("Price Of Hundai Car Is-:",hundyai.price());
console.log("Total Seats In Hundai Car Is-:",hundyai.getTotalSeats());
console.log("Color Of Hundai Car Is-:",hundyai.color());
console.log("GPS Available Or Not In Hundai Car-:",hundyai.gps());

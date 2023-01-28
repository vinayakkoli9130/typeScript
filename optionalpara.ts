//optional parameter-: we can define parameters but can't get any value we can run this code that time we can use option parameter(?).
                                          //role? is optional parameter
function display(id: number, name: string, role?: string) {
    console.log('Id', id);
    console.log('Name', name);
    if(role != undefined) {
        console.log('Role-:', role);//role(role?) is option you define or not depend on you. 
    }
}
display(1, 'Harry', 'Admin'); 
display(2, 'Harmayni');

function add(val1:number,val2:number ,val3?:number) {
   console.log("Value1--:",val1);  
   console.log("Value2--:",val2);
   if (val3 != undefined) {
    console.log("Value3--:",val3); 
   } 
  
}
console.log(`First Values-:`);
add(12,21,12)

console.log(`Second Values-:`);
add(22,22)

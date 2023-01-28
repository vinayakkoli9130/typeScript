//intersection type-:by using and (&) operator you can perform intersection type.
//multiple object parameters can store one type is name ContactDetails.
type Person2 = {
    name: string;
}

type Email = {
    email: string;
}

type Phone = {
    phone: number
}

type ContactDetails = //multiple object parameters can store one type is name ContactDetails.
& Person2
& Email
& Phone;
function contact(details: ContactDetails) {
    console.log(`Dear ${details.name} .
    I hope you have received our email at ${details.email}.
    We will call you at ${details.phone} shortly ,`) ;
}
// let objContact : Person2 & Email & Phone = { name : 'Vinayak', email : 'vinyakkoli9130@gmail.com', phone: 7620352536};
let objContact :  ContactDetails = { name : 'Vinayak', email : 'vinyakkoli9130@gmail.com', phone: 7620352536};
//multiple object parameters can store one type is name objContact.

contact(objContact) // string
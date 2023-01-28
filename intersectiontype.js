function contact(details) {
    console.log("Dear ".concat(details.name, " .\n    I hope you have received our email at ").concat(details.email, ".\n    We will call you at ").concat(details.phone, " shortly ,"));
}
// let objContact : Person2 & Email & Phone = { name : 'Vinayak', email : 'vinyakkoli9130@gmail.com', phone: 7620352536};
var objContact = { name: 'Vinayak', email: 'vinyakkoli9130@gmail.com', phone: 7620352536 };
//multiple object parameters can store one type is name objContact.
contact(objContact); // string

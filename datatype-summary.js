//Primitive:
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const { captureOwnerStack } = require("react");

// const score = 100
// const scoreValue = 100.3

// const isLogged = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 12345678910111213141516n

//Reference (Non primitve):
//Array, Objects, Functions

// const heros = ["Aman", "Rahul", "Mukesh", "Ramesh"];
// let myObj = {
//     name: "Avantika", 
//     age: 21, 
// }

// const myFunction = function(){
//     console.log("Hello World");
// }
// myFunction()
// console.log(typeof bigNumber);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);

///////////////////////////////////////////////////////////////////////

//Stack (Primitive): copy jaata hai isliye original value change nhi hoti, 
//Heap (Non-Primitive): Reference jaata hai isliye original value mei bhi change ho jaata hai

let myProfilename = "aanasharmadotcom"
let anothername = myProfilename
anothername = "Hackoverheels"

console.log(myProfilename);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "abcd@google.com"

console.log(user1.email);
console.log(user2.email);
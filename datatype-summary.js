//Primitive:
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 12345678910111213141516n

//Reference (Non primitve):
//Array, Objects, Functions

const heros = ["Aman", "Rahul", "Mukesh", "Ramesh"];
let myObj = {
    name: "Avantika", 
    age: 21, 
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);

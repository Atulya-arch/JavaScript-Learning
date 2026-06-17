// const prompt = require("prompt-sync")();

// let a = 10;
// let b = 20;
// console.log(a + b);
// let c = "11";
// console.log(typeof(a + c)); // concatenation
// console.log("Sum of 10 and 20 is = " + (a + b));
// console.log("1" - 1); // Type Coercion

// let age = prompt("Enter your age: ");
// age = Number(age); // Type casting -> Explicit type conversion
// console.log(age);

/* 
Enter your age: 1bd
NaN 
*/

// SWAPPING: 
// Method-1: Using three variables - 
let x = 10;
let y = 20;
let z;

z = x; // z = 10, x = 10
x = y; // x = 20, y = 20
y = z; // y = 10

console.log(x, y);

// Method-2: Using two variables - 
let i = 10;
let j = 20;
i = i + j; // 30
j = i - j; // 30-20 = 10
i = i - j; // 30-10 = 20

console.log(i, j);

// Method-3: Using Destructuring assignment - 
let p = 5;
let q = 4;
[p, q] = [q, p];
console.log(p, q);

// Divison: In JS, int/int -> can also give a float value therefore we always use Math.floor to find the int value
console.log(Math.floor(7/2)); // Quotient
console.log(7%2); // Remainder

// Arithmetic Operators: + / * % -
// Relational Operators: < > <= >= !==   != Not strict, !== Strict
/*
= assignment operator
== only checks the equality of values: 13 == "13" gives true
=== checks the euquality of value as well as the type: 13 == "13" gives false
*/

// Logical Operators: && || 
// Unary Operators: ++ --
// let m = 11, n = 22;
// let ans = m + n + m++ + n++ + ++m + ++n;
// console.log("m = " + m + ", " + "n = " + n + ", " + "ans = " + ans); // 13, 24, 103

// let a = true; // converts true -> 1
// a++;
// console.log(a); // 2

// Circumference of a circle:
let r = 15;
circum = Number((2 * Math.PI * r).toFixed(2)); // 94.25
console.log(circum);

// Area of a triangle by Heron's fromula:
let a = 3, b = 4, c = 5;
if((a+b) > c || (a+c) > b || (b+c) > a) {
    let S = (a+b+c)/2;
    console.log(Math.sqrt(S * (S-a) * (S-b) * (S-c)));
}
else {
    console.log("Not a Valid Triangle");
}


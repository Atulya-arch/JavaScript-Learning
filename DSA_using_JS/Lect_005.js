// Arrays:
// In JS, the arrays are dynamic -> they do not have a fixed type.

// Array is a collection of values
// let num = [1, 2, 3, {}, "Hello"]; // Valid in JS

// let arr1 = [];
// arr1.push(100);
// arr1.push(200);
// arr1.push("Atulya");
// arr1.push(false);

// console.log(arr1);

// console.log(arr1[2]);
// arr1.pop();
// console.log(arr1);

// let arr2 = [];
// arr2[0] = 1;
// arr2[1] = 2;
// arr2[2] = 3;
// arr2[7] = 7; // index 3, 4, 5 and 6 are left empty
// console.log(arr2);

// let arr = new Array(3); // Size can vary

// Types of Datatypes:

// function greet() {}
// console.log(typeof greet);
// console.log(typeof Infinity);
// let a = 123n;
// console.log(typeof a);
// let id = Symbol("id");
// console.log(typeof id); // creates unique identifiers

// let person = {
//     name: "abs",
//     age: 21
// };

// console.log(typeof person);

// 10 == "10"; // true
// 10 === "10"; // false

// null == undefined; // true
// null === undefined; // false

// true == 1; // true
// true === 1; // false

// // IIFE (Immediately Invoked Function Expression -> used to create private scope)
// var js = (function(x) {
//     return x * x;
// } (10));

// console.log(js);

// (function() {
//     var secret = "happy";
//     console.log(secret);
// } ());

// console.log(10 + + "10");
// console.log("10" - 2);
// console.log(true + true + "2");

// Promise.all(): Waits for all promises to succeeds and immediately stops after 1st rejected promise - returns an array of values for the succeeded promises
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.reject("Error");

// Promise.all([p1, p2, p3]).
// then(result => console.log(result))
// .catch(err => console.log(err));

// Promise.allSettled(): Waits until every promise has been settled - returns an array of result objects
// const a1 = Promise.resolve("A");
// const a2 = Promise.resolve("B");
// const a3 = Promise.reject("Error");

// Promise.allSettled([a1, a2, a3]).
// then(result => console.log(result));

// Promise.race(): First promise to settle - can be resolved or rejected
// const b1 = new Promise(resolve => setTimeout(() => resolve("A"), 2000));
// const b2 = new Promise((resolve, reject) => setTimeout(() => reject("Network Error"), 1000));

// Promise.race([b1, b2]).
// then(result => console.log(result))
// .catch(err => console.log(err));

// Promise.any(): First fulfilled promise
// const p1 = new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 3000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Success"), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Error 2"), 2000));

// Promise.any([p1, p2, p3]).
// then(result => console.log(result))
// .catch(err => console.log(err));

/* 
Easy way to remember

* all → Everyone must pass.
* allSettled → Wait for everyone, regardless of pass/fail.
* race → First to finish wins, whether success or failure.
* any → First success wins; ignore failures unless everyone fails.

*/

// console.log("20 + 5");
// let x = 5;
// let y = 6;
// let res = eval("x + y"); // executes a string as a javascript code
// console.log(res);

// console.log("20" + "4");
// console.log("20" * "4");

// Serialization in JS: converts object to JSON
const student = {
    name: "Atulya",
    age: 22,
    cgpa: 9.1
}

const json1 = JSON.stringify(student);
console.log(json1);

// Deserialization in JS: converts JSON back to object
const json = '{"name": "Atulya", "age": 22, "cgpa": 9.1}';
const obj = JSON.parse(json);
console.log(obj.name);

async function getData() {
    const result = await Promise.resolve("Data"); // await - waits for a promise to resolve
    console.log(result);
}
getData();


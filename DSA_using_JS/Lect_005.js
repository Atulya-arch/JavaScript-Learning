// Arrays:
// In JS, the arrays are dynamic -> they do not have a fixed type.

// Array is a collection of values
let num = [1, 2, 3, {}, "Hello"]; // Valid in JS

let arr1 = [];
arr1.push(100);
arr1.push(200);
arr1.push("Atulya");
arr1.push(false);

console.log(arr1);

console.log(arr1[2]);
// arr1.pop();
// console.log(arr1);

let arr2 = [];
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
arr2[7] = 7; // index 3, 4, 5 and 6 are left empty
console.log(arr2);

let arr = new Array(3); // Size can vary


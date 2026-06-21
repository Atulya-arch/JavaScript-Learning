const prompt = require("prompt-sync")();

// LOOPS:
// Sum of n natural numbers:

// let pr = prompt("Enter the number till which the sum needs to be calculated: ");

// if (pr === null) {
//     console.log("Cancelled");
// }
// else {
//     let num = Number(pr);
//     if (!isNaN(num)) {
//         if (num > 0) {
//             let sum = 0;
//             for (let i = 1; i <= num; i++) {
//                 sum += i;
//             }
//             console.log("The sum of the n natural numbers = " + sum);
//         }
//         else {
//             console.log("Number should be positive or more than 0");
//         }
//     }
//     else {
//         console.log("Invalid Input");
//     }
// }

// Factorial of a Number:
let po = prompt("Enter the number for the factorial to be calculated: ");

if (po === null) 
    console.log("Cancelled");

else {
    let num = Number(po);
    if (!isNaN(num)) {
        if (num > 0) {
            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact = fact * i;
            }
            console.log("The sum of the n natural numbers = " + fact);
        }
        else {
            console.log("Number should be positive or more than 0");
        }
    }
    else {
        console.log("Invalid Input");
    }
}



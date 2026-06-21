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

// -------------------------------------------------------------------------------------------------------
// Factorial of a Number:
// let po = prompt("Enter the number for the factorial to be calculated: ");

// if (po === null) 
//     console.log("Cancelled");

// else {
//     let num = Number(po);
//     if (!isNaN(num)) {
//         if (num > 0) {
//             let fact = 1;
//             for (let i = 1; i <= num; i++) {
//                 fact = fact * i;
//             }
//             console.log("The sum of the n natural numbers = " + fact);
//         }
//         else {
//             console.log("Number should be positive or more than 0");
//         }
//     }
//     else {
//         console.log("Invalid Input");
//     }
// }

// -------------------------------------------------------------------------------------------------------
// To find the factors of a given Number:
// const prom = prompt("Enter a number: ");
// if(prom === null) console.log("Cancelled");
// else {
//     const N = Number(prom);
    
//     if(isNaN(N)) console.log("Invalid Input");
//     else if(N <= 0) console.log("Should be Positive");
//     else {
//         for(let i=0; i<Math.floor(N/2); i++) {
//             if(N % i === 0) console.log(i);
//         }
//         console.log(N);
//     }
// }

// -------------------------------------------------------------------------------------------------------
// Is the Given Number Prime?

// const po = prompt("Enter a Number: ");

// if(po === null) console.log("Cancelled");
// else {
//     const num = Number(po);
//     if(isNaN(num)) console.log("Invalid Input");
//     else if(num <= 0) console.log("Should be Positive");
//     else {
//         let isPrime = true;
//         for(let i=2; i<Math.floor(num/2); i++) {
//             if(num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         console.log(isPrime);
//     }
// }

// OR
// TRICK for Prime Numbers:

function isPrime(n) {
    if(n <= 1) return false;
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    // TRICK -> Agar koi number apne square root tak divide nhi krta toh aage bhi divide nhi krega
    for(let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(23));
// -------------------------------------------------------------------------------------------------------

// break -> loop ko rokta hai
// continue -> loop ko skip kr deta hai

// while -> used jab humei pata ho rukna kab hai -> mtlb kahan tak jaana hai

// Finding the sum of digits of a number:
let number = Number(prompt("Enter the number: "));

// if(!isNaN(number) && number > 0) {
//     let sum = 0;
//     while(number > 0) {
//         let rem = number % 10;
//         sum += rem;
//         number = Math.floor(number / 10);
//     }
//     console.log(sum);
// }

// Reverse a number:
// let no = Number(prompt("Number do: "));

// let rev = 0;
// while(no > 0) {
//     let rem = no % 10;
//     rev = rev * 10 + rem;
//     no = Math.floor(no / 10);
// }
// console.log(rev);

// Verifying if the given number is a strong number or not:
// Strong number: Sum of factorials of the digits in a number must be equal to the given number

let sum = 0;
let copy = number;
while(number > 0) {
    rem = number % 10;

    let fact = 1;
    for(let i = 1; i <= rem; i++) {
        fact = fact * i;
    }

    sum = sum + fact;
    number = Math.floor(number / 10);
}
console.log(sum);
if(sum === copy) console.log("Strong number");
else console.log("Not a Strong number");

// do-while loop:
// pehle goli maar do fir check kro galti kya thi


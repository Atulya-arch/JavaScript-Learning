const prompt = require("prompt-sync")();

// Valid Voter Program: 
let age = Number(prompt("What is your age? ")); // prompt() humesha string mei input leta hai
console.log(age);

if(isNaN(age) === true) {
    console.log("Invalid Input");
} else if(age >= 18) {
    console.log("You can Vote");
} else {
    console.log("You cannot vote");
}

// Shop - Discount:
/* Amount          Discount
   0 - 5000        0%
   5001 - 7000     5%
   7001 - 9000     10%
   above 9000      20%
*/
let amount = Number(prompt("What is the final amount? "));
if(amount >= 0 && amount <= 5000) {
    console.log(amount);
} else if(amount >= 5001 && amount <= 7000) {
    console.log(amount - (Math.floor((5 * amount) / 100)));
} else if(amount >= 7001 && amount <= 9000) {
    console.log(amount - (Math.floor((10 * amount) / 100)));
} else if(amount >= 9001) {
    console.log(amount - (Math.floor((20 * amount) / 100)));
} else {
    console.log("Invalid amount");
}

// -------- OR ------------

let amt = Number(prompt("What is the total amount? "));
let dis;
if(amt >= 0 && amt <= 5000) {
    dis = 0;
} else if(amt >= 5001 && amt <= 7000) {
    dis = 5;
} else if(amt >= 7001 && amt <= 9000) {
    dis = 10;
} else if(amt >= 9001) {
    dis = 20;
} else {
    console.log("Invalid amount");
}
console.log(amt - (Math.floor((dis * amt) / 100))); // keval yhi line repeated hai and ek value ka change hai

// Electricity - Bill :
/* Units          Price
   Upto 100       4.2/unit
   101 - 200      6/unit
   201 - 400      8/unit
   above 400      13/unit
*/

let units = Number(prompt("What are the total units? "));
let price = 0;
if(units >= 401) {
    price += (units - 400) * 13;
    units = 400;
}
if(units >= 201 && units <= 400) {
    price += (units - 200) * 8;
    units = 200; 
}
if(units >= 101 && units <= 200) {
    price += (units - 100) * 6;
    units = 100;
}
price += units * 4.2;
console.log(price);

// INR Denominations:
let total = Number(prompt("What is the total number of notes? "));
let notes = 0;
if(total >= 500) {
    notes = Math.floor(total / 500);
    total %= 500;
}
if(total >= 200 && total <= 499) {
    notes += Math.floor(total / 200);
    total %= 200;
}
if(total >= 100 && total <= 199) {
    notes += Math.floor(total / 100);
    total %= 100;
}
if(total >= 50 && total <= 99) {
    notes += Math.floor(total / 50);
    total %= 50;
}
if(total >= 20 && total <= 49) {
    notes += Math.floor(total / 20);
    total %= 20;
}
if(total >= 10 && total <= 19) {
    notes += Math.floor(total / 10);
    total %= 10;
}
console.log(notes + total);

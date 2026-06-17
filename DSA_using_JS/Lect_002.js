const prompt = require("prompt-sync")();

// Valid Voter Program: 
var age = Number(prompt("What is your age? ")); // prompt() humesha string mei input leta hai
console.log(age);

if(isNaN(age) === true) {
    console.log("Invalid Input");
} else if(age >= 18) {
    console.log("You can Vote");
} else {
    console.log("You cannot vote");
}

// Shop - Discount:

function sayMyName() {
    console.log("A");
    console.log("T");
    console.log("U");
    console.log("L");
    console.log("Y");
    console.log("A");
}

sayMyName()

function addition(num1, num2) {
    //let result = num1 + num2
    //return result

    return num1 + num2
}

console.log(addition(4, 72));
console.log(addition(3, "a"));
console.log(addition(3, null));

//Special case:
const result = addition(2, 3)
console.log("Result: " + result);

function loginUserMessage(username) {
    //If the user does not pass any argument then:
    if(username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Anamika"));
console.log(loginUserMessage());

//When we don't have ideas about how many inputs are to be given 
function calculateCartPrice(num1, num2, ...values){
    return values
}

console.log(calculateCartPrice(100, 200, 359, 547, 432));

const user = {
    name: "Anamkika",
    price: "1897"
}

//Passing an object in a function
function handleObjects(anyobject){
    console.log(`Username is ${anyobject.name} and the price is ${anyobject.price}`);
}

handleObjects(user)
handleObjects({
    name: "Usha",
    price: "399"
})

const myNewArray = [200, 500, 100, 400]
function returnArrValue(getArray){
    return getArray[2];
}
console.log(returnArrValue(myNewArray));
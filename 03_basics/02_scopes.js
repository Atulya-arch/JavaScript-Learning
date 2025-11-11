let a = 300

if(true) {
    let a = 10
    const b = 20
    console.log("INNER:", a);
    //var c = 30
}
    
//var shouln't be used inside the braces
// console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "Anamika"

    function two() {
        const hometown = "Delhi"
        console.log(username);
    }
    //console.log(hometown);
    two()
}
one()

if(true){
    const username = "Sunny"

    if(username === "Sunny"){
        const hometown = "Jaipur"
        console.log(username + hometown);
    }
    //console.log(hometown);
}
//console.log(username);

function addOne(num) {
    return num + 1
}
console.log(addOne(5));

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(6));
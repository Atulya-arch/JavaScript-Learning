// Singleton
 
//Object Literals:
//object.create

const mySym = Symbol("key1")

const JSUser = {
    name: "Anamika",
    [mySym]: "mykey1",
    age: 18,
    location: "Kanpur",
    email: "abcd12@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday, Saturday, Sunday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser[mySym]);
// console.log(typeof JSUser[mySym]);

// JSUser.email = "abcd12@chatgpt.com"
// Object.freeze(JSUser)
// JSUser.email = "abcd12@microsoft.com"
// console.log(JSUser);

JSUser.greeting = function() {
    console.log("Good Morning!");
}

JSUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSUser.greeting);
console.log(JSUser.greeting2()); //Correct Method

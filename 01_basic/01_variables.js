const accountID = "153211"
let accountEmail = "atulyachaturvedi231@gmail.com"
var accountPassword  = "1357"
accountCity = "Delhi"
let accountState;

//accountID = 23 //--> Not allowed
accountEmail = "abc@gmail.com"
accountPassword = "1234"
accountCity = "Lucknow"

/*
Prefer not to use var because of issues in block scope and functional scope {}
*/
console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])


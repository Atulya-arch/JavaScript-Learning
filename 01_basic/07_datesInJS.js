let dateToday = new Date()
console.log(dateToday);
console.log(dateToday.toString());
console.log(dateToday.toDateString());
console.log(dateToday.toISOString());
console.log(dateToday.toJSON());
console.log(dateToday.toLocaleDateString());
console.log(dateToday.toLocaleString());
console.log(typeof dateToday);

let myDate = new Date(2025, 4, 26)//Months start from 0-11
console.log(myDate.toDateString());

let myDate1 = new Date(2025, 5, 16, 8, 7)
console.log(myDate1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myDate1.getTime());
console.log(Math.floor(Date.now()/1000));
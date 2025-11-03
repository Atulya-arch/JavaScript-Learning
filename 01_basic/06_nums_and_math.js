const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 342.9856
console.log(otherNum.toPrecision(3));

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.67));
console.log(Math.ceil(4.3));
console.log(Math.floor(5.9));
console.log(Math.min(2, 3, 5, 1));
console.log(Math.max(1, 2, 3, 5));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)) + min);

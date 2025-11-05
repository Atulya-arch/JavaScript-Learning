const name = "atulya"
const repoCount = 43

console.log(name + repoCount + " Value");
console.log(`Hello, My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('football-Match-is-today')
console.log(gameName[0]);

console.log(gameName.__proto__);//We'll get an object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 7);
console.log(newString);

const anotherString = gameName.slice(-13, 4);
console.log(anotherString);

const s1 = "  atulya  ";
console.log(s1);
console.log(s1.trim());

const url = "https://abcdef.com/abc%20kumarsingh"
console.log(url.replace('%20', '-'));
console.log(url.includes('bajpai'));
console.log(gameName.split('-'));







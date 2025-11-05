const marvel_heros = ["Iron-Man", "Thor", "Spider-Man", "Black-Widow"]
const dc_heros = ["Super-Man", "Bat-Man", "Wonder-Woman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[4][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_newheros = [...marvel_heros, ...dc_heros]
// console.log(all_newheros);

// const arr1 = [1, 2, 3, [4, 5], [6, [7, 8, [9]]]]
// const usable_arr1 = arr1.flat(Infinity)
// console.log(usable_arr1);

console.log(Array.isArray("Chaturvedi"));
console.log(Array.from("Chaturvedi"));
console.log(Array.from({name: "Chaturvedi"})) //Interesting case

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1, num2, num3));
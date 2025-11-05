const arr = [1, 2, 3, 4, 5]
// console.log(arr);

// const newArr = new Array("Marvel", "DC")
// console.log(newArr[0]);

//Array methods

// arr.push(6)
// arr.push(7)
// arr.pop()
// console.log(arr);

// arr.unshift(9);
// console.log(arr);
// arr.shift(9);
// console.log(arr);

// console.log(arr.includes(10));
// console.log(arr.indexOf(4));

// const myArr = arr.join()
// console.log(myArr);
// console.log(typeof myArr);

//Difference between Slice and Splice
console.log("A ", arr);

const n1 = arr.slice(1, 3)
console.log(n1);
console.log("B ", arr);

const n2 = arr.splice(1, 3)
console.log(n2);
console.log("C ", arr);


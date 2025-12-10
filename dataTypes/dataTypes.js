// data types
// data ka type

// primitives -> aise sari values jinko copy karne par tumhe ek real copy mil jayege
// string, number, boolean, null, undefined, symbol, bigint

// '' -> single quotes
// "" -> double quotes
// `` -> backticks
// 12 - number
// 12.5 - number
// let a = true;
// let b = false;
// null - you assign it to a variable you don't know the value yet.
let selectedStudents = null;
// undefined - by deafult value of variable which are not initialized
let num;

// symbol -> unique immutable value create karta hai
// let u1 = Symbol("uid");
// let u2 = Symbol("uid");

let obj = {
	uid: 1,
	name: "nikhil",
	age: 24,
	email: "nikhil@mail.com",
};

let u = Symbol("uid");
obj[u] = "001";

// bigint
// n is must after he number to represent is as bigint even when you are adding any number to the bigint number;
// let a = 9007199254740991n;
// a = a + 3n;

//
// reference -> inko copy karne par real copy nahi milegi but aapko reference milega parent ka
// array, objects, functions

// let a = [1, 2, 3];
// let b = a;
// b.pop();

// let a = {
// 	name: "nikhil",
// };
// let b = a;
// b.name = "ashwini";

// Dynamic typing -> js main static type nahi hota hai and yah par hai dynamic typing jiska matlb hai aap data ko change kr sakte ho kyuki yaha par dynamic data types hai

let a = 12;
a = true;
console.log(a);

// typeof quirks (e.g typeof null === 'object)
// typeof null === 'object';
// typeof NaN === 'number';
// 1 + '1' = '11';

// Type coercion (== vs ===)
// truthy and falsy values
// -> String reason: + op do two things add and concat. When we use + and one of the operand is string JS assumes that you are trying to do concatination and covert the number into string and result is string
console.log(typeof ("5" + 1));
// -> number reason: - op only do substraction so JS convert string to number and result is number
console.log(typeof ("5" - 1));

// truthy and falsy
// falsy -> 0, false, "", null, undefined, NaN, document.all
// truthy -> rest
console.log(!!0); // !! -> use in front and it will tell if it's true or false just a trick
console.log(!!-1);

// Predict -> true + false, null + 1, 5 + "5", !!undefined
console.log(true + false); // -> 1
console.log(null + 1); // -> 1
console.log(5 + "5"); // -> 55
console.log(!!undefined); // -> false

// arthimatic, camparison, logical, assignment, unary and ternary
// ==, != -> not strict
// ===, !== -> strict

// console.log(12 == 13); // false
// console.log(12 == "12"); // true
// console.log(12 === "12"); // false
// console.log(12 != 13); // true
// console.log("harsh" != "harshita"); // true
// console.log(12 != "12"); //false
// console.log(12 !== "12"); // true

// assignment -> =, +=, -=, *=, /=, %=
// let a = 12;
// a += 3; // 15
// console.log(a);
// a -= 11; // 4
// console.log(a);
// a *= 2; // 8
// console.log(a);
// a /= 2; // 4
// console.log(a);
// a %= 3; // 1
// console.log(a);

// logical -> &&, ||, !
// true && true -> true
// false && true -> false
// true && false -> false
// false && false -> false

// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// !false -> true
// !true -> false
// !!12 -> !(!12) -> !(false) -> true

// unary operator
// + - ! typeof ++ --
// "5" -> +"5" -> 5 into number
// console.log(typeof +"5");

// ternary -> ?:
// condition ? true hui ka code : false hui ka code
// 12 > 13 ? console.log("true") : console.log("false");

// typeof and instanceof
// console.log(typeof 12);
// console.log(typeof null);
// let a = [];
// let b = {};
// console.log(a instanceof Array);
// console.log(b instanceof Object);
// console.log(b instanceof Array);

// practice
// let x = 10;
// let y = 20;

// if (x > 5 && y < 25) {
// 	console.log("A");
// } else {
// 	console.log("B");
// }

// let isAdmin = true;
// let isLoggedIn = false;

// if (isAdmin || isLoggedIn) {
// 	console.log("Access granted");
// } else {
// 	console.log("Access denied");
// }

// let temp = 35;
// if (!(temp < 30)) {
// 	console.log("Hot");
// } else {
// 	console.log("Pleasant");
// }

// let score = 78;
// let grade = score >= 95 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
// console.log(grade);

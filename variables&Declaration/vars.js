var a = 12;
let c = 12;
const PI = 3.14; // will not change
// console.log(a);
// console.log(c);
// console.log(PI);

function abcd() {
	if (true) {
		var a = 13; // functional scoped, can be redeclared and reiniliatize
		let c = 24; // block scoped
	}
	// console.log(a);
	// console.log(c);
}

abcd();

// global scope -> can access everywhere
// functional scope -> can only access inside the function {}
// block scope -> can only access inside the {}

// Temporal Dead Zone -> utana area jitne mein js ko pata to hai ki variable exist karta hai par vo aapko value nahi de sakta -> var mai temporal dead zone nahi hota hai
// console.log(temp);
// console.log(varTemp);
// temporal dead zone
let temp = 5;
var varTemp = 8; // hoisting

// Hoisting -> ek variable ko jab js mai banaate hai to wo do hisso mai toot jaata hai and uska declare part upar chala jaata hai aur uska initilization part neeche reha jaata hai.

// console.log(a);

var a = undefined;
a = 12;

let tdz = 12; // -> JS automatic var mai undefined se initialize kar deta hai
// console.log(tdz);

// var -> hoist -> undefined
// let -> hoist -> X
// const -> hoist -> X

var x = 2; // global scope
{
	var x = 3; // global scope
}
console.log(x);

let num = 10; // global scope
{
	let num = 20; // block scope
	console.log("Inside num:", num);
}
console.log("Outside num:", num);

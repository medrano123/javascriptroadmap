// ECMAScript 6 or simply ES6;

// const and let
// arrow functions
// default parameters
// template strings

// var - can reassign variables

var age = 27;
console.log(age); // 27
var age = 28;
console.log(age); // 28

//let age = 27;
console.log(age); // 27
//let age = 28;
console.log(age); // SyntaxError

// will not change
// const password = '123123';
// password = '123456'; // TypeError: Assignment to a constant variable

let password = '123123';
password = '123456'; // Allowed


// Arrow functions 
function multiply2 (x) { 
	return x * x
}

// arrow function form

const multiply = (x) => {
	return x * x;
}

// compact method if we have only one return statement
const multiply1 = (x) =>  x * x;


// Default parameters
const add = (x = 1, y = 2, z = 10) => { 
	return x + y + z;
}

console.log(add(2,3,2));


// Template Strings

const customer = 'John';

const order = { 
	name : 'iPad', 
	price: 1400
}

// the old way ... ugly
//const message = 'Hello' + customer.name + ',' + 'do you want to buy ' + order.product + ' for' + order.price + 'bucks?';

// the new way
const message = `Hello ${customer}, do you want to buy an ${order.name} for ${order.price} bucks?`;

console.log(message);
// That is so simple!

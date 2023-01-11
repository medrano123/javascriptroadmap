// Comparison operators return true/false
const a = 5;
const b = 10;
// Greater than
console.log(a > b); 

// Greater than or less than
console.log(a >= b); 

// Less than
console.log(a < b); 

// Less than or equal to
console.log(a <= b); 


// Is Equal
console.log(a == b);

// Is not Equal
console.log(a != b);

// Strict equality
console.log(a === b); //same value same type

// Strict inequality
console.log(a !== b); 


console.log(5 === 5)
console.log("Hello" === "Hello")

// Loose equality - doesnt compare data types // don't use
console.log(20 == "20")

// The good ones are === and !== 

// Examples of the bad ones
console.log('' == '0') // gives false
console.log(0 == '') // gives true
console.log('0' == '0') // gives true

console.log(false == 'false') // gives false
console.log(false == '0') // gives true

// Logical Operators

// OR || (Atleast one operand is true)
console.log(true && false) //true
// AND && (All operands are true)
console.log(true && false) //false
// NOT ! (opposite)
console.log(!true) //false


// Assignment Operator
// the = sign is an assignment operator
let number = 5;
number += 5;
number -= 5;
number *= 5;
number /= 5;

console.log(number);

let string = "Hello ";
string += "I am legend";
console.log(string)


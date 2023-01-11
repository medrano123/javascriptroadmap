const variableName1 = "welcome to variables"; //doesnt change ever
let variableName = "welcome to variables"; //can change

variableName = "hello there";
console.log(variableName + "  oink");


// Creating a variable using var keyword
var variable1 = "test";

// Creating a variable using let keyword
let variable2 = "test";

// use command forward slash to comment an entire line
// Hover several lines and use command forward slash to comment them all

// Creating a variable using const keyword
const variable3 = "test";

// Variable naming rules to follow
// 1. The name should be unique
// 2.  The name should not be any reserved key words
// 3. The name should start with a character, _, or a $ sign.

// String DATA type
const exampleString = "Hello, world!";
console.log(exampleString);

const singleQuote = 'a single quote';
const doubleQuote = "a double quote";

// They are identical

// backticks can use custom variables also compute javascript code and known as a complex string
const name = "Jane";
const backticks = `a backtick can use variables like the person's name: ${name} It can also do operations ${2 + 2 + 2}`
console.log(backticks);


// type of give you the datatype
console.log(typeof backticks);


// Number DATA type
// Javascript numbers are untyped meaning their type doesn't have to be set

const wholeNumber = 5;
const decimalNumber = 0.5;
 
console.log(wholeNumber, decimalNumber);

const firstNumber = 1;
const secondNumber = 24;

const result = (firstNumber + secondNumber);
console.log(typeof result); 

// Boolean DATA type
//TRUE  YES, CORRECT, 1
// FALSE NO, INCORRECT, 0

const isCool = false;
console.log(isCool);

if(isCool) {
    console.log("hi man ur cool");
} else {
    console.log(" oh hi ur not cool")
}

const age = 20;
console.log( age > 19)

// Null DATA type HAS ONLY ONE VALUE NULL
// represents  nothing, empty, or unknown
let age1 = null;

console.log(typeof age1);
//type of object

// UNDEFINED DATA type
//a variable that has not been set a values is undefined
// has been declared but has not been set a value

let x;
console.log(typeof x);

// Object DATA type
// Used to store collections of data  used to group variables

const names = "John"
const age2 = 23;

const person = {
    name2: "John",
    age3: 23,
}

// DOT NOTATION TO GET DATA
console.log(person)

// Array DATA type
const arr = [1, 2, 3, 4];
console.log(arr);

const date = new Date();

console.log(date);

// Statically typed programming languages
let messege = "Hello, world!";
console.log(messege);

// Dynamically typed programming languages

//Js is dynamically typed which means variables can recieve different data types over time.
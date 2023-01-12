//a block of code that performs a task

// A function decleration (defines the function)
// function square(number){
//     console.log("I am here")
//     return number * number;
// }
// // A function call (invokes/executes the function)

// const result = square(3);
// console.log(result);

//----------------------------------------------------------------
// function name(params){
//     //statements
//     //have acces to "this" keyword
// }

// //a function expression (defines a named or ananymous function(nameless))
// const name = function(params){
//     //staments
// }
// // setting a variable and the value of the variable is a function expression 

// // an arrow function is the most common
// const name = (params) => {
//     ///statement
// }
// //use arrow functions

function sayHi(name){
    console.log(`Hello there! ${name}`);
}

sayHi("penniwinkle");

//returns undefined unless otherwise specified


function add(a, b){
    return a + b;
}

const sum = add(2 , 2);
console.log(sum);

function test(){
    return true;
    return false;
}

 const bool = test();
 console.log(bool);

 // Arrow functions
 // Do not have "this" reserved keywords

 const square = (number) => {
    return number * number
 }


const square1 = (number) => number * number
 
 const result = square1(5);
 console.log(result);

// Parameters - used when defining a function the names created in the function definition only meaningful in there wont be accesible anywhere else
// Arguments - real values passed when making a function call 

//name is the parameter 
const sayHi1 = (name= "mama", age = 19) => {
    console.log(`hello ${name} is ${age} years old.`);
}

//Joe is the argument
sayHi1('Joe', 24);


const add1 = (a=0, b=0) => {
    return a + b;
}

const final = add1()
console.log(final);
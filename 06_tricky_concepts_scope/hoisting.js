// Hoisting is a js mechanism where variables  and function declerations are moved to the top of their scope before execution
// 
var age;
console.log(age); // returns undefined
age = 20;

// This is how hoisting actually looks like
// Not really useful but helpful to know how it works

// var hoist;
// console.log(hoist); // returns undefine
// hoist = "The variable has been hoisted"
hoist();

function hoist(){
    var messege="here"

    console.log(messege)
}
// ^The function is being hoisted to the top  
// However the same will not happen with arrow functions itll throw an error
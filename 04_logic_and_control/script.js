// if statements
const age = 18;
if( age > 18) {
    console.log('You may enter')
} else if (age == 18 ){
    console.log("You just turned 18, welcome")
} else {
    console.log("Not old enough")
} 

// Truuthy and falsey 
// a value is truuthy means the value changes to true when evaluated in a boolean context

if(0){
    console.log('truee')
} else {
    console.log('falsee')
}

const dogs = 5;
if(dogs){
    console.log(`You have ${dogs} dogs`)
} else {
    console.log('You have no dogs')
}

// memorize all of the falsey values
// 1. false
// 2. 0
// 3. ''
// 4. null
// 5. undefined
// 6. NaN
// Everything else is considered truuthy

// Opposite of those falsey values
// 1. True
// 2. 1
// 3. "hello"
// 4. 58
// 5. {}
// 6. []


// Logical operators 2
// Or (||) and(&&) not (!)

const age1 = 19;
const isCool = true;

//is cool and is above 18

// if(age1 > 18 && isCool){
//     console.log("You may enter")
// } else {
//     console.log("You may not enter")
// }

console.log(age1 > 18 && isCool)


// Truuthy values USING AND
console.log("truuthy" && 1 && 'test' && 999); //output is 999
// It begins from left to right and evalutes to see which are true and if they are continues onto the next
// Outputting the final operand value  

console.log("truuthy" && 0 && 'test' && 999); //output is  0
// Finds one false value and returns it

// Truuthy values USING OR 
console.log("truuthy" || 1 || 'test' || 999); //output is TRUUTHY
// Returns the first value that is true

console.log("" || 0 || null || undefined); //output is undefined
// if all values are false it returns the last final value


// Truuthy values USING NOT
console.log(!true); //false
//Accepts a single argument and simply returns the inverse

console.log(!'true'); //false
//converts them to boolean to see if they are truuthy or falsey


console.log(!0); //true
// 0 is falsy and then thatll turn it into true

console.log(!!0); //false
//returns the boolean value of it

//Example

const value = 2;

if(!!value){
    console.log("Value is truuthy");
} else {
    console.log("Value is falsey");
}





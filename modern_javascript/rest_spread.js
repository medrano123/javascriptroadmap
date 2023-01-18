// Rest Operator

// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

// Spread Operator

// The spread operator takes out the values of an object or an array

const add = ( a, b ) => {
    return a + b;
}

console.log(add(2,4))


// When we dont know how many parameters were going to get we can use the rest opperator

const add1 = ( ...arg) => {
    console.log(arg)
    return arg.reduce((acc, val) => acc + val);
}


console.log(add1(1,3,4,5,6,6))


// spread operator - take each value outside of the array

const numbers = [1 ,2, 3,4,5];

numbers.push(6) //this mutates the array which is bad in react
// how can we update the value of numbers without mutating it.. use spread operator

const newNumbers = [...numbers, 6] //SPREADING THE VALUES AND ADDING WHAT WE WANT
console.log(...numbers)
console.log(...newNumbers)

// YOU CAN DO THE SAME THING WITH OBJECTS

const person = { name: 'John', age: 25}
const newPerson = {...person, name: 'Johnnnster'};

person.name= "jenny"

console.log(person)
console.log(newPerson)
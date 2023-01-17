// Cloning Arrays

// 1st Method - Spread operator

const numbers = [1, 2, 3, 4, 5];

console.log(...numbers); // we get 1 2 3 4 5 seperately instead of as an array
console.log(numbers); // we get the array

const newNumbers = [ ...numbers ]; // actual copy in different location copy using spread
const copiedNumbers = numbers; // same array
const newNumbers2 = numbers.slice(); // copy using slice (2nd method)

console.log(newNumbers); // now we get the array

console.log(numbers === copiedNumbers); // true  - points to the same place in memory
console.log(numbers === newNumbers); // false

numbers.push(6);

console.log(numbers); // original
console.log(newNumbers); // different as its in a differenc memory locaiton
console.log(copiedNumbers); // is the same since it points to the same place in memory

// Called a shallow clone

// 2nd method - Array Slice
console.log(numbers); // original
console.log(newNumbers2); // different as its in a differenc memory locaiton
console.log(copiedNumbers); // is the same since it points to the same place in memory

// Another example but how to clone objects

// 1st method - Spread operator
const person = {
    name: 'John',
    age:20
}
const otherPerson = { ...person } // new shallow copy
person.age = 22;

console.log(person) //
console.log(otherPerson); //

// 2nd method - Object.assign()

const otherPerson2 = Object.assign({}, person)



console.log(person) //
console.log(otherPerson2); //
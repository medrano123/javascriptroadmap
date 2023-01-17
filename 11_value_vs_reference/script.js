// Javascript data types

// Primative data types (Number, String, Boolean, nulls, undefined)
// Complex (Objects, Arrays)

let x = 1;
let y = x;

x = 2;
console.log(x, y); // 2 1 

let firstPerson = "Mark";
let secondPerson = firstPerson

firstPerson = "Austin"

console.log(firstPerson, secondPerson) //Austin Mark


// Now lets move to copying complex values

const animals = [ 'dogs', 'cats']; //['dogs', 'cats']
const otherAnimals = animals;

animals.push('llamas');

console.log(animals, otherAnimals); // we get the same array with llamas

// why are both the same?

const person = {
    firstName: 'John',
    lastName: 'Smith',
}

const otherPerson = person;

// Person and otherPerson point to the same location in the memory
person.firstName = 'Johnnyy';

console.log(person, otherPerson);
//Theyre the same again

//When a varaiable is assigned a non-primitive value it is given a reference to that objects location in memoery

const person1 = { name: 'John'};
const otherPerson1 = { name: 'John' };

console.log(person1 === otherPerson1);
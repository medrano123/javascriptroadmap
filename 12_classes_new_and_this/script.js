// The "new" keyword

// It creates a new object
const person = {};
const person1 = new Object(); // allows us to create an object constructor

person.firstName = 'John';
person1.firstName = 'John';

console.log(person)
console.log(person1) 

const arr = [1,2,3];
const arr1 = new Array(1, 2, 3);

console.log(arr, arr1);

const myDate = new Date('August 12, 2023')
console.log(myDate.getFullYear());

console.log(Array);
console.log(Object);
console.log(Number);
console.log(Date);

const myNumber = new Number(100.423432);
console.log(myNumber.toFixed(1))

const names = new Array('wes', 'kait');

typeof names // object
names instanceof Array // true
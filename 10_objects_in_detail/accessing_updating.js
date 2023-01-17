// Objects in detail
// A standalone thing that represents something

// Objects is an unordered collection
// of related data
// in form of the key and value pairs
const person = {
    firstName: 'Brad',
    age: 25,
    property: 'test',
    "this-is-a-key-with-values": true,
    "this is-a key with spaces": true,
}

person.dog= { name: 'Fluffy', age:3}
//person.age = 35;
console.log(person)

console.log(person.firstName)
console.log(person.dog.name)


//Square bracket notation
// Allows us to access properties of an object

const property = 'age';
//console.log(person.property)
console.log(person['firstName', 'age','property','this-is-a-key-with-values','this is-a key with spaces'])
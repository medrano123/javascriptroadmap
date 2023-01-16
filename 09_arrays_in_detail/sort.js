// Sorts an array of strings alphabetically
// sort doesnt immediately sort numbers in order

// sort mutates the array

var names = ["Anne", "Carl", "Bob", "Dean"];

names.sort();
console.log(names);

const numbers = [6, 3, 1, 7, 9, 2,11,34,55,33,99]
//ascending order
numbers.sort((a,b) => a-b );
// descending order
numbers.sort((a,b) => b-a );

console.log(numbers);
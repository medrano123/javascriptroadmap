// Array find 
// Returns the first value that satisfies the condition

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const value = numbers.find((number) => number > 5);
console.log(value);

const states  = [ 'Alaska', 'California', 'Colorado', 'Hawaii' ];

const startsWithC = states.find((state) => state.startsWith('C'))
console.log(startsWithC);
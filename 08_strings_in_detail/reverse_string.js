//Reverse a string

const exampleString = "This is the example string"

const characters = exampleString.split("");
const reverseCharacters = characters.reverse();
//const reverseString = reverseCharacters.join('')

const reverseString = exampleString.split('').reverse().join('');
console.log(reverseString);

// repeat()
const dogsSays = "woof"
console.log(dogsSays.repeat(3));


// trim() - can clean empty spaces

const strings = "   Hello World   ";
console.log(strings.trim());

// Email example

const email = "  contact@medranoector@yahoo.com "
console.log(email.trim());




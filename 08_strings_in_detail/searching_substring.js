// Searching for a substring


const hobbies = "I love to program React apps with JavaScript!, JavaScript"


//indexOf()
const firstIndex = hobbies.indexOf('JavaScript', 0);
// Returns the position of the first occurrence of a substring.

// @param searchString — The substring to search for in the string

// @param position — The index at which to begin searching the String 
// object. If omitted, search starts at the beginning of the string.

console.log(firstIndex)

//lastIndexOf()
const lastIndex = hobbies.lastIndexOf('JavaScript' );
console.log(lastIndex)


// includes() returns true or false
const includess = hobbies.includes('JavaScript');
console.log(includess);

// startsWith() 
console.log(hobbies.startsWith('I love'));

// endsWith()
console.log(hobbies.endsWith('Script'));

//Getting a substring of a string!

const exampleString = "hotdog";

//slice()

const dog = exampleString.slice(3,6);
const hot = exampleString.slice(0,3);

console.log(dog);
console.log(hot);



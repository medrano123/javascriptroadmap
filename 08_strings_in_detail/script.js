const single = 'this is a string'
const double = "this is a string"

const backticks = `This is a string ${2 + 2}`

const sum = (a, b) => a + b;

const total = `The sum is ${sum(403,2)}`

const rows = `1
2
3
4` // cannot do this with normal strings 

const greeting = "Hi I\'m John but people call me \"Johhny\"";
// using backticks is easier though
console.log(single)
console.log( double)
console.log(total)
console.log(rows)
console.log(greeting);
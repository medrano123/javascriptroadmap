// Perfoms an action for each element of the array
// Always returns undefined


let names = [ 'Jon', 'Jenny', 'Johnny' ];

// for (let i = 0;i < names.length; i++) {
//     console.log(i, names[i]);
// }


// const logTheName = (values, index) => {
//     console.log(values, index);
// }
// Another way to do it 
// names.forEach((value, index) => { 
//     console.log(value, index);
// })

//names.forEach(logTheName);
names.forEach((values, index) => console.log(values, index)); //best way to do it

// Whats its return value
const values = names.forEach((values, index) => console.log(values, index)); 
console.log(values) //undefined


// use when you want to do something with each element of the array

//do not use you want to stop or break when some condition is true
// do not use when working with async code

let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach((number) => {sum += number})

console.log(sum);
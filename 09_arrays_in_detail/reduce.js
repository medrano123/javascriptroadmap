// Array reduce
// Iterates over them and computes them into a sigle value

const groceryList = [29, 12, 45, 35, 87, 110];

// let total = 0;

// groceryList.forEach((price) => total += price)


// console.log(total);

const total = groceryList.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue 
}, 0 )

console.log(total);

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const sum = numbers.reduce((accumulator, val) => {
    return accumulator + val
}, 0)

console.log(sum);

const values = [ 5, 2, 3, 1, 2 ];

const sum1 = values.reduce((accumulator, val) => {
    return accumulator + val
}, 0)

console.log(sum1);

// Arrays are indeed objects

const months = [ 'January', 'February', 'March', 'April' ];

// console.log(typeof months);
months[2] = "NOT MARCH"
months[4] = "May"

console.log(months[0]);
console.log(months)
console.log(months.length)

const values = [
    "Apple",
    { name : "John"},
    true,
    () => {

    }
]

console.log(values);

for(let i = 0; i < months.length; i++){
    console.log(months[i])
}
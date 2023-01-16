// Filters an array - certain elements
// filter is non-mutative - doesnt change original array

const numbers = [-10, 0, -2, 15, -36, 25] // Array of postitive and negative numbers

const positiveNumbers = numbers.filter((number) => number >= 0)
const positiveNumbers1 = []

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= 0 )
        positiveNumbers1.push(numbers[i])
}

console.log(numbers)
console.log(positiveNumbers)
console.log(positiveNumbers1)

var employeesData = [
	{
    	name: "Sebastian",
    	overtime: 5
	},
	{
    	name: "Cardi Vee",
    	overtime: 10
	},
	{
    	name: "George Lopez",
    	overtime: 12
	}
];

const employeesToReward = employeesData.filter((employee) => employee.overtime >= 7)
const employeeNames = employeesToReward.map((employee) => employee.name)

console.log(employeesToReward)
console.log(employeeNames)

employeeNames.forEach((name) => console.log(`${name} recieved a reward`))
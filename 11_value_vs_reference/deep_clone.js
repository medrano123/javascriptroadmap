// Deep cloning - For an object to become a deep clonse it must remove all of the references 

const person = {
	firstName: 'Emma', 
	car: {
		brand: 'BMW',
		color: 'blue',
		wheels: 4,
	}
};


//const newPerson = { ...person, car: { ...person.car} }; //deep cloning removes the reference of the object within the person object

// newPerson.firstName = "Pablo"; 
// newPerson.car.color= "red";

// console.log(person);
// console.log(newPerson);


// 1st method JSON.stringify
const stringifiedPerson = JSON.stringify(person)
console.log(stringifiedPerson) //WE GET A STRING
const newPerson = JSON.parse(stringifiedPerson); // creates the actual deep clone of person 

// PROPER WAY TO DO IT IN ONE LINE 
const newPerson1 = JSON.parse(JSON.stringify(person)); 

newPerson.firstName = "wiffa";
newPerson.car.color = "red";

console.log(person);
console.log(newPerson);

// 2nd method json.
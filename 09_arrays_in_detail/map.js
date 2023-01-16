// Difference between foreach is that map method allocated memory to store and return values
// meanwhile foreach does not and has a return value of undefined
// foreach method allows you to change the original array
// while the map method will return a new array while leaving the original one alone

const inventory = [
	{ price: 5, name: 'eggs'  }, 
	{ price: 4, name: 'ham'  },
	{ price: 3, name: 'mayo'  },
	{ price: 5, name: 'bread'  },
];

const prices = inventory.map((item) => item.price )
const items = inventory.map((item) => item.name )

console.log(prices)
console.log(items)
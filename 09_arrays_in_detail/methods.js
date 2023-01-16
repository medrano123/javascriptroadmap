// Different methods we can use on Arrays

const names = [ 'Jon', 'Bob', 'David', 'Mark' ];

// Array Push adds a new element the entered values to the end of the array

//console.log(names.push('Dean')); //array.push returns the length of the array when it is pushed
names.push('Dean');

console.log(names);


// Array Pop DELETES a new element the entered values to the end of the array
//console.log(names.pop()); // returns the popped value

const removedValue = names.pop();

console.log(removedValue);
console.log(names)


// Array Shift - deleted the first value from the array and pushed everything over

names.shift(); // removed jon and moved evertyhing over 
console.log(names);

//Array Unshift - adds a new value to the start of the array
names.unshift('Jon');
console.log(names)

// Array Splice - splices values into the array - adds/removes values to the positions you choose 
names.splice(2,0, "Jenny", "Johnny"); // position, how many values to remove, what to insert
console.log(names)

// Array Slice - Good if you want to create a new array and only copy some of the values
const noOneLikesJonAndMark = names.slice(1,5) //Only keeps these values
console.log(noOneLikesJonAndMark)
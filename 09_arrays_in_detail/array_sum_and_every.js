const array = [1, 2, 3, 4, 5]

// Array some - tests if atleast one element in the array passes some test 
const greaterThanThree = (number) => number > 3;

console.log(array.some(greaterThanThree)); // returns true


console.log(array.some((el) => el > 3))

// Array every - is every element passing the test

console.log(array.every((el) => el > -3))



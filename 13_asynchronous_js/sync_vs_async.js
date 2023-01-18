// Synchronous Javascript is one in which the code is executed line by line and their tasks are 
// completed instantly, i.e. there is no time delay in the completion of the tasks for those lines of code.

// Synchronous Javascript

// const functionOne = () => {
//     console.log('Function One');

//     functionTwo();

//     console.log('Function One, Part 2')
// }

// const functionTwo = () => {
//     console.log('Function Two');
// }

// functionOne();

// Function One
// Function Two
// Functino One, Part 2


// Asynchronous Javascript is one in which some lines of code take time to run. These tasks are run in the background 
// while the Javascript engine keeps executing other lines of code. When the result of the asynchronous tasks gets available,
//  it is then used in the program.

//Asynchronous Javascript 

const functionOne = () => {
    console.log('Function One'); // 1

    functionTwo();

    console.log('Function One, Part 2') // 2
}

const functionTwo = () => {
    setTimeout(() => console.log('Function Two'), 2000); // 3
}

functionOne();

// Function One
// Functino One, Part 2
// (after two second delay)
// Function Two
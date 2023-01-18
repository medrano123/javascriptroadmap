// Asynchronous Code

// setInterval - execute a chunk of code after a given amount of time has  passed


const myInterval = setInterval(()=> console.log('Hello world'), 1000);

clearInterval(myInterval); // only want an interval to continue until a specific amount of actions/time has passed


// setTimeout - execute a chunk of code after a given amount of time has passed

const myInterval1 = setTimeout(()=> console.log('Hello world'), 1000);

clearTimeout(myInterval1);
// Closures gives you access to the outer functions scope from an inner function
// once it executes then everything within that scope is gone

const outer = () => {
    const outerVar = "hello";

    const inner = () => {
        const innerVar = "hi"
        console.log( outerVar,innerVar)
    }
    return inner
}

// console.log(outerVar);
const innerfunction = outer();
innerfunction()

// const init = () => {
//     const hobby = "learning javascript" // local variable created by init function

//     const displayHobby = () => { //displayhobby is the inner function or a closure
//         console.log(hobby); //using a variable created in the parent function
//     }

//     displayHobby();
// }

// init();

const init = () => {
    const hobby = "learning javascript" // local variable created by init function

    const displayHobby = () => { //displayhobby is the inner function or a closure
        console.log(hobby); //using a variable created in the parent function
    }

    return displayHobby
}

const myfunc = init();
myfunc();

// 
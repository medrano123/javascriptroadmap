// Scope shows us where we have access to 
// 1. We have Global scope which everything has access to
// 2. A Function scope (local scope)
// 3. A Block Scope (let  and const variables)



//Global Scope can access them and used to store constants
// Using too many variables in the Global scope wil remain in the memory until its been executed  
// May cause unpredictable behaviour
const name = "Pennywinkle";

const logName = () => {
    console.log(name);
}

logName();

//Local Scope - variables deined within a function aka function scope
// variables cant be used outside of their function scope
// variable names can be reused

const someFunction = () => {
    // local scope # 1
    
    const name1 = "Jenniffer"
    console.log(name1);

    const anotherFunction = () => {
        console.log(name1);
    }

    anotherFunction();
}

someFunction();

// Block Scope (applies to const and let variables)

if(true){
    const person = "josh";
    console.log(person);
}

 
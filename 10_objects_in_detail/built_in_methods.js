// A method assocated with an object

//Arrow functions are the best to use
const myObj = {
    myMethod: () => {

    },
    myMethod1: function(){

    },
    myMethod3(){

    },
}

const dog = {
    name: 'Fluffy', 
    age: 2,
    bark: () => {
        // this javascript keyword
        console.log('Bark Bark Bark')
    },
    listProperties: function(){
        console.log(this.age, this.name)
    }
}

console.log(dog.name);
console.log(dog.age);
dog.bark();
dog.listProperties();
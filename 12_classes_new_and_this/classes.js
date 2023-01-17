// A class is a schema for an object that can save many values

const person = {
    name: "Melissa",
    age: 24,
    isWorking: true,
}


class Person {
    constructor(name, age, isWorking) {
        this.name = name;
        this.age = age;
        this.isWorking = isWorking;
    }
}

const user = new Person('Melissa', 24, true);
const user1 = new Person('John', 23, true);
const user2 = new Person('Mildred', 21, true);
const user3 = new Person('Pinkles', 21, true);
const user4 = new Person('Dragon', 20, true);

console.log(user);

// Now how can we recreate this but with a functional approach

const createPerson = (name, age, isWorking) => ({ name, age, isWorking})
    // const userSchema = {
    //     name,
    //     age,
    //     isWorking,
    // }
    //return { name, age, isWorking }
//}

const user12 = createPerson('Melissa', 24, true);
const user122 = createPerson('josh', 24, true);

const user1223 = createPerson('Crandor', 24, true);
const user12232 = createPerson('Elvarg', 24, true);

console.log(user12);
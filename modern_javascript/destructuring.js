const person = {
    firstName: 'Gary',
    lastName: 'Vee',
    car: {
      color: 'red',
      wheels: 4
    },
    animals: {
      dog: {
        name: 'Fluffy',
        age: 3,
      },
       cat: {
        name: 'Kitty',
        age: 3,
      }
    }
  }
  
  // Destructuring
  const { firstName, lastName, car: { color, wheels }, animals: { cat, dog } } = person;

  console.log(firstName);
  console.log(lastName);

  console.log(color);
  console.log(wheels);
  console.log(cat);
  console.log(dog);

// Node

const test = (req, res) => {
    const{  body, params } = req;
  }

//REACT

const Component = ({ keys, }) => {

}


// Array destructuring
 
const instrucions = ['Hello', 'I', 'am' , 'sarah']

// const greeting = instrucions[0];
// const name = instrucions[3];

const [greeting ,,, name1] = instrucions
console.log(greeting, name1);


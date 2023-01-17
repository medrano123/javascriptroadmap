// This keyword
// Points to a particular object


function Sentence(words){
    this.words = words;
    console.log(this)
}
const firstString = new Sentence('Hello this is a sentence');

console.log(this);


const person = {
    name: 'John',
    getName( ){
        console.log(this)
    } //function inside of an object is called a method
};

person.getName();

function Car(color, brand, wheels){
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;

    console.log(this)
}

const blueCar = new Car('blue', 'BMW', 4);
const redCar = new Car('red', 'Ferrari', 4);
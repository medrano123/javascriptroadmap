// Includes does this array include some element

const bookshelf = ["Moby Dick", "Little Women", "The Great Gatsby", "Pride And Prejudice"];

const array1 = [1,2,3]
console.log(array1.includes(4));

const pets = ['cat', 'dog', 'llama']
console.log(pets.includes('dog'));


if(bookshelf.includes('Moby')){
    console.log("We have that book here you go")
} else {
    console.log("We do not have that book")
}
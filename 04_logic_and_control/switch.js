// Switch statements are similar to if statements 
// With if you have just a few statements
// If you have a larger number of conditions use switch
// Use different operations based on conditions

const superhero = "Captain America";

switch (superhero){
    case "Iron Man": 
        console.log('I AM IRONMAN');
    break
    case "Captain America":
        console.log('I am captain america')
    break
    case "Thor":
        console.log('Thats my hammer')
    break
    case "Black Widow":
        console.log('One shot one kill')
    break
    default:
        console.log('Enter a valid superhero name')
    break
        
}
// Guests 

const guestList = "Our guests are: emma, jacob, isabella, ethan";

// 1. Get a length of the string. Store it in a variable called length

const length = guestList.length;
console.log(length); //44

// 2. Uppercase the quest list
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

// 3. Check is Ethan is on the uppercasedguest list and store it in isEthanOnTheList

const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');
console.log(isEthanOnTheList);

// 4. create substring that only has the guest.
const substring = uppercasedGuestList.slice(16);
console.log(substring);

// 5. Creat an array of names of people that or on the list
const guests = substring.split(' ');
console.log(guests);

// 6. 
// Object constructor

// Object.keys() creates an array containing the keys of an object

// initialize the object

const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

const positions = Object.keys(employees)
console.log(positions)


// Object.values() creates an array containing the values of an object
// Object.values(object);

const session = {
    id:1,
    time: '27-July-2018',
    device: 'mobile',
    browser: 'chrome'
};

const sessionInfo = Object.values(session)
console.log(sessionInfo);

// Object.entries() creates a nested array of  the key/value pairs of an object
// Object.entries(object);

const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: "Open Source"
};

const entries = Object.entries(operatingSystem);
console.log(entries);

entries.forEach((entry) => {
    let key = entry[0]
    let value = entry[1]

    console.log(`${key}: ${value}`)
})


// Object.freeze() prevents modification of existing properties and prevents properties from being added or removed
// Object.freeze(object);

const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

const admin = Object.freeze(user);

admin.password = 'hunt34243er2';
console.log(admin)

// Object.seal() prevents new properties from being added but allows old ones to be modified
// Object.seal(object);

const user1 = {
    username: 'AzureDiamond',
    password: 'hunter2'

};

const newUser = Object.seal(user1);
newUser.username = 'hunt34243er2';
newUser.active = true;

console.log(newUser);
// Promises are used to avoid callball hell as seen from the callback.js as it can become deeply nested and hard to manage

// Promises are objects that return either the succesfully fetched data, or the error

// const fetchUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Now we have the user")

//         //reject('User not found')
//         resolve({ username: 'Michael' })
//     }, 1000);
// });

const fetchUser = (username) => {
	return new Promise((resolve, reject) => {
			setTimeout(() => {
			console.log('Now we have the user');
	
			resolve({ username });
		}, 2000);
	})
}

const fetchUserPhotos = (username) => {
	return new Promise((resolve, reject) => {
			setTimeout(() => {
		console.log('Now we have the photos');
	
			resolve(['photo1', 'photo2']);
		}, 2000);
	})
}

const fetchPhotoDetails = (photo) => {
    return new Promise((resolve, reject) => {
                setTimeout(() => {
            console.log('Now we have the photo details');
        
            resolve('details...');
            }, 2000);
        })
    }

// fetchUser
//     .then((user) => console.log(user.username))
//     .catch((error) => console.log(error));


fetchUser('Michael')
	.then((user) => fetchUserPhotos(user.username))
	.then((photos) => fetchPhotoDetails(photos[0]))
	.then((detail) => console.log(detail))
// async await is an addition to promises
// an easier and cleaner way to work with promises
// look and behave more like synchronoous functions and are easier to work with
// async await is simply an addition to promises


// ASYNC promises return promises! 

// AWAIT  go hand in hand waits for the promise to return a result
const fetchNumber = async () => {
    return 25;
}

// console.log(fetchNumber());

fetchNumber()
    .then((number) => console.log(number));

const consoleFetchedNumber = async () => { 
    //fetchNumber(); // returns a promise
    //console.log(await fetchNumber());

    const number = await fetchNumber();
    console.log(number);
} 

consoleFetchedNumber();  


const fetchUser = (username) => {
	return new Promise((resolve, reject) => {
			setTimeout(() => {
			console.log(`Now we have the user for ${username}`);
	
			resolve(username);
		}, 2000);
	})
}

const fetchUserPhotos = (username) => {
	return new Promise((resolve, reject) => {
			setTimeout(() => {
		console.log(`now we have the photos for ${username}`);
	
			resolve(['photo1', 'photo2']);
		}, 2000);
	})
}

const fetchPhotoDetails = (photo) => {
return new Promise((resolve, reject) => {
			setTimeout(() => {
		console.log(`now we have the photo details for ${photo}`);
	
		resolve('details...');
		}, 2000);
	})
}

const displayData = async () => {
	const user = await fetchUser('Adrian')
	const photos = await fetchUserPhotos(user.username);
	const detail = await fetchPhotoDetails(photos[0]);

	console.log(detail);
}

displayData();



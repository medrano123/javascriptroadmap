// Callbacks function - calls back after a certain action - in this case after the user is fetched

// Data Fetching
 

// API

// Fetch user from database
const fetchUser = (username, callback ) =>{
    console.log( 'Fetching...')
    setTimeout(() => {
        console.log("Now we have the user")
        callback({ username })
    }, 1000);
};

const fetchUserPhotos = (username, callback) => {
    setTimeout(() => {
        console.log(`Now we have the photos for ${username}`)

        callback([ 'Photo 1', 'Photo 2' ])
    }, 1000);
}

const fetchPhotoDetails = (photo, callback) => {
    setTimeout(() => {
        console.log(`Now we have the photos details for the photo ${photo}`)

        callback('Details...')
    }, 1000);

}
// { username: "Michael"}

const user = fetchUser('Michael', (user) => {
    console.log(`Your name is: ${user.username}`); 

    fetchUserPhotos(user.username, ( userPhotos ) => {
        console.log(`Your photos are: ${userPhotos}`)

        fetchPhotoDetails(userPhotos[0], (details) => {
            console.log(`Your photo details are ${details}`)
        })
    });
});
 

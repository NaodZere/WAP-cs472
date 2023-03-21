// Create a new Promise that resolves or rejects after a random delay
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Generate a random number between 0 and 10
      const randomNumber = Math.floor(Math.random() * 10);
      // If the number is greater than 5, resolve the promise with a success message
      if (randomNumber > 5) {
        resolve(`Success! The number is ${randomNumber}`);
      } else {
        // Otherwise, reject the promise with an error message
        reject(`Error! The number is ${randomNumber}`);
      }
    }, 1000);
  });
  
  // Call the promise's then() method to handle the resolved result, or the catch() method to handle the rejected error
  myPromise
    .then(result => console.log(result)) // Log the success message
    .catch(error => console.error(error)); // Log the error message
  
//Promise in javascript

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        console.log(randomNumber);
        if (randomNumber > 0.5) {
            resolve(randomNumber); // Resolve with a value
        } else {
            reject(new Error("Random number is too low")); // Reject with an error
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log("Success:", result); // Handle the resolved value
    })
    .catch((error) => {
        console.error("Error:", error.message); // Handle the rejected error
    })
    .finally(() => {
        console.log("Promise completed."); // Optional, called regardless of success or failure
    });


//     We create a new Promise using the Promise constructor, which takes a function as its argument. This function, known as the executor function, is called immediately when the Promise is created. It receives two functions, resolve and reject, which are used to fulfill or reject the Promise, respectively.
// Inside the executor function, we perform some asynchronous operation (simulated by setTimeout here). If the operation is successful, we call resolve with the result; if it encounters an error, we call reject with an Error object.
// We then use the then method to specify what to do when the Promise is successfully resolved. We chain a catch method to handle any errors that may occur during the asynchronous operation.
// Finally, the finally method allows us to specify code that should be executed regardless of whether the Promise is fulfilled or rejected.
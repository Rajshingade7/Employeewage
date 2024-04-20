// In JavaScript, async and await are used to handle asynchronous operations in a more synchronous-looking way, making asynchronous code easier to read and write.

// async Function:
// The async keyword is used to declare an asynchronous function, which allows you to use the await keyword inside it.
// An async function always returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an exception, the promise will be rejected with the thrown value.

async function fetchData() {
    return 'Data fetched!';
}

fetchData().then(data => {
    console.log(data); // Output: Data fetched!
});

async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('fetch Data !');
        }, 1000);
    });
}

async function displayData() {
    try {
        const data = await fetchData();
        console.log(data); // Output: Data fetched!
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// Here in this example firstly fetchdata function is resolved completely and then and then only new console line is printed 
// Here with the help of await keyword we can wait for the promise to be resolved(means fetchdata function) and then we can use the data.
displayData();

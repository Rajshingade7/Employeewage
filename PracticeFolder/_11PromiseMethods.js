myPromise.then(
    (result) => {
        console.log("Success:", result);
    },
    (error) => {
        console.error("Error:", error.message);
    }
);

myPromise.catch((error) => {
    console.error("Error:", error.message);
});

myPromise.finally(() => {
    console.log("Promise completed.");
});


Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("One or more promises rejected:", error);
    });


    Promise.race([promise1, promise2])
    .then((result) => {
        console.log("First promise to resolve:", result);
    })
    .catch((error) => {
        console.error("First promise to reject:", error);
    });

// Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

function greeting(name, callback) {
    console.log("Hello, " + name);
    callback(); // Execute the callback function
}

function farewell() {
    console.log("Goodbye!");
}

greeting("Alice", farewell); // Output: Hello, Alice
                              //         Goodbye!

 //   In this example, farewell is a callback function passed to the greeting function. It's executed synchronously after the greeting message is printed.

// 


///***Another example of callbacks function in javascript */
const calculate =(a,b,operation)=>{
    return operation(a,b);
};
const addition=calculate(3,4,function(num1,num2){
    return num1+num2;
});
console.log(addition);